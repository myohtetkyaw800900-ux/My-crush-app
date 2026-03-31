import React from 'react';

const images = ['/assets/img1.jpg', '/assets/img2.jpg', '/assets/img3.jpg'];

export default function Gallery() {
  return (
    <section className="glass-panel fade-in rounded-3xl p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title text-2xl font-semibold text-white">
          အမှတ်တရဓာတ်ပုံများ
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] text-white/60">
          Gallery
        </span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="soft-card overflow-hidden rounded-2xl transition hover:-translate-y-1"
          >
            <img
              src={img}
              className="h-44 w-full object-cover"
              alt={`memory-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
