import React from 'react';

export default function Header() {
  return (
    <header className="glass-panel fade-in rounded-3xl px-6 py-8 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
        မင်းနဲ့ငါ့ကမ္ဘာ
      </p>
      <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
        ကိုယ်ချစ်တဲ့သူအတွက် ❤️
      </h1>
      <p className="mt-3 text-white/80">
        မင်းအတွက် အမှတ်တရလေးတွေကို ဒီမှာတင်ထားတာပါ
      </p>
    </header>
  );
}
