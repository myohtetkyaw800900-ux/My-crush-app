import React from 'react';

const notes = [
  'Take care always.',
  'Eat on time.',
  "You’re mine... always.",
  'Drink enough water.',
  'Sleep well tonight.',
  'Don’t forget to smile.',
  'I will always be by your side whenever you need me.',
  'Be kind to yourself.',
  "Don’t take too long to reply."
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
