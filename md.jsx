import React from "react";
import ReactMarkdown from "react-markdown";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function MarkdownComponent() {
  const markdownText = `
  # Titre principal

  Voici un exemple de code JSX :
  `;

  return (
    <div>
      <h1>Contenu Markdown</h1>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}

const YourComponent = () => {
  const code = `
    function App() {
      return (
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
      );
    }
  `;

  return (
    <div>
      <h2>Code JSX avec SyntaxHighlighter</h2>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <MarkdownComponent />
      <YourComponent />
    </div>
  );
}
