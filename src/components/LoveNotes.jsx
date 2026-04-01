import React from 'react';

const notes = [
  'Take care always yourself.',
  'Be kind to yourself.',
  'Eat on time.',
  'Drink enough water.',
  'Don’t forget to smile.',
  'Your smile makes my day.',
  "You're not alone.",
  'I will always be by your side whenever you need me.',
  "Don’t take too long to reply.",
  'Just you, just me, just us.',
  "You’re mine... always."
];

export default function LoveNotes() {
  return (
    <section className="panel-card fade-in">
      <div className="panel-header">
        <h2 className="panel-title">Some reminders</h2>
      </div>
      <div className="reminder-list">
        {notes.map((note, index) => (
          <div
            key={index}
            className="reminder-row"
          >
            {note}
          </div>
        ))}
      </div>
    </section>
  );
}
