import React from "react";

export default function About() {
  return (
    <section className="section">
      <div className="section-inner two-col">
        <div>
          <h1>Our Story</h1>
          <p>
            Wass Ethiopian Restaurant was founded to share the flavors, warmth,
            and traditions of Ethiopia with our community.
          </p>
        </div>

        <img 
          src="/about.jpg" 
          alt="Ethiopian culture" 
          className="page-image"
        />
      </div>
    </section>
  );
}
