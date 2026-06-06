import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-circle">W</span>
          <span className="logo-text">Wass Ethiopian Restaurant</span>
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/catering" onClick={() => setOpen(false)}>Catering</NavLink>
          <NavLink to="/reservations" onClick={() => setOpen(false)}>Reservations</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <a href="tel:1200000000" className="order-btn">Call to Order</a>

        </nav>
      </div>
    </header>
  );
}
