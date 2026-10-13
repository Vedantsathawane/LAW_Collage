/**
 * Pure JavaScript PDF 1.4 Generator for Dr. Milind Yerne College of Law Merit Lists.
 * Produces clean, professional vector PDF documents conforming to PDF-1.4 standard.
 * Works seamlessly across modern mobile and desktop browsers with 0 external dependencies.
 */

// Helper to escape PDF text strings
function escapePdfText(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

/**
 * Builds a valid PDF-1.4 binary/text string for a Merit List record.
 * @param {Object} listData
 * @returns {string} PDF document string
 */
export function buildMeritListPdfString(listData) {
  const title = listData.title || "MERIT LIST";
  const collegeName = listData.collegeName || "Dr. Milind Yerne College of Law, Kosara Kondha";
  const subtitle = listData.subtitle || "CET CAP (Institutional Round) 2026-27 | L.L.B. (3 Year Course)";
  const publishedDate = listData.publishedDate || listData.displayDate || "12-10-2026";
  const publicationTime = listData.publicationTime || listData.publicationTimeDisplay || "1:00 PM IST";
  const signatory = listData.signatory || "Dr. Milind Yerne, Principal / Incharge";
  const publishedNote = listData.publishedNote || `Published on ${publishedDate} at ${publicationTime}`;

  // Normalize categories / sections
  let categories = [];
  if (listData.categoriesData && Array.isArray(listData.categoriesData)) {
    categories = listData.categoriesData.map(c => ({
      name: c.categoryName,
      candidates: (c.candidates || []).map(cand => ({
        srNo: cand.srNo,
        name: cand.name,
        interSeMerit: cand.interSeMerit,
        meritListNo: cand.meritListNo || cand.meritSrNo,
        percentile: cand.cetPercentile || cand.percentile,
        category: cand.category
      }))
    }));
  } else if (listData.sections && Array.isArray(listData.sections)) {
    categories = listData.sections.map(s => ({
      name: s.categoryName,
      candidates: (s.items || []).map(item => ({
        srNo: item.srNo,
        name: item.name,
        interSeMerit: item.interSeMerit,
        meritListNo: item.meritSrNo || item.meritListNo,
        percentile: item.percentile || item.cetPercentile,
        category: item.category
      }))
    }));
  }

  // Page dimensions (A4 in points: 595.28 x 841.89)
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 36;
  const tableWidth = pageWidth - (marginX * 2); // 523.28 pt

  // Column definitions (total width = 523.28)
  // Sr(35), Name(203.28), Inter-SE(70), Merit No(70), CET %(75), Cat(70)
  const colWidths = [35, 203.28, 70, 70, 75, 70];
  const colHeaders = ["Sr. No.", "Name of Candidate", "Inter-SE-Merit", "Merit List No.", "CET Percentile", "Category"];

  // Stream content commands array
  const stream = [];

  // Helper drawing functions
  const setFill = (r, g, b) => stream.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
  const setStroke = (r, g, b) => stream.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG`);
  const setLineWidth = (w) => stream.push(`${w} w`);
  const drawRect = (x, y, w, h, fill = true, stroke = true) => {
    stream.push(`${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${fill && stroke ? 'B' : fill ? 'f' : 'S'}`);
  };
  const drawLine = (x1, y1, x2, y2) => {
    stream.push(`${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`);
  };

  const drawText = (font, size, x, y, text, align = 'left', color = [0, 0, 0]) => {
    setFill(color[0], color[1], color[2]);
    stream.push(`BT`);
    stream.push(`/${font} ${size} Tf`);
    
    // Approximate centering/right-align calculation based on avg char width
    let xOffset = x;
    const escaped = escapePdfText(text);
    const approxWidth = (size * 0.52) * text.length;

    if (align === 'center') {
      xOffset = x - (approxWidth / 2);
    } else if (align === 'right') {
      xOffset = x - approxWidth;
    }

    stream.push(`${xOffset.toFixed(2)} ${y.toFixed(2)} Td`);
    stream.push(`(${escaped}) Tj`);
    stream.push(`ET`);
  };

  // 1. TOP BORDER & BACKGROUND CARD
  setStroke(0.87, 0.68, 0.14); // #DFAE24 Gold accent
  setLineWidth(1.5);
  drawRect(marginX, 30, tableWidth, pageHeight - 60, false, true);

  // 2. HEADER SECTION
  let curY = pageHeight - 65;

  // College Name
  drawText('F2', 15, pageWidth / 2, curY, collegeName, 'center', [0.15, 0.07, 0.05]);
  curY -= 16;

  // Affiliation Subtitle
  drawText('F1', 9, pageWidth / 2, curY, "Approved by Bar Council of India (BCI) & Affiliated to RTMNU Nagpur", 'center', [0.4, 0.35, 0.3]);
  curY -= 13;
  drawText('F1', 8.5, pageWidth / 2, curY, "Kosra-Kondha, Pauni Tehsil, Bhandara District, Maharashtra - 441908", 'center', [0.45, 0.4, 0.35]);
  curY -= 14;

  // Gold Divider Line
  setStroke(0.87, 0.68, 0.14);
  setLineWidth(1);
  drawLine(marginX + 15, curY, marginX + tableWidth - 15, curY);
  curY -= 20;

  // Official Title
  drawText('F2', 17, pageWidth / 2, curY, title, 'center', [0.15, 0.07, 0.05]);
  curY -= 15;

  // Subtitle (Round details)
  drawText('F2', 10, pageWidth / 2, curY, subtitle, 'center', [0.15, 0.07, 0.05]);
  curY -= 14;

  // Date & Time Banner
  setFill(0.98, 0.96, 0.92);
  drawRect(pageWidth / 2 - 160, curY - 3, 320, 16, true, false);
  drawText('F2', 9, pageWidth / 2, curY + 1, `PUBLISHED DATE: ${publishedDate} | SCHEDULE: ${publicationTime}`, 'center', [0.72, 0.55, 0.11]);
  curY -= 22;

  // 3. TABLE HEADER ROW
  const headerHeight = 22;
  setFill(0.15, 0.07, 0.05); // Dark chocolate header
  drawRect(marginX, curY - headerHeight, tableWidth, headerHeight, true, false);

  let colX = marginX;
  for (let i = 0; i < colHeaders.length; i++) {
    const w = colWidths[i];
    const headerAlign = (i === 1) ? 'left' : 'center';
    const textX = (i === 1) ? colX + 8 : colX + (w / 2);
    drawText('F2', 8.5, textX, curY - 14, colHeaders[i], headerAlign, [1, 1, 1]);
    colX += w;
  }
  curY -= headerHeight;

  // 4. CATEGORIES AND CANDIDATES ROWS
  const rowHeight = 18;
  const catHeaderHeight = 17;

  categories.forEach((catGroup) => {
    // Category Banner Row
    setFill(0.95, 0.93, 0.88); // Light beige banner
    setStroke(0.87, 0.68, 0.14);
    setLineWidth(0.5);
    drawRect(marginX, curY - catHeaderHeight, tableWidth, catHeaderHeight, true, true);

    drawText('F2', 9, marginX + 10, curY - 12, `CATEGORY: ${catGroup.name.toUpperCase()}`, 'left', [0.15, 0.07, 0.05]);
    drawText('F1', 8, marginX + tableWidth - 10, curY - 12, `${catGroup.candidates.length} Candidate(s)`, 'right', [0.45, 0.4, 0.35]);
    curY -= catHeaderHeight;

    // Candidate Rows
    catGroup.candidates.forEach((cand, rIdx) => {
      const isEven = rIdx % 2 === 0;
      if (isEven) {
        setFill(1, 1, 1);
      } else {
        setFill(0.98, 0.97, 0.95);
      }
      setStroke(0.88, 0.84, 0.76);
      setLineWidth(0.4);
      drawRect(marginX, curY - rowHeight, tableWidth, rowHeight, true, true);

      // Render columns
      let xPos = marginX;

      // 1. Sr. No.
      drawText('F1', 8, xPos + (colWidths[0] / 2), curY - 12, String(cand.srNo), 'center', [0.3, 0.3, 0.3]);
      xPos += colWidths[0];

      // 2. Candidate Name
      drawText('F2', 8.5, xPos + 8, curY - 12, String(cand.name).toUpperCase(), 'left', [0.12, 0.06, 0.04]);
      xPos += colWidths[1];

      // 3. Inter-SE-Merit
      drawText('F1', 8, xPos + (colWidths[2] / 2), curY - 12, `#${cand.interSeMerit}`, 'center', [0.15, 0.07, 0.05]);
      xPos += colWidths[2];

      // 4. Merit List No.
      drawText('F1', 8, xPos + (colWidths[3] / 2), curY - 12, String(cand.meritListNo), 'center', [0.15, 0.07, 0.05]);
      xPos += colWidths[3];

      // 5. CET Percentile
      drawText('F2', 8.5, xPos + (colWidths[4] / 2), curY - 12, String(cand.percentile), 'center', [0.72, 0.55, 0.11]);
      xPos += colWidths[4];

      // 6. Category
      drawText('F2', 8, xPos + (colWidths[5] / 2), curY - 12, String(cand.category), 'center', [0.15, 0.07, 0.05]);

      curY -= rowHeight;
    });
  });

  // 5. SIGNATORY & VERIFICATION FOOTER
  const footerY = 55;
  setStroke(0.87, 0.68, 0.14);
  setLineWidth(0.8);
  drawLine(marginX + 10, footerY + 45, marginX + tableWidth - 10, footerY + 45);

  // Left stamp / verification info
  drawText('F2', 8.5, marginX + 15, footerY + 30, "[VERIFIED OFFICIAL COPY] Dr. Milind Yerne College of Law Seal", 'left', [0.1, 0.5, 0.2]);
  drawText('F1', 7.5, marginX + 15, footerY + 18, publishedNote, 'left', [0.45, 0.4, 0.35]);
  drawText('F1', 7, marginX + 15, footerY + 8, "Official Institutional Admissions portal: drmycollegeoflaw.org/cap-admission/merit-list", 'left', [0.5, 0.5, 0.5]);

  // Right Signatory
  drawText('F2', 8.5, marginX + tableWidth - 15, footerY + 30, signatory, 'right', [0.15, 0.07, 0.05]);
  drawText('F1', 7.5, marginX + tableWidth - 15, footerY + 18, "Admission Incharge / Principal", 'right', [0.4, 0.35, 0.3]);
  drawText('F1', 7, marginX + tableWidth - 15, footerY + 8, "Pauni, Dist. Bhandara, Maharashtra", 'right', [0.5, 0.5, 0.5]);

  // Build Stream Object
  const streamData = stream.join('\n');
  const streamLen = streamData.length;

  const pdfParts = [];
  pdfParts.push("%PDF-1.4\n");

  const offsets = [];
  let curOffset = 0;
  const addObj = (objStr) => {
    offsets.push(curOffset);
    curOffset += objStr.length;
    pdfParts.push(objStr);
  };

  // Obj 1: Catalog
  addObj(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);

  // Obj 2: Pages
  addObj(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);

  // Obj 3: Page
  addObj(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`);

  // Obj 4: Contents Stream
  addObj(`4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamData}\nendstream\nendobj\n`);

  // Obj 5: Font F1 (Helvetica Regular)
  addObj(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);

  // Obj 6: Font F2 (Helvetica Bold)
  addObj(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  // Xref table
  const startXref = curOffset;
  let xrefStr = `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    xrefStr += `${String(offsets[i] + 9).padStart(10, '0')} 00000 n \n`;
  }
  xrefStr += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startXref + 9}\n%%EOF\n`;
  pdfParts.push(xrefStr);

  return pdfParts.join('');
}

/**
 * Generates and triggers browser download of the official Merit List PDF.
 * @param {Object} listData The merit list data record
 * @param {string} customFilename Optional filename
 */
export function downloadMeritListPDF(listData, customFilename) {
  try {
    const pdfContent = buildMeritListPdfString(listData);
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const safeRound = (listData.roundTitle || listData.title || 'Merit-List')
      .replace(/[^a-zA-Z0-9_-]/g, '-');
    const safeDate = (listData.publishedDate || listData.displayDate || '2026')
      .replace(/[^a-zA-Z0-9_-]/g, '-');
    const filename = customFilename || `DMYCL-Merit-List-${safeRound}-${safeDate}.pdf`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up blob URL after a short delay
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 2000);
  } catch (error) {
    console.error("Error generating Merit List PDF:", error);
    // Fallback: trigger print
    window.print();
  }
}
