import React from "react";
import { Satellite, Radio, Radar } from "lucide-react";
import FileUpload from "./fileupload";

export default function Header({ onFileUpload }) {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
      </div>

      <div className="relative backdrop-blur-xl bg-gradient-to-r from-slate-900/80 via-blue-900/20 to-slate-900/80 border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 blur-xl"></div>

        <div className="relative flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Orbiting Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-20 h-20 border-2 border-blue-400/30 rounded-full"></div>
              </div>
              <div className="absolute inset-2 animate-spin-slower">
                <div className="w-16 h-16 border-2 border-purple-400/30 rounded-full"></div>
              </div>

              <div className="relative flex items-center justify-center w-20 h-20">
                <Satellite className="w-10 h-10 text-blue-400 animate-float" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  SAST CubeSat
                </span>
              </h1>
              <p className="text-slate-300 text-sm flex items-center gap-2">
                <Radio className="w-4 h-4 text-green-400 animate-pulse" />
                Real-time Telemetry Monitoring System
              </p>
            </div>
          </div>

          <FileUpload onFileUpload={onFileUpload} />
        </div>

        {/* Status Bar */}
        <div className="relative mt-8 flex flex-wrap gap-4">
          <div className="group relative backdrop-blur-lg bg-slate-800/50 hover:bg-slate-800/70 border border-green-500/30 hover:border-green-500/60 rounded-xl px-5 py-3 flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-medium text-slate-200">
              Status: <span className="text-green-400">Active</span>
            </span>
          </div>

          <div className="group relative backdrop-blur-lg bg-slate-800/50 hover:bg-slate-800/70 border border-blue-500/30 hover:border-blue-500/60 rounded-xl px-5 py-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <span className="text-sm font-medium text-slate-200">
              Orbit: <span className="text-blue-400">LEO 550km</span>
            </span>
          </div>

          <div className="group relative backdrop-blur-lg bg-slate-800/50 hover:bg-slate-800/70 border border-purple-500/30 hover:border-purple-500/60 rounded-xl px-5 py-3 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            <Radar className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-200">
              Mission: <span className="text-purple-400">Active</span>
            </span>
          </div>

          <div className="group relative backdrop-blur-lg bg-slate-800/50 hover:bg-slate-800/70 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-5 py-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <span className="text-sm font-medium text-slate-200">
              Signal: <span className="text-cyan-400">Strong</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
