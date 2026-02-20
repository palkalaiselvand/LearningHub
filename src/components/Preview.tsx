import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PreviewProps {
  content: string;
}

const Preview = ({ content }: PreviewProps) => (
  <section className="panel preview-panel">
    <h2>Live Preview</h2>
    <article className="markdown-preview">
      {content.trim() ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      ) : (
        <p className="placeholder">Preview appears here when you type or upload content.</p>
      )}
    </article>
  </section>
);

export default Preview;
