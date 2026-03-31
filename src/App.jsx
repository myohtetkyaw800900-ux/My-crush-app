import React from 'react';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import LoveNotes from './components/LoveNotes';
import Countdown from './components/Countdown';

export default function App() {
  return (
    <div className="app-shell">
      <div className="min-h-screen bg-slate-950/40">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-6">
          <Header />
          <div className="mt-8 grid gap-6">
            <MusicPlayer />
            <Gallery />
            <LoveNotes />
            <Countdown />
          </div>
          <footer className="mt-10 text-center text-sm text-white/70">
            ချစ်ခြင်းမေတ္တာနဲ့ တည်ဆောက်ထားတာပါ
          </footer>
        </div>
      </div>
    </div>
  );
}
