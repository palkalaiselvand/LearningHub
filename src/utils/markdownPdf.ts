import jsPDF from 'jspdf';

const splitAndWriteText = (
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number => {
  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach((line: string) => {
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, x, y);
    y += lineHeight;
  });
  return y;
};

export const generatePdfFromMarkdown = (content: string): Blob => {
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4'
  });

  const lines = content.split('\n');
  let y = 20;

  lines.forEach((rawLine) => {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      y += 4;
      return;
    }

    if (line.startsWith('### ')) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      y = splitAndWriteText(doc, line.replace(/^###\s/, ''), 15, y, 180, 7);
      y += 2;
      return;
    }

    if (line.startsWith('## ')) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      y = splitAndWriteText(doc, line.replace(/^##\s/, ''), 15, y, 180, 8);
      y += 2;
      return;
    }

    if (line.startsWith('# ')) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      y = splitAndWriteText(doc, line.replace(/^#\s/, ''), 15, y, 180, 9);
      y += 3;
      return;
    }

    if (line.startsWith('```')) {
      doc.setFont('courier', 'normal');
      doc.setFontSize(10);
      y = splitAndWriteText(doc, line, 20, y, 170, 5);
      return;
    }

    if (line.startsWith('- ') || /^\d+\.\s/.test(line)) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      y = splitAndWriteText(doc, `• ${line.replace(/^(-\s|\d+\.\s)/, '')}`, 18, y, 175, 6);
      return;
    }

    const cleanLine = line
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    y = splitAndWriteText(doc, cleanLine, 15, y, 180, 6);
  });

  return doc.output('blob');
};
