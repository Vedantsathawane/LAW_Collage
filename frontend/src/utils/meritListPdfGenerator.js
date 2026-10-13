import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Renders the HTML template matching Image 1 into a DOM node if not already present.
 */
function createOffscreenSheet(listData) {
  const fullHeaderTitle = listData.fullHeaderTitle || (
    listData.title && listData.publishedDate
      ? `${listData.title.toUpperCase()} | ${listData.publishedDate}`
      : (listData.displayDate ? `EXTENDED ROUND MERIT LIST | ${listData.displayDate}` : "EXTENDED ROUND MERIT LIST | 12-10-2026")
  );
  const displayDate = listData.displayDate || listData.publishedDate || "12-10-2026";
  const publicationTime = listData.publicationTime || listData.publicationTimeDisplay || "1:00 PM IST";

  let sections = [];
  if (listData.sections && Array.isArray(listData.sections) && listData.sections.length > 0) {
    sections = listData.sections;
  } else if (listData.categoriesData && Array.isArray(listData.categoriesData)) {
    sections = listData.categoriesData.map(c => ({
      categoryName: c.categoryName,
      items: (c.candidates || []).map(cand => ({
        srNo: cand.srNo,
        name: cand.name,
        interSeMerit: cand.interSeMerit,
        meritSrNo: cand.meritListNo || cand.meritSrNo,
        percentile: cand.cetPercentile || cand.percentile,
        category: cand.category
      }))
    }));
  }

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-9999px';
  wrapper.style.top = '0';
  wrapper.style.width = '794px'; // Standard A4 width in px at 96 DPI
  wrapper.style.backgroundColor = '#ffffff';
  wrapper.style.zIndex = '-9999';

  let sectionsHtml = '';
  sections.forEach(sec => {
    sectionsHtml += `
      <tr style="background-color: #E5E7EB; border-top: 1px solid #000; border-bottom: 1px solid #000; font-weight: 800;">
        <td colspan="6" style="padding: 8px 12px; text-transform: uppercase; text-align: left; font-family: sans-serif; font-size: 11px; letter-spacing: 0.05em;">
          ${sec.categoryName}
        </td>
      </tr>
    `;
    (sec.items || []).forEach(item => {
      sectionsHtml += `
        <tr style="border-bottom: 1px solid #9CA3AF; font-size: 12px; font-family: 'Times New Roman', Times, serif;">
          <td style="border-right: 1px solid #000; padding: 7px; text-align: center; font-weight: 600;">${item.srNo}</td>
          <td style="border-right: 1px solid #000; padding: 7px 10px; font-weight: 700; text-align: left;">${item.name}</td>
          <td style="border-right: 1px solid #000; padding: 7px; text-align: center;">${item.interSeMerit}</td>
          <td style="border-right: 1px solid #000; padding: 7px; text-align: center; font-weight: 700;">${item.meritSrNo}</td>
          <td style="border-right: 1px solid #000; padding: 7px; text-align: center; font-weight: 700;">${item.percentile}</td>
          <td style="padding: 7px; text-align: center; font-weight: 600; text-transform: uppercase;">${item.category}</td>
        </tr>
      `;
    });
  });

  wrapper.innerHTML = `
    <div style="background-color: #ffffff; color: #000000; padding: 32px 40px; font-family: 'Times New Roman', Times, serif; width: 100%; box-sizing: border-box;">
      <!-- Header -->
      <div style="text-align: center; border-bottom: 2px solid #000000; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="font-size: 26px; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 6px 0;">MERIT LIST</h1>
        <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 6px 0;">Dr. Milind Yerne College of Law, Kosara Kondha</h2>
        <p style="font-size: 12px; font-weight: 600; color: #1F2937; margin: 0 0 8px 0;">CET CAP Round-IV (Institutional Round) 2026-27 | L.L.B. (3 Year Course) |</p>
        <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; border-top: 1px solid #000000; padding-top: 4px; display: inline-block; padding-left: 16px; padding-right: 16px;">
          ${fullHeaderTitle}
        </div>
      </div>

      <!-- Table -->
      <table style="width: 100%; border-collapse: collapse; border: 2px solid #000000; margin-bottom: 36px; font-size: 12px;">
        <thead>
          <tr style="background-color: #F3F4F6; border-bottom: 2px solid #000000; font-weight: 700; text-align: center;">
            <th style="border-right: 1px solid #000; padding: 8px 4px; width: 48px;">Sr. No.</th>
            <th style="border-right: 1px solid #000; padding: 8px 10px; text-align: left;">Name of Candidate</th>
            <th style="border-right: 1px solid #000; padding: 8px 4px; width: 90px;">Inter-SE-Merit</th>
            <th style="border-right: 1px solid #000; padding: 8px 4px; width: 105px;">Merit List Sr. No.</th>
            <th style="border-right: 1px solid #000; padding: 8px 4px; width: 105px;">CET Percentile</th>
            <th style="padding: 8px 4px; width: 85px;">Category</th>
          </tr>
        </thead>
        <tbody>
          ${sectionsHtml}
        </tbody>
      </table>

      <!-- Footer Block -->
      <div style="border-top: 1px dashed #9CA3AF; padding-top: 24px; display: flex; justify-content: space-between; align-items: center;">
        
        <!-- Blue Published Badge -->
        <div style="border: 2px solid rgba(30, 58, 138, 0.6); background-color: rgba(239, 246, 255, 0.6); padding: 10px 14px; border-radius: 8px; width: 175px; box-sizing: border-box;">
          <div style="font-weight: 800; font-style: italic; font-size: 13px; color: #1E3A8A; border-bottom: 1px solid #93C5FD; padding-bottom: 4px; margin-bottom: 4px;">
            1st Published
          </div>
          <div style="font-size: 11px; color: #172554; font-weight: 500;">${displayDate}</div>
          <div style="font-size: 11px; color: #172554; font-weight: 700;">${publicationTime.toLowerCase()}</div>
          <div style="font-style: italic; font-size: 9px; color: #1E40AF; margin-top: 4px;">Verified Official Copy</div>
        </div>

        <!-- Center Red Seal Stamp -->
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div style="width: 82px; height: 82px; border-radius: 50%; border: 3px double #991B1B; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4px; text-align: center; color: #7F1D1D; text-transform: uppercase; font-family: sans-serif; box-sizing: border-box;">
            <div style="font-size: 6.5px; font-weight: 900; line-height: 1;">DR. MILIND YERNE</div>
            <div style="font-size: 5.5px; font-weight: 800; line-height: 1.1;">COLLEGE OF LAW</div>
            <div style="font-size: 5px; color: #991B1B; line-height: 1.1;">KOSARA KONDHA</div>
            <div style="font-size: 8px; font-weight: 900; margin-top: 2px;">SEAL</div>
          </div>
        </div>

        <!-- Right Signature Block -->
        <div style="text-align: right; min-width: 175px;">
          <div style="border-bottom: 1px solid #9CA3AF; width: 160px; margin-left: auto; margin-bottom: 4px; padding-bottom: 2px; font-style: italic; font-size: 11px; color: #4B5563;">
            [Authorized Signature]
          </div>
          <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; color: #000000; font-family: sans-serif;">
            PRINCIPAL / INCHARGE
          </div>
          <div style="font-size: 11px; font-weight: 600; color: #1F2937;">
            Dr. Milind Yerne College of Law
          </div>
        </div>

      </div>
    </div>
  `;

  return wrapper;
}

