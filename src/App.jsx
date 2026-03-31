import React, { useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import LoveNotes from './components/LoveNotes';
import Intro from './components/Intro';
import LoveLetter from './components/LoveLetter';

export default function App() {
  const audioRef = useRef(null);
  const sections = useMemo(
    () => [
      { id: 'letter', label: 'Love Letter', icon: '💗' },
      { id: 'music', label: 'Music', icon: '🎵' },
      { id: 'notes', label: 'Notes', icon: '💌' },
      { id: 'gallery', label: 'Gallery', icon: '🖼️' },
    ],
    []
  );
  const [activeId, setActiveId] = useState('letter');
  const [showIntro, setShowIntro] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const handleEnter = async () => {
    setShowIntro(false);
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const renderActiveSection = () => {
    switch (activeId) {
      case 'letter':
        return <LoveLetter />;
      case 'music':
        return <MusicPlayer isPlaying={isPlaying} onToggle={handleToggle} />;
      case 'gallery':
        return <Gallery />;
      case 'notes':
        return <LoveNotes />;
      default:
        return null;
    }
  };

  return (
    <div
      className="app-shell"
    >
      <audio
        ref={audioRef}
        src="/assets/love-song.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />
      <div className="min-h-screen">
        {showIntro ? (
          <Intro onEnter={handleEnter} />
        ) : (
          <div className="mx-auto max-w-4xl px-5 pb-14 pt-8">
            <Header />
            <nav className="fade-in mt-5">
              <div className="nav-shell">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveId(section.id)}
                    className={`nav-chip ${
                      activeId === section.id
                        ? 'nav-chip--active'
                        : 'nav-chip--idle'
                    }`}
                  >
                    <span className="nav-chip__icon">{section.icon}</span>
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </nav>
            <div key={activeId} className="mt-8">
              {renderActiveSection()}
            </div>
            <footer className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-white/60">
              ချစ်ခြင်းမေတ္တာနဲ့ တည်ဆောက်ထားတာပါ
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
