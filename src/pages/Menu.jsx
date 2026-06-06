import React from "react";

export default function Menu() {
  return (
    <section className="section">
      <div className="section-inner">
        <h1>Our Menu</h1>
        <p>All dishes are served with fresh injera.</p>

        <div className="menu-grid">
          <div className="card">
            <h3>Shiro Wot</h3>
            <p>Chickpea stew with berbere spices.</p>
            <p className="price">$14.99</p>
          </div>

          <div className="card">
            <h3>Doro Wot</h3>
            <p>Chicken stew in rich berbere sauce.</p>
            <p className="price">$18.99</p>
          </div>

          <div className="card">
            <h3>Veggie Combo</h3>
            <p>Assortment of vegetarian dishes.</p>
            <p className="price">$22.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}