/**
 * Downloads a 100% pixel-perfect PDF matching what the user sees in the Straight Document Sheet.
 */
export async function downloadMeritListPDF(listData, customFilename) {
  const safeRound = (listData.roundTitle || listData.title || 'Merit-List')
    .replace(/[^a-zA-Z0-9_-]/g, '-');
  const safeDate = (listData.publishedDate || listData.displayDate || '2026')
    .replace(/[^a-zA-Z0-9_-]/g, '-');
  const filename = customFilename || `DMYCL-Merit-List-${safeRound}-${safeDate}.pdf`;

  // 1. Look for existing visible document element in the DOM
  let targetElement = document.getElementById('printable-merit-document');
  let isCreated = false;
  let wrapper = null;

  if (!targetElement) {
    wrapper = createOffscreenSheet(listData);
    document.body.appendChild(wrapper);
    targetElement = wrapper.firstElementChild;
    isCreated = true;
  }

  try {
    // 2. Render high-resolution canvas using html2canvas
    const canvas = await html2canvas(targetElement, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: 1024
    });

    // 3. Put into standard A4 jsPDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12; // 12mm page margin
    const contentWidth = pageWidth - (margin * 2);
    const contentHeight = (canvas.height * contentWidth) / canvas.width;

    const imgData = canvas.toDataURL('image/jpeg', 0.98);
    pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, Math.min(contentHeight, pageHeight - (margin * 2)));

    // 4. Trigger download
    pdf.save(filename);
  } catch (error) {
    console.error("html2canvas PDF generation failed:", error);
    // Fallback: browser print dialog
    window.print();
  } finally {
    if (isCreated && wrapper && wrapper.parentNode) {
      wrapper.parentNode.removeChild(wrapper);
    }
  }
}
