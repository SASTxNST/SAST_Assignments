import React, { useRef } from "react";
import { Upload, FileJson } from "lucide-react";

export default function FileUpload({ onFileUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          onFileUpload(json);
        } catch (error) {
          alert("Invalid JSON file. Please upload a valid telemetry.json");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-5 py-2.5 rounded-lg cursor-pointer transition shadow-lg shadow-blue-500/30 group">
        <Upload className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">Upload JSON</span>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
        />
      </button>

      <div className="hidden sm:flex items-center gap-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg px-4 py-2">
        <FileJson className="w-4 h-4 text-slate-400" />
        <span className="text-xs text-slate-400">telemetry.json</span>
      </div>
    </div>
  );
}
