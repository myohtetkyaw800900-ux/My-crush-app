import React, { useState } from 'react';

const images = [
  '/assets/img15.jpg',
  '/assets/img2.jpg',
  '/assets/img3.jpg',
  '/assets/img4.jpg',
  '/assets/img5.jpg',
  '/assets/img6.jpg',
  '/assets/img7.jpg',
  '/assets/img8.jpg',
  '/assets/img9.jpg',
  '/assets/img10.jpg',
  '/assets/img11.jpg',
  '/assets/img12.jpg',
  '/assets/img13.jpg',
  '/assets/img14.jpg',
  '/assets/img1.jpg',
  '/assets/img16.jpg'
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="panel-card fade-in">
      <div className="panel-header">
        <h2 className="panel-title">Memories for you</h2>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-tile"
            role="button"
            tabIndex={0}
            onClick={() => setActiveImage(img)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setActiveImage(img);
              }
            }}
          >
            <img
              src={encodeURI(img)}
              className={`gallery-img ${
                img.includes('img15.jpg') ? 'gallery-img--face' : ''
              }`}
              alt={`memory-${index + 1}`}
            />
          </div>
        ))}
      </div>
      {activeImage ? (
        <div
          className="lightbox"
          onClick={() => setActiveImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setActiveImage(null);
            }
          }}
        >
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="lightbox-frame">
              <img
                src={encodeURI(activeImage)}
                className="lightbox-img"
                alt="memory-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
