import React, { useState, useEffect } from 'react';
import { 
  X, Download, ExternalLink, ZoomIn, ZoomOut, 
  RotateCcw, Printer, FileText, HeartHandshake 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function PosterModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const resetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative flex flex-col w-full max-w-4xl max-h-[95vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>ECW 2027 Official Poster</span>
                <span className="text-xs font-semibold text-red-600 bg-red-100 dark:bg-red-950/80 dark:text-red-400 px-2 py-0.2 rounded">
                  HAVELLS
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                School of Electrical Engineering, VIT Chennai &bull; Reference: ECW_Poster_Revised_v2.pdf
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 text-slate-700 dark:text-slate-300">
              <button 
                onClick={zoomOut}
                className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button 
                onClick={resetZoom}
                className="px-1.5 py-0.5 text-xs font-medium hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button 
                onClick={zoomIn}
                className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Direct PDF Link */}
            <a
              href="/ECW_Poster_Revised_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            {/* Download Button */}
            <a
              href="/ECW_Poster_Revised_v2.pdf"
              download="ECW_Poster_Revised_v2.pdf"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm transition-colors"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors ml-1"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Poster Viewer Body */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/20 dark:bg-slate-950/60 min-h-[350px]">
          <div 
            className="transition-transform duration-200 max-w-full flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
          >
            <img
              src="/ecw-poster.jpg"
              alt="Energy Conservation Week 2027 Full Poster"
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-slate-200/50 dark:border-slate-800"
            />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 dark:text-white">Dates:</span>
            <span>15 – 19 March 2027</span>
            <span>&bull;</span>
            <span className="font-semibold text-slate-900 dark:text-white">Venue:</span>
            <span>VIT Chennai Campus</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-red-600 dark:text-red-400 font-bold">
              In association with HAVELLS India Limited
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
