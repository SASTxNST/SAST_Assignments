import React from "react";
import { Database, Download } from "lucide-react";

export default function DataTable({ data }) {
  const exportToCSV = () => {
    const headers = ["Time", "Temperature (°C)", "Voltage (V)"];
    const csvContent = [
      headers.join(","),
      ...data.map((row) => `${row.time},${row.temp},${row.voltage}`),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "telemetry-data.csv";
    a.click();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 shadow-xl">
        {/* Table Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-semibold">Telemetry Data Table</h2>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition text-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-700">
          <table className="w-full text-left">
            <thead className="bg-slate-900/50">
              <tr className="border-b border-slate-700">
                <th className="py-4 px-6 font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Time
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Temperature (°C)
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Voltage (V)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/50 hover:bg-slate-700/30 transition group">
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-300 group-hover:text-white transition">
                      {entry.time}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-orange-400 font-mono font-semibold">
                      {entry.temp}°
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-green-400 font-mono font-semibold">
                      {entry.voltage}V
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Stats */}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-4">
            <span>
              Total readings:{" "}
              <span className="text-white font-semibold">{data.length}</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              Time range:{" "}
              <span className="text-white font-semibold">
                {data[0]?.time} - {data[data.length - 1]?.time}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
