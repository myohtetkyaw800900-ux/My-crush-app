import React from 'react';

const paragraphs = [
  'Dear Mama,',
  'I’ve been wanting to say this simply: you brighten my days. Your smile turns ordinary moments into something I hold onto.',
  'I admire your kindness and the calm you carry. Being around you feels easy, like everything is a little softer.',
  'If you’re open to it, I’d love to get to know you better — gently, honestly, and at your pace.',
  'With a gentle heart,',
  'M H K'
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
