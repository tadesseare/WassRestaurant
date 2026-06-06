import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>Wass Ethiopian Restaurant</h3>
          <p>123 Sample Street, City, Province</p>
          <p>(123) 456-7890</p>
        </div>

        <div>
          <h3>Hours</h3>
          <p>Mon–Thu: 11 AM – 9 PM</p>
          <p>Fri–Sun: 11 AM – 10 PM</p>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Wass Ethiopian Restaurant</p>
    </footer>
  );
}
