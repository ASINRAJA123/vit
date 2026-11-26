import React, { useState } from 'react';
import { 
  Calculator, Zap, IndianRupee, CloudRain, 
  Trees, RefreshCw, Sparkles, Check 
} from 'lucide-react';

export default function EnergyCalculator() {
  const [acHours, setAcHours] = useState(6);
  const [ledCount, setLedCount] = useState(10);
  const [pcOffCount, setPcOffCount] = useState(5);
  const [fanOffHours, setFanOffHours] = useState(4);

  // Calculations per month (30 days):
  // 1. AC at 24C vs 18C saves ~0.6 kWh per ton-hour. Assuming 1.5 ton AC -> ~0.9 kWh/hr saved
  const acKwhSaved = acHours * 0.9 * 30;

  // 2. 10W LED vs 40W fluorescent/60W incandescent -> saves ~30W (0.03 kW) for 8 hrs/day -> 0.03 * 8 * 30 = 7.2 kWh per bulb/month
  const ledKwhSaved = ledCount * 7.2;

  // 3. PC standby + monitor = ~30W phantom draw * 14 off-hours = 0.42 kWh/day * 30 = 12.6 kWh/PC/month
  const pcKwhSaved = pcOffCount * 12.6;

  // 4. Ceiling fan off (75W old or 35W BLDC) -> ~0.06 kW * fanOffHours * 30 days
  const fanKwhSaved = fanOffHours * 0.06 * 30;

  const totalKwhSaved = Math.round(acKwhSaved + ledKwhSaved + pcKwhSaved + fanKwhSaved);
  const costSaved = Math.round(totalKwhSaved * 8.5); // ₹8.50 per commercial/academic unit
  const co2Avoided = Math.round(totalKwhSaved * 0.82); // 0.82 kg CO2 / kWh average Indian grid emission factor
  const treesEquivalent = (co2Avoided / 20).toFixed(1); // 1 mature tree absorbs ~20 kg CO2 / year

  const handleReset = () => {
    setAcHours(6);
    setLedCount(10);
    setPcOffCount(5);
    setFanOffHours(4);
  };

  return (
    <section id="calculator" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Campus Energy Savings Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            See the real-world monthly impact of adopting the 6 Energy Champion habits in your room, hostel, or laboratory.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Input Panel (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Adjust Your Daily Conservation Habits
              </span>
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            {/* Slider 1: AC Hours at 24C */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold">
                <span className="text-slate-700 dark:text-slate-300">
                  1. AC Hours at 24°C–26°C instead of 18°C
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                  {acHours} hrs / day
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={acHours}
                onChange={(e) => setAcHours(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0 hrs</span>
                <span>12 hrs</span>
                <span>24 hrs</span>
              </div>
            </div>

            {/* Slider 2: LED Lights */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold">
                <span className="text-slate-700 dark:text-slate-300">
                  2. Conventional lights upgraded to Havells LED
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                  {ledCount} bulbs
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="2"
                value={ledCount}
                onChange={(e) => setLedCount(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0 bulbs</span>
                <span>25 bulbs</span>
                <span>50 bulbs</span>
              </div>
            </div>

            {/* Slider 3: Computers turned off */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold">
                <span className="text-slate-700 dark:text-slate-300">
                  3. Lab PCs/Monitors powered off (avoid standby)
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                  {pcOffCount} devices
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={pcOffCount}
                onChange={(e) => setPcOffCount(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0 PCs</span>
                <span>15 PCs</span>
                <span>30 PCs</span>
              </div>
            </div>

            {/* Slider 4: Fans & small appliances */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold">
                <span className="text-slate-700 dark:text-slate-300">
                  4. Unoccupied room fan &amp; appliance shut-off
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                  {fanOffHours} hrs / day
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                step="1"
                value={fanOffHours}
                onChange={(e) => setFanOffHours(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0 hrs</span>
                <span>8 hrs</span>
                <span>16 hrs</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
              *Calculated based on Indian BEE benchmarks and average institution tariff of ₹8.50/kWh.
            </div>

          </div>

          {/* Results Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-emerald-600/30">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-700/50">
                <div>
                  <span className="text-xs uppercase font-extrabold text-yellow-300 tracking-wider">
                    Monthly Impact
                  </span>
                  <h3 className="text-xl font-bold text-white">Estimated Savings</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-700/40 border border-emerald-500/30">
                  <Zap className="w-5 h-5 text-yellow-300" />
                </div>
              </div>

              {/* Stat 1: Electricity Saved */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                <div className="text-xs font-semibold text-emerald-200">
                  Electricity Conserved
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  {totalKwhSaved.toLocaleString()} <span className="text-lg font-bold text-emerald-300">kWh / mo</span>
                </div>
              </div>

              {/* Stat 2: Money Saved */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                <div className="text-xs font-semibold text-emerald-200">
                  Monetary Value Saved
                </div>
                <div className="text-3xl sm:text-4xl font-black text-yellow-400 flex items-center">
                  ₹{costSaved.toLocaleString()} <span className="text-lg font-bold text-emerald-200 ml-1">/ month</span>
                </div>
              </div>

              {/* Stat 3: CO2 & Trees */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                  <div className="text-[11px] text-emerald-200 flex items-center gap-1">
                    <CloudRain className="w-3.5 h-3.5" /> CO₂ Abated
                  </div>
                  <div className="text-xl font-black text-white">
                    {co2Avoided.toLocaleString()} kg
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                  <div className="text-[11px] text-emerald-200 flex items-center gap-1">
                    <Trees className="w-3.5 h-3.5" /> Trees Equivalent
                  </div>
                  <div className="text-xl font-black text-yellow-300">
                    ~{treesEquivalent} trees
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-emerald-700/50 text-xs text-emerald-200 text-center">
              Small individual habits multiply across 10,000+ campus members to drive massive sustainable change!
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
