import { useState } from 'react';
import DocumentConverter from './components/DocumentConverter';
import Editor from './components/Editor';
import PdfGenerator from './components/PdfGenerator';
import Preview from './components/Preview';
import { useTheme } from './hooks/useTheme';

const initialContent = `# Markdown to PDF\n\n## Quick Start\n- Type your content in the editor\n- Upload a .md file\n- Click **Generate PDF**\n\n\`\`\`ts\nconsole.log('Hello PDF!');\n\`\`\``;

const App = () => {
  const [content, setContent] = useState(initialContent);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Text / Markdown to PDF</h1>
        <button type="button" className="secondary-button" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      <div className="layout-grid">
        <Editor
          content={content}
          onContentChange={setContent}
          errorMessage={errorMessage}
          onError={setErrorMessage}
        />
        <Preview content={content} />
      </div>

      <footer className="app-footer">
        <PdfGenerator
          content={content}
          onError={setErrorMessage}
          loading={isGenerating}
          setLoading={setIsGenerating}
        />
      </footer>

      <DocumentConverter onError={setErrorMessage} />
      {errorMessage && <p className="error-message global-error">{errorMessage}</p>}
    </main>
  );
};

export default App;
