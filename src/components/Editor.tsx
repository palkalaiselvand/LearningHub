import { ChangeEvent, DragEvent, useRef, useState } from 'react';

interface EditorProps {
  content: string;
  errorMessage: string | null;
  onContentChange: (value: string) => void;
  onError: (value: string | null) => void;
}

const ALLOWED_FILE_TYPES = ['text/plain', 'text/markdown'];
const ALLOWED_EXTENSIONS = ['.txt', '.md', '.markdown'];

const Editor = ({ content, errorMessage, onContentChange, onError }: EditorProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isValidFile = (file: File) => {
    const hasAllowedMime = ALLOWED_FILE_TYPES.includes(file.type);
    const hasAllowedExtension = ALLOWED_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext));
    return hasAllowedMime || hasAllowedExtension;
  };

  const processFile = (file: File) => {
    if (!isValidFile(file)) {
      onError('Invalid file type. Please upload a .md or .txt file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target?.result;
      if (typeof fileContent === 'string') {
        onContentChange(fileContent);
        onError(null);
      }
    };
    reader.onerror = () => {
      onError('Could not read file. Please try again.');
    };
    reader.readAsText(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <section className="panel">
      <h2>Editor</h2>
      <button type="button" className="secondary-button" onClick={() => fileInputRef.current?.click()}>
        Upload .md/.txt
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".md,.markdown,.txt,text/markdown,text/plain"
        onChange={handleFileChange}
        hidden
      />

      <div
        className={`drop-zone ${isDragging ? 'drag-active' : ''}`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        Drag and drop Markdown/text file here
      </div>

      <textarea
        className="editor-textarea"
        value={content}
        onChange={(event) => {
          onContentChange(event.target.value);
          if (errorMessage) {
            onError(null);
          }
        }}
        placeholder="Type markdown here..."
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  );
};

export default Editor;
