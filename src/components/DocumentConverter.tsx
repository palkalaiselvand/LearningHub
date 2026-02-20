import { ChangeEvent, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import { convertPdfToWord, convertWordToPdf } from '../utils/documentConverters';

interface DocumentConverterProps {
  onError: (value: string | null) => void;
}

type ConversionMode = 'pdf-to-word' | 'word-to-pdf';

const DocumentConverter = ({ onError }: DocumentConverterProps) => {
  const [mode, setMode] = useState<ConversionMode>('pdf-to-word');
  const [isConverting, setIsConverting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedInput = mode === 'pdf-to-word' ? '.pdf,application/pdf' : '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  const validateFile = (file: File) => {
    if (mode === 'pdf-to-word') {
      return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    }

    return (
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.name.toLowerCase().endsWith('.docx')
    );
  };

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!validateFile(file)) {
      onError(mode === 'pdf-to-word' ? 'Please upload a valid PDF file.' : 'Please upload a valid DOCX file.');
      return;
    }

    setIsConverting(true);
    onError(null);

    try {
      const result = mode === 'pdf-to-word' ? await convertPdfToWord(file) : await convertWordToPdf(file);
      saveAs(result.blob, result.filename);
    } catch (error) {
      onError('Conversion failed. Please verify the document and try again.');
    } finally {
      setIsConverting(false);
      event.target.value = '';
    }
  };

  return (
    <section className="panel converter-panel">
      <h2>Document Converter</h2>
      <p className="helper-text">Convert between PDF and Word formats while preserving content structure as much as possible.</p>

      <div className="converter-controls">
        <label>
          <input
            type="radio"
            name="convert-mode"
            checked={mode === 'pdf-to-word'}
            onChange={() => setMode('pdf-to-word')}
          />
          PDF → Word (.docx)
        </label>
        <label>
          <input
            type="radio"
            name="convert-mode"
            checked={mode === 'word-to-pdf'}
            onChange={() => setMode('word-to-pdf')}
          />
          Word (.docx) → PDF
        </label>
      </div>

      <button
        type="button"
        className="primary-button"
        disabled={isConverting}
        onClick={() => inputRef.current?.click()}
      >
        {isConverting ? 'Converting...' : mode === 'pdf-to-word' ? 'Upload PDF and Convert' : 'Upload DOCX and Convert'}
      </button>

      <input ref={inputRef} type="file" accept={acceptedInput} onChange={handleFileSelect} hidden />
    </section>
  );
};

export default DocumentConverter;
