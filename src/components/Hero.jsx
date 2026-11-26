import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Zap, ArrowRight, Download, Eye, 
  Sparkles, Award, ShieldCheck, HeartHandshake, CheckCircle2 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function Hero({ onOpenPosterModal, onOpenPledgeModal }) {
  // Countdown to March 15, 2027
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-03-15T09:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.18),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(15,23,42,0))] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Institutional Header Badge */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-emerald-200/80 dark:border-emerald-800/80 text-xs sm:text-sm font-semibold">
            <span className="text-slate-800 dark:text-slate-200 whitespace-nowrap">VIT CHENNAI</span>
            <span className="text-emerald-500">&bull;</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sustainable Campus @ VIT
            </span>
            <span className="text-emerald-500">&bull;</span>
            <span className="text-[#e31837] font-black tracking-wide flex items-center gap-1 whitespace-nowrap">
              <HeartHandshake className="w-3.5 h-3.5" />
              In Association with HAVELLS
            </span>
          </div>

          <div>
            <span className="inline-block px-3 py-0.5 rounded-md bg-slate-900 dark:bg-emerald-950 text-white dark:text-emerald-300 text-[11px] font-bold tracking-widest uppercase shadow-sm">
              School of Electrical Engineering (SELECT)
            </span>
          </div>
        </div>

        {/* Main Grid: Left Content, Right Poster Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Theme & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4">
            
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Annual Flagship Green Initiative
              </div>

              {/* Refined Font Size & Clean Responsive Hierarchy */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Energy{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Conservation
                </span>
                <div className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white bg-emerald-600 px-3.5 py-1 rounded-xl shadow-md whitespace-nowrap">
                    Week 2027 <Zap className="w-4 h-4 text-yellow-300 fill-current" />
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm">
                    <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    15 – 19 March 2027
                  </span>
                </div>
              </h1>
            </div>

            {/* In Association with Havells subtitle - Authentic Corporate Red */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
              <span>In association with</span>
              <span className="font-black text-[#e31837] tracking-wider text-sm sm:text-base">
                HAVELLS
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                India Limited
              </span>
            </div>

            {/* Theme Callout Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-slate-900 text-white shadow-xl shadow-emerald-900/10 border border-emerald-600/30">
              <div className="text-[10px] sm:text-[11px] font-bold text-emerald-200 uppercase tracking-widest mb-1">
                Official National Theme
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white italic tracking-wide">
                "Save Energy, Secure Energy:
                <span className="text-yellow-400 block sm:inline sm:ml-2 not-italic font-black">
                  Towards Viksit Bharat 2047"
                </span>
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-emerald-100 font-normal leading-relaxed">
                A campus-wide initiative at VIT Chennai to create awareness, promote efficient energy use, showcase clean tech innovations, and build a sustainable environment.
              </p>
            </div>

            {/* Live Countdown Timer */}
            <div className="pt-0.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Countdown to Event Kick-off (15 March 2027)
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm"
                  >
                    <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                      {item.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <button
                onClick={onOpenPosterModal}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-md shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <Eye className="w-4 h-4 shrink-0" />
                <span>View Official Poster</span>
              </button>

              <a
                href="/ECW_Poster_Revised_v2.pdf"
                download="ECW_Poster_VIT_Chennai_Havells.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 shadow-sm transition-all whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 6 Flagship Competitions
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Industry & Academic Mentors
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Certificates & Vouchers
              </span>
            </div>

          </div>

          {/* Right Column: Clean Poster Card WITHOUT Overlapping Date Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Decorative aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-3 shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 whitespace-nowrap">
                    <ShieldCheck className="w-4 h-4" /> Official Event Poster
                  </span>
                  <span className="font-black text-[#e31837] tracking-wider text-[11px] whitespace-nowrap">
                    HAVELLS Associated
                  </span>
                </div>

                {/* Poster Image with Zoom overlay - Clean view without blocking date badge */}
                <div 
                  onClick={onOpenPosterModal}
                  className="relative overflow-hidden rounded-xl cursor-pointer group/img aspect-[1/1.5] bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    src="/ecw-poster.jpg"
                    alt="Energy Conservation Week 2027 Poster - VIT Chennai and Havells"
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay button on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <span className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-transform whitespace-nowrap">
                      <Eye className="w-4 h-4 text-emerald-600" />
                      Click to View Full-Size Poster
                    </span>
                    <span className="text-white text-[11px] font-semibold drop-shadow">
                      Source: ECW_Poster_Revised_v2.pdf
                    </span>
                  </div>
                </div>

                {/* Bottom card actions */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <button
                    onClick={onOpenPosterModal}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5" /> Fullscreen View
                  </button>

                  <a
                    href="/ECW_Poster_Revised_v2.pdf"
                    download="ECW_Poster_Revised_v2.pdf"
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
                    title="Download Official PDF"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
