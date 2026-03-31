import React from 'react';

export default function Header() {
  return (
    <header className="top-banner fade-in">
      <div className="top-banner__hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>
      <h1 className="top-banner__title">For My Dearest</h1>
      <p className="top-banner__subtitle">A cute little corner made just for you</p>
      <div className="meet-card">
        <p className="meet-label">First Meet Day</p>
        <p className="meet-date">2025-10-20 · Monday</p>
        <p className="meet-place">Mandalay</p>
      </div>
      <p className="daily-quote">“Small moments, big feelings.”</p>
      <p className="daily-quote-label">Daily Quote</p>
       <p className="mini-quote">“You’re my favorite thought.”</p>
    </header>
  );
}
