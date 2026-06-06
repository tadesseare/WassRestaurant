import React from "react";

export default function Reservations() {
  return (
    <section className="section">
      <div className="reservation-box">
        <h1>Make a Reservation</h1>
        <p>Reserve your table and enjoy authentic Ethiopian cuisine.</p>

        <form className="reservation-old-form">
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="date" required />
          <input type="time" required />
          <input type="number" placeholder="Number of Guests" min="1" required />

          <button type="submit">Submit Reservation</button>
        </form>
      </div>
    </section>
  );
}
