import React from 'react';
import { 
  Power, Lightbulb, ThermometerSnowflake, Cog, 
  MonitorOff, Sun, Award, Zap, ShieldCheck, HeartHandshake, CheckCircle2 
} from 'lucide-react';
import { championTips } from '../data/eventData';

export default function EnergyChampion({ onOpenPledgeModal }) {
  const iconMap = {
    Power: Power,
    Lightbulb: Lightbulb,
    ThermometerSnowflake: ThermometerSnowflake,
    Cog: Cog,
    MonitorOff: MonitorOff,
    Sun: Sun,
  };

  return (
    <section id="champion" className="py-20 bg-gradient-to-b from-emerald-50/60 to-white dark:from-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poster Ribbon Style Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-md shadow-amber-500/20 italic">
            ⚡ Be an Energy Champion!
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            6 Golden Rules from the Official Poster
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Adopt these six practical conservation habits across VIT Chennai hostels, research laboratories, classrooms, and offices.
          </p>
        </div>

        {/* 6 Champion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {championTips.map((tip) => {
            const IconComponent = iconMap[tip.icon] || Zap;
            return (
              <div
                key={tip.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Stat Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        {tip.stat}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {tip.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                    {tip.subtitle}
                  </div>

                  {/* Practical Action Tip */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {tip.tip}
                  </p>
                </div>

                {/* Bottom Impact Metric */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{tip.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Take the Energy Pledge CTA Box */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-slate-900 p-8 sm:p-10 text-white shadow-2xl border border-emerald-600/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-yellow-300">
              Campus-wide Movement
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Take the Energy Conservation Pledge
            </h3>
            <p className="text-sm text-emerald-100 max-w-xl">
              Commit to the 6 energy champion principles and receive a personalized digital <strong>Energy Champion Certificate</strong> from VIT Chennai &amp; Havells!
            </p>
          </div>

          <button
            onClick={onOpenPledgeModal}
            className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-lg shadow-yellow-400/20 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            Take the Pledge &amp; Get Certificate
          </button>
        </div>

      </div>
    </section>
  );
}
