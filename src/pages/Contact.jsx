import React from "react";

export default function Contact() {
  return (
    <section className="section">
      <div className="section-inner">
        <h1>Contact Us</h1>

        <div className="two-col">
          <div>
            <p>Address: 123 Sample Street</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@wassethiopian.com</p>
          </div>

          <div></div>
        </div>

        <h2 style={{ marginTop: "2rem", color: "var(--gold)" }}>Find Us</h2>

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sus!4v1614031234567"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
