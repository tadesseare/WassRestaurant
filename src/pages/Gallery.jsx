import React from "react";

export default function Gallery() {
  return (
    <section className="section">
      <div className="section-inner">
        <h1>Gallery</h1>

        <div className="gallery-grid">
          <img src="/gallery1.jpg" className="gallery-box" />
          <img src="/gallery2.jpg" className="gallery-box" />
          <img src="/gallery3.jpg" className="gallery-box" />
          <img src="/gallery4.jpg" className="gallery-box" />
        </div>
      </div>
    </section>
  );
}
