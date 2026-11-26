import React, { useState, useEffect } from 'react';
import { 
  X, Check, Award, Zap, Download, Printer, 
  ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function PledgeModal({ isOpen, onClose }) {
  const [pledgeName, setPledgeName] = useState('');
  const [pledgeDepartment, setPledgeDepartment] = useState('VIT Chennai');
  const [certified, setCertified] = useState(false);

  const [habitsChecked, setHabitsChecked] = useState({
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setCertified(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintCertificate = () => {
    window.print();
  };

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    if (pledgeName.trim()) {
      setCertified(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Energy Champion Pledge &amp; Citation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                School of Electrical Engineering &bull; In association with Havells
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {certified ? (
            /* Certificate View */
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              
              {/* Certificate Paper */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-emerald-50 via-white to-amber-50/40 text-slate-900 border-4 border-double border-emerald-600 shadow-xl text-center space-y-4">
                
                {/* Certificate Institutional Header */}
                <div className="space-y-1 border-b pb-3 border-emerald-200">
                  <div className="text-[11px] font-black tracking-widest uppercase text-slate-600">
                    VIT CHENNAI &bull; SUSTAINABLE CAMPUS &bull; HAVELLS INDIA LIMITED
                  </div>
                  <div className="text-xs font-bold uppercase text-emerald-800">
                    School of Electrical Engineering (SELECT)
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    ENERGY CHAMPION CITATION
                  </h2>
                </div>

                <p className="text-xs italic text-slate-600">
                  This certificate of green commitment is proudly awarded to:
                </p>

                {/* Candidate Name */}
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tracking-wide underline decoration-amber-400 decoration-2 underline-offset-4">
                  {pledgeName}
                </div>
                <div className="text-xs font-bold text-slate-600">
                  {pledgeDepartment}
                </div>

                <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
                  For solemnly taking the <strong>Energy Conservation Week 2027 Pledge</strong>, committing to optimize AC usage at 24°C, eradicate standby power, maximize LED lighting, and actively champion national energy independence towards <strong>Viksit Bharat 2047</strong>.
                </p>

                {/* Signatures & Seal */}
                <div className="pt-6 border-t border-emerald-200 flex items-center justify-between text-xs text-slate-700">
                  <div className="text-left">
                    <div className="font-bold text-slate-900">Dr. Lenin N C</div>
                    <div className="text-[10px] text-slate-500">Convenor / Dean, SELECT</div>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center p-1 shadow-md border-2 border-yellow-300">
                    <Award className="w-5 h-5 text-yellow-300" />
                    <span className="text-[7px] font-black tracking-tighter">ECW 2027</span>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-red-600">Havells India Limited</div>
                    <div className="text-[10px] text-slate-500">Industry Partner</div>
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handlePrintCertificate}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Certificate</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          ) : (
            /* Form View */
            <form onSubmit={handlePledgeSubmit} className="space-y-5">
              
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                <strong>I hereby pledge to adopt the 6 Energy Champion habits:</strong>
                <ul className="list-disc pl-5 pt-1 space-y-0.5 text-[11px]">
                  <li>Switch OFF fans, lights and appliances when not in use.</li>
                  <li>Use LED lighting &amp; eliminate phantom standby power.</li>
                  <li>Maintain air conditioners at 24°C–26°C for optimum efficiency.</li>
                  <li>Promote energy-efficient motors and clean renewable power.</li>
                </ul>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Your Name (For the Certificate)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sundaram"
                  value={pledgeName}
                  onChange={(e) => setPledgeName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Department / School
                </label>
                <input
                  type="text"
                  placeholder="e.g. School of Electrical Engineering (SELECT)"
                  value={pledgeDepartment}
                  onChange={(e) => setPledgeDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Sign the Pledge &amp; Generate Certificate</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
