import { saveAs } from 'file-saver';
import { generatePdfFromMarkdown } from '../utils/markdownPdf';

interface PdfGeneratorProps {
  content: string;
  onError: (value: string | null) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const PdfGenerator = ({ content, onError, loading, setLoading }: PdfGeneratorProps) => {
  const handleGeneratePdf = async () => {
    if (!content.trim()) {
      onError('Content is empty. Please enter text before generating a PDF.');
      return;
    }

    setLoading(true);
    onError(null);

    try {
      const pdfBlob = generatePdfFromMarkdown(content);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      saveAs(pdfBlob, `document_${timestamp}.pdf`);
    } catch (error) {
      onError('PDF generation failed. Please review your content and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type="button" className="primary-button" onClick={handleGeneratePdf} disabled={loading}>
      {loading ? 'Generating...' : 'Generate PDF'}
    </button>
  );
};

export default PdfGenerator;
