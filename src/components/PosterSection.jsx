import React from 'react';
import { 
  FileText, Download, Eye, ExternalLink, ShieldCheck, 
  Sparkles, HeartHandshake, Check, Share2, Printer 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function PosterSection({ onOpenPosterModal }) {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Energy Conservation Week 2027 | VIT Chennai & Havells',
        text: 'Save Energy, Secure Energy: Towards Viksit Bharat 2047 at VIT Chennai School of Electrical Engineering!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event URL copied to clipboard!');
    }
  };

  return (
    <section id="poster" className="py-20 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/10 text-[#e31837] dark:text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/20">
            <HeartHandshake className="w-3.5 h-3.5 text-[#e31837]" />
            In Association with HAVELLS India Limited
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Official Event Poster &amp; Circular
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Authorized poster released by the School of Electrical Engineering, VIT Chennai for Energy Conservation Week 2027.
          </p>
        </div>

        {/* Poster Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Poster with Interactive Controls */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group max-w-md w-full">
              
              {/* Decorative aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-300"></div>

              <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-xl border border-slate-200 dark:border-slate-800">
                
                {/* Poster Frame */}
                <div 
                  onClick={onOpenPosterModal}
                  className="relative overflow-hidden rounded-xl cursor-pointer group/img aspect-[1/1.45] bg-slate-100 dark:bg-slate-800 shadow-inner"
                >
                  <img
                    src="/ecw-poster.jpg"
                    alt="VIT Chennai and Havells Energy Conservation Week 2027 Poster"
                    className="w-full h-full object-contain bg-white dark:bg-slate-950 transition-transform duration-300 group-hover/img:scale-[1.02]"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <span className="px-4 py-2 rounded-full bg-white text-slate-900 font-extrabold text-xs shadow-lg flex items-center gap-2">
                      <Eye className="w-4 h-4 text-emerald-600" />
                      Click to Enlarge / Full View
                    </span>
                    <span className="text-white text-xs drop-shadow font-medium">
                      Source: ECW_Poster_Revised_v2.pdf
                    </span>
                  </div>
                </div>

                {/* Bottom Bar inside poster container */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    High Resolution (Revised v2)
                  </span>
                  <span>Size: ~731 KB PDF</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Key Poster Data & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Poster Highlights &amp; Endorsement
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Energy Conservation Week 2027 (ECW 2027)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                As detailed in the official publication <strong className="text-slate-900 dark:text-white">"ECW_Poster_Revised_v2.pdf"</strong>, this initiative unites the academic expertise of VIT Chennai with the pioneering electrical energy technologies of <strong>Havells India Limited</strong>.
              </p>
            </div>

            {/* Poster Details Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-slate-400 text-xs uppercase font-bold">Theme</span>
                <p className="font-bold text-slate-800 dark:text-slate-200">
                  Save Energy, Secure Energy: Towards Viksit Bharat 2047
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-slate-400 text-xs uppercase font-bold">Dates</span>
                <p className="font-bold text-emerald-600 dark:text-emerald-400">
                  15 – 19 March 2027 (5 Days)
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-slate-400 text-xs uppercase font-bold">Industrial Partner</span>
                <p className="font-extrabold text-[#e31837] tracking-wide">
                  HAVELLS India Limited
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-slate-400 text-xs uppercase font-bold">Convenor</span>
                <p className="font-bold text-slate-800 dark:text-slate-200">
                  Dr. Lenin N C
                </p>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Dean, School of Electrical Engineering (SELECT)
                </p>
              </div>
            </div>

            {/* Organizing Secretaries as given on the poster */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                Organizing Secretaries (From Official Poster):
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-700 dark:text-slate-200">
                <div>
                  <strong className="block text-slate-900 dark:text-white">Dr. P. S. Meera</strong>
                  <span className="text-slate-500 dark:text-slate-400">Associate Professor</span>
                </div>
                <div>
                  <strong className="block text-slate-900 dark:text-white">Dr. V. Lavanya</strong>
                  <span className="text-slate-500 dark:text-slate-400">Associate Professor</span>
                </div>
                <div>
                  <strong className="block text-slate-900 dark:text-white">Dr. C. Kamal</strong>
                  <span className="text-slate-500 dark:text-slate-400">Associate Professor</span>
                </div>
              </div>
            </div>

            {/* Poster Tagline */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-extrabold text-center tracking-wide text-sm sm:text-base shadow-sm">
              "Conserve Energy, Conserve Tomorrow"
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenPosterModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Full-Size Poster</span>
              </button>

              <a
                href="/ECW_Poster_Revised_v2.pdf"
                download="ECW_Poster_Revised_v2.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download Official PDF (731 KB)</span>
              </a>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                title="Share event link"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
