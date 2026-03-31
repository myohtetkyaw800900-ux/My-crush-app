import React, { useState } from 'react';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setMessage('');
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <section className="glass-panel fade-in rounded-[32px] p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title text-2xl">
          စာတိုပေးပို့
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] text-rose-300">
          Message
        </span>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          placeholder="ဒီမှာ မင်းအတွက် စာတိုရေးပါ..."
          className="soft-card w-full rounded-2xl border border-white/60 bg-transparent p-4 text-sm text-rose-500 outline-none placeholder:text-rose-300"
        />
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-rose-300">
            တစ်နေ့တာ စိတ်ချမ်းသာစေမယ့် စာတိုလေးပါ
          </p>
          <button
            type="submit"
            className="glow-button rounded-full bg-rose-400 px-5 py-2 text-xs font-semibold text-white transition hover:bg-rose-300"
          >
            ပို့မယ်
          </button>
        </div>
        {sent && (
          <p className="text-xs font-semibold text-rose-500">စာတိုပို့ပြီးပါပြီ 💌</p>
        )}
      </form>
    </section>
  );
}
