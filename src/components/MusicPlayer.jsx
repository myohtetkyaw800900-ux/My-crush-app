import React from 'react';

export default function MusicPlayer({ isPlaying, onToggle }) {
  return (
    <section className="panel-card fade-in">
      <div className="panel-header">
        <h2 className="panel-title">Songs that remind me of you</h2>
        <button
          onClick={onToggle}
          className="panel-action"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <div className="song-list">
        <div className="song-row">
          <span className="song-icon">🎵</span>
          <div>
            <p className="song-title">Hiwaga</p>
            <p className="song-meta">by JMC</p>
          </div>
        </div>
        <div className="song-row">
          <span className="song-icon">🎵</span>
          <div>
            <p className="song-title">Wish</p>
            <p className="song-meta">by Taylor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
