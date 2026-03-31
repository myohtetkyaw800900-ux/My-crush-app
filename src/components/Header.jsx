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
    </header>
  );
}
