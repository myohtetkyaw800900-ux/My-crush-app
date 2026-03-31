import React from 'react';

const paragraphs = [
  'My Dearest,',
  'Every day with you feels like a beautiful dream that I never want to wake up from. Your smile is my brightest dawn, and your laughter is my favorite melody.',
  'Thank you for being my safe place, my joy, and my forever. No matter where life takes us, always remember my heart belongs to you.',
  'Love always,',
  'Me'
];

export default function LoveLetter() {
  return (
    <section className="letter-card fade-in">
      <h2 className="letter-title">A Letter For You</h2>
      <div className="letter-body">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
