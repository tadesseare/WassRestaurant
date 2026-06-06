import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="section-inner two-col">
          <div>
            <h2>A Taste of Ethiopia</h2>
            <p>
              At Wass Ethiopian Restaurant, we bring the warmth of Ethiopian hospitality,
              traditional recipes, and the unique experience of sharing injera together.
            </p>
          </div>

          <div className="card">
            <h3>Why Guests Love Us</h3>
            <ul>
              <li>Authentic family recipes</li>
              <li>Vegetarian & vegan options</li>
              <li>Traditional coffee ceremony</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
