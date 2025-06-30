import { cn } from "@/lib/utils";
import { Editor, useMonaco } from "@monaco-editor/react";
import React from "react";

interface CodeEditorProps {
  value: string;
  onValueChange?: (value: string) => void;
  language: any;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
}

export default function CodeEditor({
  value,
  onValueChange,
  language,
  className,
  placeholder,
  readOnly = false,
}: CodeEditorProps) {
  const monaco = useMonaco();

  return (
    <div
      className={cn(
        "relative rounded-md border-2 h-80 overflow-hidden transition-colors",
        className
      )}
    >
      <Editor
        height="100%"
        value={value}
        language={language}
        theme={"vs-dark"}
        options={{
          readOnly: readOnly,
          minimap: { enabled: true },
          fontSize: 14,
          wordWrap: "on",
          scrollBeyondLastLine: true,
          padding: {
            top: 16,
            bottom: 16,
          },
          automaticLayout: true,
          bracketPairColorization: {
            enabled: true,
          },
          stickyScroll: {
            enabled: true,
          },
          copyWithSyntaxHighlighting: true,
          fontFamily: "Consolas, 'Courier New', monospace",
          lineNumbers: "on",
          glyphMargin: true,
          folding: true,
          renderLineHighlight: "line",
        }}
      />
    </div>
  );
}
