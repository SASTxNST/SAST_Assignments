import React, { useState } from "react";
import Header from "./components/header";
import ChartCard from "./components/chartcard";
import DataTable from "./components/datatable";

export default function App() {
  const [telemetryData, setTelemetryData] = useState([
    { time: "10:00", temp: 23, voltage: 3.7 },
    { time: "10:10", temp: 24, voltage: 3.6 },
    { time: "10:20", temp: 25, voltage: 3.6 },
    { time: "10:30", temp: 26, voltage: 3.5 },
    { time: "10:40", temp: 24, voltage: 3.5 },
    { time: "10:50", temp: 23, voltage: 3.4 },
  ]);

  const handleFileUpload = (jsonData) => {
    setTelemetryData(jsonData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-8">
      {/* Header */}
      <Header onFileUpload={handleFileUpload} />

      {/* Charts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard
          title="Temperature vs Time"
          data={telemetryData}
          dataKey="temp"
          color="#f97316"
          unit="°C"
          icon="temp"
        />

        <ChartCard
          title="Voltage vs Time"
          data={telemetryData}
          dataKey="voltage"
          color="#10b981"
          unit="V"
          icon="voltage"
        />
      </div>

      {/* Data Table */}
      <DataTable data={telemetryData} />
    </div>
  );
}
