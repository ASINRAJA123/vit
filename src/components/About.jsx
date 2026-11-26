import React from 'react';
import { 
  Info, ShieldCheck, HeartHandshake, Leaf, 
  Lightbulb, Zap, Award, CheckCircle2 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function About({ onOpenPosterModal }) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            Background &amp; Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About the Event
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A premier green initiative catalyzing academic excellence and industry leadership.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                Joint Initiative
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                School of Electrical Engineering &times; Havells India Limited
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-900">
                HAVELLS
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                VIT CHENNAI
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
            <strong>Energy Conservation Week 2027</strong> is a campus-wide initiative organised by the{' '}
            <strong className="text-slate-900 dark:text-white">School of Electrical Engineering (SELECT), VIT Chennai</strong>, in association with{' '}
            <strong className="text-red-600 dark:text-red-400">Havells India Limited</strong>, from{' '}
            <strong className="text-emerald-600 dark:text-emerald-400">15 to 19 March 2027</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80">
            <p className="text-sm sm:text-base font-semibold text-emerald-900 dark:text-emerald-200 italic">
              "Under the theme <span className="underline decoration-yellow-400 decoration-2 font-bold">'Save Energy, Secure Energy: Towards Viksit Bharat 2047'</span>, the week brings together expert talks, student innovation competitions, creative slogan and poster contests, campus energy audits, and department-level awards to create awareness, promote efficient energy use and build a sustainable environment."
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold mb-2">
                <Leaf className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Sustainable Campus</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fostering an eco-conscious culture across classrooms, student hostels, and labs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center font-bold mb-2">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Industry Mentorship</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Havells technical leadership mentoring students on modern IE3/IE4 motors and clean lighting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold mb-2">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Viksit Bharat 2047</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Aligning institutional research with India's national mission for clean energy independence.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
