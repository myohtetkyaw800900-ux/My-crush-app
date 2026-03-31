import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-04-14T00:00:00'); // special day
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      const d = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
      setDays(d);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="glass-panel fade-in rounded-3xl p-6 text-center">
      <h2 className="section-title text-2xl font-semibold text-white">
        အထူးနေ့တွက်ချက်မှု
      </h2>
      <p className="mt-1 text-sm text-white/70">
        2026-04-14 နေ့အထိ ကျန်ရှိတဲ့နေ့ရက်
      </p>
      <div className="soft-card mx-auto mt-5 w-44 rounded-2xl px-4 py-5 text-3xl font-semibold text-rose-100">
        {days}
        <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-white/70">
          days
        </span>
      </div>
    </section>
  );
}
