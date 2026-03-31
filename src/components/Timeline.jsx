import React from 'react';

const moments = [
  {
    date: '2024-02-14',
    title: 'ပထမဆုံးတွေ့ဆုံ',
    note: 'အပြုံးတစ်ချက်က အစပြုခဲ့တဲ့နေ့',
  },
  {
    date: '2024-07-01',
    title: 'ပထမဆုံးခရီး',
    note: 'အမှတ်တရဓာတ်ပုံတွေ တောင်တစ်စုံ',
  },
  {
    date: '2025-01-01',
    title: 'နှစ်သစ်ကူးဆုတောင်း',
    note: 'မင်းနဲ့ အတူရှိတဲ့ အနာဂတ်ကို ဆုတောင်းခဲ့တယ်',
  },
];

export default function Timeline() {
  return (
    <section className="glass-panel fade-in rounded-[32px] p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title text-2xl">
          အချစ်Timeline
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] text-rose-300">
          Timeline
        </span>
      </div>
      <div className="mt-6 grid gap-4">
        {moments.map((moment, index) => (
          <div key={index} className="soft-card rounded-2xl p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-300">
              {moment.date}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-rose-500">
              {moment.title}
            </h3>
            <p className="mt-1 text-sm text-rose-400">{moment.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
