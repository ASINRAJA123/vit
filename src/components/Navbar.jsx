import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, FileText, Zap, 
  ExternalLink, Calendar, Award 
} from 'lucide-react';
import { eventInfo } from '../data/eventData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenPosterModal, 
  onOpenPledgeModal 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Events', href: '#events' },
    { name: 'Poster', href: '#poster' },
    { name: 'Champion Tips', href: '#champion' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Committee', href: '#committee' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-emerald-100 dark:border-slate-800 py-2.5' 
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand & Logos */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                  VIT CHENNAI
                </span>
                <span className="hidden md:inline-flex items-center whitespace-nowrap text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  Sustainable Campus
                </span>
                <span className="whitespace-nowrap text-[10px] font-black text-[#e31837] bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 tracking-wider">
                  HAVELLS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap leading-none mt-0.5">
                School of Electrical Engineering &bull; ECW 2027
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Medium Screen Nav (fewer primary links) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {navLinks.filter(l => ['Home', 'Objectives', 'Events', 'Poster', 'Champion Tips'].includes(l.name)).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Poster Button */}
            <button
              onClick={onOpenPosterModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-800 transition-all cursor-pointer whitespace-nowrap"
              title="View & Download Official Poster"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Official Poster</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            <button
              onClick={onOpenPosterModal}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 whitespace-nowrap"
            >
              <FileText className="w-3 h-3 text-emerald-600" />
              <span>Poster</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPosterModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
            >
              <FileText className="w-4 h-4" />
              View Official Poster (PDF)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPledgeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold border border-emerald-500 text-emerald-700 dark:text-emerald-300"
            >
              <Zap className="w-4 h-4 text-emerald-500" />
              Take Energy Pledge
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
