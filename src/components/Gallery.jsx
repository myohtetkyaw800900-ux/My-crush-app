import React from 'react';

const images = [
  '/assets/img1.jpg',
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
  '/assets/img12.jpg'
];

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
              src={encodeURI(img)}
              className="gallery-img"
              alt={`memory-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
