import { useState } from "react";

export default function PdfViewer() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowPdf(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View PDF
      </button>

      {showPdf && (
        <iframe
          src="/DataScienceDiabetesPredictions.pdf"
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "20px" }}
          title="PDF Viewer"
        ></iframe>
      )}
    </div>
  );
}
