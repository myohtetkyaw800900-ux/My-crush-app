import React, { useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import LoveNotes from './components/LoveNotes';
import Intro from './components/Intro';
import LoveLetter from './components/LoveLetter';

export default function App() {
  const audioRef = useRef(null);
  const tracks = useMemo(
    () => [
      {
        id: 'just-the-way-you-are',
        title: 'Just The Way You Are',
        artist: 'Bruno Mars',
        src: '/assets/Bruno Mars - Just The Way You Are (Official Music Video).mp3',
        note: 'Because you never need to change to be beautiful.'
      },
      {
        id: 'intentions',
        title: 'Intentions',
        artist: 'Justin Bieber ft. Quavo',
        src: '/assets/Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.mp3',
        note: 'This song feels like a promise to keep things gentle and true.'
      },
      {
        id: 'love',
        title: 'LOVE.',
        artist: 'Kendrick Lamar ft. Zacari',
        src: '/assets/Kendrick Lamar - LOVE. ft. Zacari.mp3',
        note: 'It’s the calm kind of love — the kind that feels like home.'
      }
    ],
    []
  );
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
  const [activeTrackId, setActiveTrackId] = useState(tracks[0].id);
  const activeTrack = tracks.find((track) => track.id === activeTrackId) ?? tracks[0];

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

  const handleSelectTrack = async (track) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.src !== `${window.location.origin}${track.src}`) {
      audio.src = track.src;
    }
    setActiveTrackId(track.id);
    try {
      await audio.play();
      setIsPlaying(true);
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
        return (
          <MusicPlayer
            isPlaying={isPlaying}
            onToggle={handleToggle}
            tracks={tracks}
            activeTrackId={activeTrackId}
            onSelectTrack={handleSelectTrack}
          />
        );
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
        src={activeTrack.src}
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
            <footer className="footer-text">
              Just for you.
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
