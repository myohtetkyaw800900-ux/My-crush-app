import React, { useState, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="glass-panel fade-in rounded-3xl p-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="soft-card float-slow flex h-14 w-14 items-center justify-center rounded-full">
          <span className="text-2xl">🎵</span>
        </div>
        <h2 className="section-title text-2xl font-semibold">အချစ်သီချင်း</h2>
        <p className="text-sm text-white/70">
          မင်းနဲ့ အတူနားထောင်ရမယ့် သီချင်းလေး
        </p>
      </div>
      <audio ref={audioRef} src="/assets/love-song.mp3" />
      <button
        onClick={togglePlay}
        className="glow-button mt-5 rounded-full bg-rose-400/90 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-rose-300"
      >
        {isPlaying ? 'နားလိုက်မယ်' : 'ဖွင့်မယ်'}
      </button>
    </section>
  );
}
