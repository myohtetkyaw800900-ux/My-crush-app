import React from 'react';

const notes = [
  'မင်းက စိတ်ကြိုက်အလှဆုံးသူပါ ❤️',
  'Always thinking of you… 🌸',
  'မင်းနဲ့တွေ့ရတာ အရမ်းပျော်ပါတယ် 💌'
];

export default function LoveNotes() {
  return (
    <section className="glass-panel fade-in rounded-3xl p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title text-2xl font-semibold text-white">
          ချစ်စာတိုများ
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] text-white/60">
          Notes
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="soft-card rounded-2xl p-4 text-sm text-white/90"
          >
            <p className="text-base font-semibold text-rose-100">{note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
