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
        id: 'best-part',
        title: 'Best Part',
        artist: 'Daniel Caesar & H.E.R.',
        src: '/assets/Daniel Caesar & H.E.R. - Best Part, a Visual.mp3',
        note: 'The quiet kind of love that feels like a gentle hug.'
      },
      {
        id: 'until-i-found-you',
        title: 'Until I Found You',
        artist: 'Stephen Sanchez',
        src: '/assets/Stephen Sanchez - Until I Found You (Official Video).mp3',
        note: 'Soft, sincere, and a little dreamy — just right.'
      },
      {
        id: 'lover',
        title: 'Lover',
        artist: 'Taylor Swift',
        src: '/assets/Taylor Swift - Lover (Official Music Video).mp3',
        note: 'Gentle, sweet, and full of soft promises.'
      },
      {
        id: 'just-the-way-you-are',
        title: 'Just The Way You Are',
        artist: 'Bruno Mars',
        src: '/assets/Bruno Mars - Just The Way You Are (Official Music Video).mp3',
        note: 'Because you never need to change to be beautiful.'
      },
      {
        id: 'yellow',
        title: 'Yellow',
        artist: 'Coldplay',
        src: '/assets/Coldplay - Yellow (Official Video).mp3',
        note: 'Soft and warm, like the way you light up a room.'
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
              <span className="footer-subtext">May Nile</span>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
