import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      {/* <div className="hero-content">
        <h1>Authentic Ethiopian Cuisine</h1>
        <p>Experience the taste of tradition — injera, rich stews, and the Ethiopian coffee ceremony.</p> */}

        <div className="hero-buttons">
          <a href="#" className="btn-primary">Order Online</a>
          <a href="/reservations" className="btn-secondary">Reserve a Table</a>
        </div>
      {/* </div> */}
    </section>
  );
}
