import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Events from './components/Events';
import PosterSection from './components/PosterSection';
import EnergyChampion from './components/EnergyChampion';
import EnergyCalculator from './components/EnergyCalculator';
import Committee from './components/Committee';
import Footer from './components/Footer';
import PosterModal from './components/PosterModal';
import PledgeModal from './components/PledgeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [posterModalOpen, setPosterModalOpen] = useState(false);
  const [pledgeModalOpen, setPledgeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Sticky Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenPosterModal={() => setPosterModalOpen(true)}
        onOpenPledgeModal={() => setPledgeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenPosterModal={() => setPosterModalOpen(true)}
          onOpenPledgeModal={() => setPledgeModalOpen(true)}
        />

        {/* 2. About the Event Section */}
        <About
          onOpenPosterModal={() => setPosterModalOpen(true)}
        />

        {/* 3. Objectives Section */}
        <Objectives />

        {/* 4. Event Highlights & Competitions */}
        <Events />

        {/* 5. Dedicated Official Poster Section (In Association with Havells) */}
        <PosterSection
          onOpenPosterModal={() => setPosterModalOpen(true)}
        />

        {/* 6. Be an Energy Champion! Section */}
        <EnergyChampion
          onOpenPledgeModal={() => setPledgeModalOpen(true)}
        />

        {/* 7. Interactive Campus Energy Calculator */}
        <EnergyCalculator />

        {/* 8. Organizing Committee */}
        <Committee />

      </main>

      {/* Footer */}
      <Footer
        onOpenPosterModal={() => setPosterModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <PosterModal
        isOpen={posterModalOpen}
        onClose={() => setPosterModalOpen(false)}
      />

      <PledgeModal
        isOpen={pledgeModalOpen}
        onClose={() => setPledgeModalOpen(false)}
      />

    </div>
  );
}
