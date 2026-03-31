import React, { useEffect, useState } from 'react';

export default function Intro({ onEnter }) {
  const defaultPassword = '20251020';
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState('splash');

  useEffect(() => {
    if (phase !== 'splash') return;
    const timer = setTimeout(() => {
      setPhase('login');
    }, 2200);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleSubmit = () => {
    if (password.trim() === defaultPassword) {
      setError('');
      onEnter();
      return;
    }
    setError('Password မမှန်ပါ');
  };

  if (phase === 'splash') {
    return (
      <section
        className="intro-screen"
        style={{ '--intro-bg': "url('/assets/intro-bg.jpg')" }}
        onClick={() => setPhase('login')}
      >
        <div className="intro-card intro-splash fade-in">
          <p className="intro-splash-text">Welcome my love, enjoy your stay</p>
          <p className="intro-splash-hint">Tap to continue</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="intro-screen"
      style={{ '--intro-bg': "url('/assets/intro-bg.jpg')" }}
    >
      <div className="intro-card fade-in">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-[0_16px_40px_rgba(244,84,151,0.3)]">
          💌
        </div>
        <h1 className="intro-title mt-6">Hey…</h1>
        <p className="intro-subtitle">ကိုယ့်ဘဝရဲ့ အထူးတဲ့သူအတွက် အထူးစာလွှာလေး</p>
        <p className="mt-2 text-sm text-rose-300">
          ဒီမှာ မင်းနဲ့အတူရှိတဲ့ အမှတ်တရတွေကို စုစည်းထားပါတယ်
        </p>
        <div className="intro-form">
          <label className="intro-label" htmlFor="intro-password">
            Password
          </label>
          <input
            id="intro-password"
            className="intro-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          {error ? <p className="intro-error">{error}</p> : null}
        </div>
        <button onClick={handleSubmit} className="intro-button">
          Open
        </button>
      </div>
    </section>
  );
}
