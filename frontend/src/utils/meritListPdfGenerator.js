/**
 * Pure JavaScript PDF 1.4 Generator matching the Official Straight Document Sheet exactly.
 * Matches Image 1: Serif typography, black grid borders, gray section headers,
 * blue publication badge, circular red seal stamp, and authorized signature.
 */

function escapePdfText(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

export function buildMeritListPdfString(listData) {
  const title = "MERIT LIST";
  const collegeName = listData.collegeName || "Dr. Milind Yerne College of Law, Kosara Kondha";
  const sessionSubtitle = "CET CAP Round-IV (Institutional Round) 2026-27 | L.L.B. (3 Year Course) |";
  const fullHeaderTitle = listData.fullHeaderTitle || (
    listData.title && listData.publishedDate
      ? `${listData.title.toUpperCase()} | ${listData.publishedDate}`
      : (listData.displayDate ? `EXTENDED ROUND MERIT LIST | ${listData.displayDate}` : "EXTENDED ROUND MERIT LIST | 12-10-2026")
  );
  const displayDate = listData.displayDate || listData.publishedDate || "12-10-2026";
  const publicationTime = listData.publicationTime || listData.publicationTimeDisplay || "1:00 PM IST";

  // Normalize categories / sections
  let categories = [];
  if (listData.sections && Array.isArray(listData.sections) && listData.sections.length > 0) {
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
  } else if (listData.categoriesData && Array.isArray(listData.categoriesData)) {
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
  }

  // Page dimensions (A4 in points: 595.28 x 841.89)
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 40;
  const tableWidth = pageWidth - (marginX * 2); // 515.28 pt

  // Column definitions: total = 515.28 pt
  // Sr. No.(40), Name(195.28), Inter-SE-Merit(70), Merit List Sr. No.(70), CET Percentile(75), Category(65)
  const colWidths = [40, 195.28, 70, 70, 75, 65];
  const colHeaders = ["Sr. No.", "Name of Candidate", "Inter-SE-Merit", "Merit List Sr. No.", "CET Percentile", "Category"];

  const stream = [];

  const setFill = (r, g, b) => stream.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
  const setStroke = (r, g, b) => stream.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG`);
  const setLineWidth = (w) => stream.push(`${w} w`);
  const drawRect = (x, y, w, h, fill = true, stroke = true) => {
    stream.push(`${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${fill && stroke ? 'B' : fill ? 'f' : 'S'}`);
  };
  const drawLine = (x1, y1, x2, y2) => {
    stream.push(`${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`);
  };

  const drawCircle = (cx, cy, r, stroke = true, fill = false) => {
    const k = 0.55228475 * r;
    stream.push(`${(cx + r).toFixed(2)} ${cy.toFixed(2)} m`);
    stream.push(`${(cx + r).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx + k).toFixed(2)} ${(cy + r).toFixed(2)} ${cx.toFixed(2)} ${(cy + r).toFixed(2)} c`);
    stream.push(`${(cx - k).toFixed(2)} ${(cy + r).toFixed(2)} ${(cx - r).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx - r).toFixed(2)} ${cy.toFixed(2)} c`);
    stream.push(`${(cx - r).toFixed(2)} ${(cy - k).toFixed(2)} ${(cx - k).toFixed(2)} ${(cy - r).toFixed(2)} ${(cx - r).toFixed(2)} ${cy.toFixed(2)} c`);
    stream.push(`${(cx + k).toFixed(2)} ${(cy - r).toFixed(2)} ${(cx + r).toFixed(2)} ${(cx - r).toFixed(2)} ${(cx + r).toFixed(2)} ${cy.toFixed(2)} c`);
    stream.push(stroke && fill ? 'B' : fill ? 'f' : 'S');
  };

  const drawText = (font, size, x, y, text, align = 'left', color = [0, 0, 0]) => {
    setFill(color[0], color[1], color[2]);
    stream.push(`BT`);
    stream.push(`/${font} ${size} Tf`);
    let xOffset = x;
    const escaped = escapePdfText(text);
    // Approximation for width
    const approxWidth = (size * 0.48) * text.length;
    if (align === 'center') {
      xOffset = x - (approxWidth / 2);
    } else if (align === 'right') {
      xOffset = x - approxWidth;
    }
    stream.push(`${xOffset.toFixed(2)} ${y.toFixed(2)} Td`);
    stream.push(`(${escaped}) Tj`);
    stream.push(`ET`);
  };

  // 1. TOP HEADER (Serif Times font, clean black styling matching Image 1)
  let curY = pageHeight - 55;

  // Title: "MERIT LIST" (Times-Bold, 22pt)
  drawText('F2', 22, pageWidth / 2, curY, title, 'center', [0, 0, 0]);
  curY -= 22;

  // College Name: "Dr. Milind Yerne College of Law, Kosara Kondha" (Times-Bold, 15pt)
  drawText('F2', 15, pageWidth / 2, curY, collegeName, 'center', [0, 0, 0]);
  curY -= 16;

  // Session: "CET CAP Round-IV (Institutional Round) 2026-27 | L.L.B. (3 Year Course) |" (Times-Roman, 9.5pt)
  drawText('F1', 9.5, pageWidth / 2, curY, sessionSubtitle, 'center', [0.2, 0.2, 0.2]);
  curY -= 16;

  // Header Subtitle Banner: "EXTENDED ROUND MERIT LIST | 12-10-2026"
  // Top thin black line for subtitle box
  setStroke(0, 0, 0);
  setLineWidth(0.8);
  const bannerW = 260;
  drawLine(pageWidth / 2 - (bannerW / 2), curY + 11, pageWidth / 2 + (bannerW / 2), curY + 11);
  drawText('F2', 9.5, pageWidth / 2, curY, fullHeaderTitle.toUpperCase(), 'center', [0, 0, 0]);
  curY -= 16;

  // Bottom header double border
  setStroke(0, 0, 0);
  setLineWidth(1.5);
  drawLine(marginX, curY, marginX + tableWidth, curY);
  curY -= 18;

  // 2. TABLE GRID (Clean black borders & light gray header)
  const headerHeight = 24;
  setFill(0.95, 0.95, 0.95); // Light gray background
  setStroke(0, 0, 0);
  setLineWidth(1.2);
  drawRect(marginX, curY - headerHeight, tableWidth, headerHeight, true, true);

  // Column headers text and vertical dividers
  let colX = marginX;
  for (let i = 0; i < colHeaders.length; i++) {
    const w = colWidths[i];
    const headerAlign = (i === 1) ? 'left' : 'center';
    const textX = (i === 1) ? colX + 8 : colX + (w / 2);
    drawText('F2', 8.5, textX, curY - 15, colHeaders[i], headerAlign, [0, 0, 0]);

    if (i > 0) {
      setStroke(0, 0, 0);
      setLineWidth(0.8);
      drawLine(colX, curY, colX, curY - headerHeight);
    }
    colX += w;
  }
  curY -= headerHeight;

  // 3. TABLE BODY (Categories & Candidate Rows)
  const catHeaderHeight = 20;
  const rowHeight = 22;

  categories.forEach((catGroup) => {
    // Category Banner Row (Medium gray bg, black bold text)
    setFill(0.90, 0.90, 0.90);
    setStroke(0, 0, 0);
    setLineWidth(1);
    drawRect(marginX, curY - catHeaderHeight, tableWidth, catHeaderHeight, true, true);

    drawText('F5', 9, marginX + 8, curY - 14, catGroup.name.toUpperCase(), 'left', [0, 0, 0]);
    curY -= catHeaderHeight;

    // Candidate Rows
    catGroup.candidates.forEach((cand, rIdx) => {
      // White row background
      setFill(1, 1, 1);
      setStroke(0, 0, 0);
      setLineWidth(0.6);
      drawRect(marginX, curY - rowHeight, tableWidth, rowHeight, true, true);

      // Vertical column separator lines
      let vX = marginX;
      for (let i = 0; i < colWidths.length - 1; i++) {
        vX += colWidths[i];
        setStroke(0, 0, 0);
        setLineWidth(0.6);
        drawLine(vX, curY, vX, curY - rowHeight);
      }

      // Column Values
      let curColX = marginX;

      // 1. Sr. No.
      drawText('F2', 8.5, curColX + (colWidths[0] / 2), curY - 14, String(cand.srNo), 'center', [0, 0, 0]);
      curColX += colWidths[0];

      // 2. Name of Candidate
      drawText('F2', 8.5, curColX + 8, curY - 14, String(cand.name), 'left', [0, 0, 0]);
      curColX += colWidths[1];

      // 3. Inter-SE-Merit
      drawText('F1', 8.5, curColX + (colWidths[2] / 2), curY - 14, String(cand.interSeMerit), 'center', [0, 0, 0]);
      curColX += colWidths[2];

      // 4. Merit List Sr. No.
      drawText('F2', 8.5, curColX + (colWidths[3] / 2), curY - 14, String(cand.meritListNo), 'center', [0, 0, 0]);
      curColX += colWidths[3];

      // 5. CET Percentile
      drawText('F2', 8.5, curColX + (colWidths[4] / 2), curY - 14, String(cand.percentile), 'center', [0, 0, 0]);
      curColX += colWidths[4];

      // 6. Category
      drawText('F2', 8.5, curColX + (colWidths[5] / 2), curY - 14, String(cand.category), 'center', [0, 0, 0]);

      curY -= rowHeight;
    });
  });

  // 4. FOOTER BLOCK (Matching Image 1: Blue box on left, Red Seal in middle, Signature on right)
  const footerY = 95;

  // Dashed separator line
  stream.push(`[4 3] 0 d`); // Dashed line pattern
  setStroke(0.6, 0.6, 0.6);
  setLineWidth(0.8);
  drawLine(marginX, footerY + 65, marginX + tableWidth, footerY + 65);
  stream.push(`[] 0 d`); // Reset dash pattern to solid

  // A. Left Blue Box ("1st Published" badge)
  const blueBoxX = marginX + 5;
  const blueBoxY = footerY;
  const blueBoxW = 125;
  const blueBoxH = 54;

  setFill(0.94, 0.96, 0.99); // Light blue background
  setStroke(0.12, 0.25, 0.55); // Blue border
  setLineWidth(1.2);
  drawRect(blueBoxX, blueBoxY, blueBoxW, blueBoxH, true, true);

  // Blue box content
  drawText('F2', 9.5, blueBoxX + 10, blueBoxY + 41, "1st Published", 'left', [0.1, 0.2, 0.55]);
  setStroke(0.65, 0.75, 0.9);
  setLineWidth(0.6);
  drawLine(blueBoxX + 10, blueBoxY + 38, blueBoxX + blueBoxW - 10, blueBoxY + 38);

  drawText('F1', 8, blueBoxX + 10, blueBoxY + 27, displayDate, 'left', [0.1, 0.15, 0.35]);
  drawText('F2', 8, blueBoxX + 10, blueBoxY + 16, publicationTime.toLowerCase(), 'left', [0.1, 0.15, 0.35]);
  drawText('F3', 7.5, blueBoxX + 10, blueBoxY + 6, "Verified Official Copy", 'left', [0.15, 0.3, 0.65]);

  // B. Center Red Circular Stamp Seal
  const sealCenterX = pageWidth / 2;
  const sealCenterY = footerY + 27;

  setStroke(0.7, 0.15, 0.15); // Deep red stroke
  setLineWidth(1.5);
  drawCircle(sealCenterX, sealCenterY, 26, true, false); // Outer circle
  setLineWidth(0.8);
  drawCircle(sealCenterX, sealCenterY, 23.5, true, false); // Inner concentric circle

  drawText('F5', 5.5, sealCenterX, sealCenterY + 13, "DR. MILIND YERNE", 'center', [0.65, 0.1, 0.1]);
  drawText('F5', 5, sealCenterX, sealCenterY + 6, "COLLEGE OF LAW", 'center', [0.65, 0.1, 0.1]);
  drawText('F5', 4.5, sealCenterX, sealCenterY - 1, "KOSARA KONDHA", 'center', [0.65, 0.1, 0.1]);
  drawText('F5', 6.5, sealCenterX, sealCenterY - 9, "SEAL", 'center', [0.65, 0.1, 0.1]);

  // C. Right Signature Block
  const sigX = marginX + tableWidth - 10;
  drawText('F3', 8, sigX, footerY + 40, "[Authorized Signature]", 'right', [0.45, 0.45, 0.45]);
  setStroke(0.6, 0.6, 0.6);
  setLineWidth(0.75);
  drawLine(sigX - 110, footerY + 36, sigX, footerY + 36);

  drawText('F2', 8.5, sigX, footerY + 24, "PRINCIPAL / INCHARGE", 'right', [0, 0, 0]);
  drawText('F1', 8, sigX, footerY + 13, "Dr. Milind Yerne College of Law", 'right', [0.2, 0.2, 0.2]);

  // Compile PDF document stream
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

  addObj(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  addObj(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);
  addObj(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R /F4 8 0 R /F5 9 0 R >> >> >>\nendobj\n`);
  addObj(`4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamData}\nendstream\nendobj\n`);
  addObj(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>\nendobj\n`);
  addObj(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>\nendobj\n`);
  addObj(`7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Italic >>\nendobj\n`);
  addObj(`8 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);
  addObj(`9 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  const startXref = curOffset;
  let xrefStr = `xref\n0 10\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    xrefStr += `${String(offsets[i] + 9).padStart(10, '0')} 00000 n \n`;
  }
  xrefStr += `trailer\n<< /Size 10 /Root 1 0 R >>\nstartxref\n${startXref + 9}\n%%EOF\n`;
  pdfParts.push(xrefStr);

  return pdfParts.join('');
}

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

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 2000);
  } catch (error) {
    console.error("Error generating Merit List PDF:", error);
    window.print();
  }
}
