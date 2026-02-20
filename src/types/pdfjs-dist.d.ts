declare module 'pdfjs-dist' {
  interface PdfDocumentProxy {
    numPages: number;
    getPage(pageNumber: number): Promise<{
      getTextContent(): Promise<{ items: unknown[] }>;
    }>;
  }

  export function getDocument(params: { data: ArrayBuffer }): { promise: Promise<PdfDocumentProxy> };
}
