import React from 'react';

const images = ['/assets/img1.jpg', '/assets/img2.jpg', '/assets/img3.jpg'];

export default function Gallery() {
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
          >
            <img
              src={img}
              className="gallery-img"
              alt={`memory-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
