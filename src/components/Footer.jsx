import React from 'react';
import { 
  Zap, HeartHandshake, MapPin, Mail, Phone, 
  FileText, ArrowUp, ExternalLink 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function Footer({ onOpenPosterModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Grand Tagline Banner from Poster */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 py-10 px-4 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-2 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-200">
            Official ECW 2027 Tagline
          </span>
          <h2 className="text-2xl sm:text-4xl font-black italic tracking-wide">
            "Conserve Energy, Conserve Tomorrow"
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 font-medium">
            Save Energy, Secure Energy: Towards Viksit Bharat 2047 &bull; 15 – 19 March 2027
          </p>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Partnership */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight">
                  VIT CHENNAI
                </span>
                <p className="text-[11px] text-emerald-400 font-bold">
                  School of Electrical Engineering
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Energy Conservation Week 2027 is a landmark collaborative initiative with <strong>Havells India Limited</strong> promoting clean energy technologies, power thrift, and campus sustainability.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-md bg-red-950/60 text-red-300 font-bold text-xs border border-red-800/80">
                In association with HAVELLS
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Event Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About the Event</a></li>
              <li><a href="#objectives" className="hover:text-emerald-400 transition-colors">Mission &amp; Objectives</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">6 Event Highlights</a></li>
              <li><a href="#poster" className="hover:text-emerald-400 transition-colors">Official Poster Showcase</a></li>
              <li><a href="#champion" className="hover:text-emerald-400 transition-colors">Be an Energy Champion</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Energy Savings Calculator</a></li>
              <li><a href="#committee" className="hover:text-emerald-400 transition-colors">Organizing Committee</a></li>
            </ul>
          </div>

          {/* Col 3: Official Poster & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Downloads
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenPosterModal}
                className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-between text-slate-200 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  View Official Poster
                </span>
                <span className="text-[10px] text-slate-400">JPG Preview</span>
              </button>

              <a
                href="/ECW_Poster_Revised_v2.pdf"
                download="ECW_Poster_Revised_v2.pdf"
                className="w-full p-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-between text-emerald-300 transition-colors"
              >
                <span className="flex items-center gap-1.5 font-bold">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  ECW_Poster_Revised_v2.pdf
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">731 KB</span>
              </a>
            </div>
          </div>

          {/* Col 4: Venue & Campus Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Vellore Institute of Technology (VIT), Chennai Campus<br />
                  Vandalur - Kelambakkam Road, Chennai – 600127, Tamil Nadu, India.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>select.ecw2027@vit.ac.in</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Back to Top
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; 2027 School of Electrical Engineering, VIT Chennai &bull; In association with Havells India Limited
          </p>
          <p className="text-[11px]">
            Towards Viksit Bharat 2047 &bull; Sustainable Campus @ VIT
          </p>
        </div>

      </div>
    </footer>
  );
}
