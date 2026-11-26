import React from 'react';
import { 
  Lightbulb, Cpu, SunMedium, Leaf, CheckCircle2, 
  Target, Sparkles, TrendingUp, Users, Award 
} from 'lucide-react';
import { objectives } from '../data/eventData';

export default function Objectives() {
  const iconMap = {
    Lightbulb: Lightbulb,
    Cpu: Cpu,
    SunMedium: SunMedium,
    Leaf: Leaf,
  };

  const stats = [
    { label: 'Days of Green Action', value: '5 Days', detail: '15 – 19 March 2027' },
    { label: 'Campus Competitions', value: '6 Events', detail: 'Cash Prizes & Citations' },
    { label: 'Target Participation', value: '1,500+', detail: 'Students, Faculty & Staff' },
    { label: 'National Vision', value: '2047', detail: 'Towards Viksit Bharat' },
  ];

  return (
    <section id="objectives" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            Core Mission &amp; Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Objectives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Guided by national energy security goals and the Viksit Bharat 2047 roadmap, our initiative focuses on four transformative pillars.
          </p>
        </div>

        {/* 4 Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, index) => {
            const IconComponent = iconMap[obj.icon] || Lightbulb;
            return (
              <div
                key={obj.id}
                className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900/60 p-6 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${obj.color} text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 dark:text-slate-800 group-hover:text-emerald-500/30 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                {/* Bottom Verification Indicator */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Poster Priority Goal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Numbers Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white shadow-xl border border-emerald-700/40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-emerald-700/50">
            {stats.map((stat, idx) => (
              <div key={idx} className={idx > 1 ? 'pt-4 lg:pt-0' : ''}>
                <div className="text-2xl sm:text-3xl font-black text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-emerald-200">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
