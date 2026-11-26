import React from 'react';
import { Users, Award, Shield, CheckCircle2 } from 'lucide-react';
import { committee } from '../data/eventData';

export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Leadership &amp; Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Organizing Committee
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Guided by the visionary leadership of VIT and organized by the School of Electrical Engineering (SELECT).
          </p>
        </div>

        {/* 1. CHIEF PATRON */}
        <div className="mb-14 text-center">
          <div className="inline-block text-xs font-extrabold tracking-widest uppercase text-emerald-700 dark:text-emerald-400 mb-4 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            CHIEF PATRON
          </div>
          <div className="max-w-xs mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all text-center group">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-emerald-500 shadow-md mb-4 group-hover:scale-105 transition-transform bg-slate-100">
                <img
                  src={committee.chiefPatron.image}
                  alt={committee.chiefPatron.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {committee.chiefPatron.name}
              </h3>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                {committee.chiefPatron.designation}
              </p>
            </div>
          </div>
        </div>

        {/* 2. PATRONS */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              PATRONS
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committee.patrons.map((patron, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all text-center group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-emerald-400 shadow mb-3 group-hover:scale-105 transition-transform bg-slate-100">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {patron.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {patron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CO-PATRONS */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              CO-PATRONS
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committee.coPatrons.map((copatron, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all text-center group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-emerald-400 shadow mb-3 group-hover:scale-105 transition-transform bg-slate-100">
                  <img
                    src={copatron.image}
                    alt={copatron.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {copatron.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {copatron.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CONVENOR (Dean SELECT VIT Chennai) */}
        <div className="mb-14 text-center">
          <div className="inline-block text-xs font-extrabold tracking-widest uppercase text-emerald-700 dark:text-emerald-400 mb-4 bg-emerald-100 dark:bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-800 shadow-sm">
            CONVENOR
          </div>
          <div className="max-w-xs mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-emerald-300 dark:border-emerald-800 shadow-md hover:shadow-xl transition-all text-center group">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-emerald-500 shadow mb-3 group-hover:scale-105 transition-transform bg-slate-100">
                <img
                  src={committee.generalChair.image}
                  alt={committee.generalChair.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {committee.generalChair.name}
              </h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                Dean, School of Electrical Engineering (SELECT)
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                VIT Chennai
              </p>
            </div>
          </div>
        </div>

        {/* 5. ORGANIZING SECRETARIES (From official poster: Dr. P.S. Meera, Dr. V. Lavanya, Dr. C. Kamal) */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-800 shadow-sm">
              ORGANIZING SECRETARIES (FROM POSTER)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committee.organizingSecretaries.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-black text-lg mb-3">
                    {sec.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {sec.name}
                  </h4>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {sec.designation}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                  {sec.department}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
