import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Award, CheckCircle2, 
  ArrowRight, Mic, Sparkles, Palette, HelpCircle, 
  ClipboardCheck, ChevronRight, Users, Gift 
} from 'lucide-react';
import { eventHighlights } from '../data/eventData';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('All');

  const iconMap = {
    Mic: Mic,
    Sparkles: Sparkles,
    Palette: Palette,
    HelpCircle: HelpCircle,
    ClipboardCheck: ClipboardCheck,
    Award: Award,
  };

  const categories = ['All', 'Competition & Expo', 'Knowledge Series', 'Creative Arts', 'Hands-on Fieldwork', 'Institutional Award'];

  const filteredEvents = activeFilter === 'All' 
    ? eventHighlights 
    : eventHighlights.filter(e => e.category === activeFilter);

  return (
    <section id="events" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            15 – 19 March 2027 Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Event Highlights &amp; Competitions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Explore the 6 signature events featured on the official Energy Conservation Week 2027 poster.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const IconComponent = iconMap[event.icon] || Award;
            return (
              <div
                key={event.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Category Badge & Icon */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {event.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {event.title}
                  </h3>

                  {/* Day, Time & Venue */}
                  <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {event.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </div>
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer: Recognition (Zero Overlap) */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Recognition / Reward:
                    </div>
                    <div className="font-semibold text-xs text-emerald-700 dark:text-emerald-400 flex items-start gap-1.5 leading-snug">
                      <Gift className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{event.certificate}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Havells Special Notice with clean official Havells red */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-red-500/5 dark:bg-red-950/20 border border-red-500/20 dark:border-red-900/40 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e31837] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            H
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Industry Collaboration with Havells India Limited
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Top winners in Student Projects and Quiz competitions will receive Havells merit vouchers, mentorship opportunities, and campus commendations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
