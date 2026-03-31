import React from 'react';

const paragraphs = [
  'Hi,',
  'I’ve been wanting to say this in a simple, honest way: you make my days brighter. Your smile has a way of turning ordinary moments into something I remember.',
  'I don’t know where life will take us, but I do know I’m grateful for you — for your kindness, your energy, and the calm you bring just by being you.',
  'If it’s okay, I’d like to get to know you better, slowly and sincerely. No pressure — just me being real with you.',
  'With a gentle heart,',
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
