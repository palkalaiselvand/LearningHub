import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import mammoth from 'mammoth';
import { getDocument } from 'pdfjs-dist';

const cleanText = (value: string) => value.replace(/\s+/g, ' ').trim();

const getTimestamp = () => new Date().toISOString().replace(/[:.]/g, '-');

const stripHtml = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent ?? '';
};

export const convertPdfToWord = async (file: File): Promise<{ blob: Blob; filename: string }> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await getDocument({ data: arrayBuffer }).promise;
  const paragraphs: Paragraph[] = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const items = content.items as Array<{ str?: string }>;
    const pageText = items
      .map((item) => item.str ?? '')
      .join(' ')
      .split(/\s{2,}/)
      .map(cleanText)
      .filter(Boolean);

    pageText.forEach((text) => {
      paragraphs.push(new Paragraph({ children: [new TextRun(text)] }));
    });

    if (pageNumber < pdf.numPages) {
      paragraphs.push(new Paragraph({ children: [new TextRun('')] }));
    }
  }

  const document = new Document({
    sections: [{ children: paragraphs.length ? paragraphs : [new Paragraph('')] }]
  });

  const blob = await Packer.toBlob(document);
  return { blob, filename: `document_${getTimestamp()}.docx` };
};

export const convertWordToPdf = async (file: File): Promise<{ blob: Blob; filename: string }> => {
  const arrayBuffer = await file.arrayBuffer();
  const { value: html } = await mammoth.convertToHtml({ arrayBuffer });

  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const plainText = stripHtml(html);
  const lines = doc.splitTextToSize(plainText, 180);
  let y = 20;

  lines.forEach((line: string) => {
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 15, y);
    y += 6;
  });

  return { blob: doc.output('blob'), filename: `document_${getTimestamp()}.pdf` };
};
