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
      <div className="info-row">
        <div className="info-card">
          <p className="info-label">Your Birthday</p>
          <p className="info-value">2006-05-09 · Tuesday</p>
        </div>
      </div>
      <div className="info-row info-row--two">
        <div className="info-card">
          <p className="info-label">First Meet Day</p>
          <p className="info-value">2025-10-20 · Monday</p>
          <p className="info-subvalue">Mandalay</p>
        </div>
        <div className="info-card">
          <p className="info-label">First Seen Day</p>
          <p className="info-value">2025-10-12 · Sunday</p>
          <p className="info-subvalue">TikTok</p>
        </div>
      </div>
      <p className="mini-quote">“Small moments, big feelings.”</p>
      <p className="daily-quote-label">Daily Quote</p>
       <p className="daily-quote">“You’re my favorite thought.”</p>
    </header>
  );
}
