import { useRef, useState } from "react";

function compressPDFviaCanvas() {
  // Placeholder: PDF compression via Canvas requires a library (e.g., pdf-lib, pdf.js)
  alert("PDF compression via Canvas is not implemented yet.");
}

export default function PrintActionsBar() {
  const [collapsed, setCollapsed] = useState(true);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const toggleButtons = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`print-btn fixed top-4 right-4 z-50 bg-white p-4 transition-all print:hidden ${collapsed ? "collapsed" : ""} min-w-[56px] max-w-[90vw]`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="toggle-btn text-2xl px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200 border border-blue-300 shadow cursor-pointer block mx-auto"
        onClick={toggleButtons}
        aria-label="Toggle Actions"
      >
        ☰
      </button>
      {!collapsed && (
        <div className="flex flex-col gap-3 mt-4">
          <a
            href="https://wa.me/919524264656"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-900 font-medium border border-green-300 shadow cursor-default"
          >
            <span role="img" aria-label="WhatsApp">
              💬
            </span>{" "}
            Message in WhatsApp
          </a>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium border border-blue-300 shadow cursor-default"
            onClick={() => window.open("coverletter.html", "_blank")}
          >
            📄 Open Cover Letter
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-900 font-medium border border-purple-300 shadow cursor-default"
            onClick={() => window.open("message.html", "_blank")}
          >
            📝 Message Template
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-medium border border-yellow-300 shadow cursor-default"
            onClick={() => window.print()}
          >
            🖨️ Print Resume
          </button>
        </div>
      )}
    </div>
  );
}
