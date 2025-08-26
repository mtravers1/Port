import React, { useState } from "react";

export default function FileViewer() {
  const [showFile, setShowFile] = useState(false);

  // Example file (can be PDF, image, text, etc.)
  const fileUrl = "/example.pdf"; // Place your file inside the public/ folder

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setShowFile(!showFile)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showFile ? "Hide File" : "Show File"}
      </button>

      {showFile && (
        <div className="mt-6 w-full max-w-3xl">
          {/* If it's a PDF */}
          <iframe
            src={fileUrl}
            title="file viewer"
            className="w-full h-[500px] border rounded-lg shadow"
          ></iframe>

          {/* If it's an image instead, replace with: */}
          {/* <img src={fileUrl} alt="File" className="w-full rounded-lg shadow" /> */}
        </div>
      )}
    </div>
  );
}
