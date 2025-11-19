import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Zap } from "lucide-react";

export default function ChartCard({ title, data, dataKey, color, unit, icon }) {
  const IconComponent = icon === "temp" ? TrendingUp : Zap;

  // Calculate stats
  const values = data.map((d) => d[dataKey]);
  const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
  const max = Math.max(...values).toFixed(2);
  const min = Math.min(...values).toFixed(2);

  return (
    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full`}
            style={{ backgroundColor: color }}></span>
          {title}
        </h2>
        <IconComponent className="w-5 h-5 text-slate-400" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700">
          <p className="text-xs text-slate-400">Avg</p>
          <p className="text-sm font-semibold" style={{ color }}>
            {avg}
            {unit}
          </p>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700">
          <p className="text-xs text-slate-400">Max</p>
          <p className="text-sm font-semibold" style={{ color }}>
            {max}
            {unit}
          </p>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-700">
          <p className="text-xs text-slate-400">Min</p>
          <p className="text-sm font-semibold" style={{ color }}>
            {min}
            {unit}
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#9CA3AF" style={{ fontSize: "12px" }} />
          <YAxis
            stroke="#9CA3AF"
            style={{ fontSize: "12px" }}
            label={{
              value: unit,
              angle: -90,
              position: "insideLeft",
              fill: "#9CA3AF",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#e2e8f0" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            name={`${title.split(" ")[0]} (${unit})`}
            dot={{ fill: color, r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
