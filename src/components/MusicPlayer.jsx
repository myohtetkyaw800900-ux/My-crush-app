import React from 'react';

export default function MusicPlayer({
  isPlaying,
  onToggle,
  tracks,
  activeTrackId,
  onSelectTrack
}) {
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
        {tracks.map((track) => (
          <button
            key={track.id}
            type="button"
            onClick={() => onSelectTrack(track)}
            className={`song-row ${
              activeTrackId === track.id ? 'song-row--active' : ''
            }`}
          >
            <span className="song-icon">🎵</span>
            <div>
              <p className="song-title">{track.title}</p>
              <p className="song-meta">{track.artist}</p>
              <p className="song-note">
                {track.note}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
