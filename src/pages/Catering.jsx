import React from "react";

export default function Catering() {
  return (
    <section className="section">
      <div className="section-inner catering-wrapper">

        <h1 className="catering-title">Catering Services</h1>
        <p className="catering-sub">
          Perfect for weddings, birthdays, graduations, corporate events, and family gatherings.
        </p>

        <div className="two-col">
          <div>
            <p>
              We bring authentic Ethiopian flavors directly to your celebration.
              Choose from a variety of traditional dishes, vegetarian options,
              and full catering packages.
            </p>

            <button className="catering-btn">Request Catering</button>
          </div>

          {/* <img src="/catering.jpg" className="catering-image" /> */}
        </div>


        <h2 className="package-title">Catering Packages</h2>

        <div className="catering-packages">
          <div className="catering-card">
            <h3>10 Person Package</h3>
            <p>Includes 4 vegetarian dishes + 2 meat dishes + injera.</p>
          </div>

          <div className="catering-card">
            <h3>20 Person Package</h3>
            <p>Includes 6 vegetarian dishes + 3 meat dishes + injera.</p>
          </div>
          <div className="catering-slideshow">
          <img src="/catering1.jpg" />
          <img src="/catering2.jpg" />
         <img src="/catering3.webp" />
         <img src="/catering4.jpg" />


     </div>


          <div className="catering-card">
            <h3>50 Person Package</h3>
            <p>Full spread of Ethiopian favorites, including coffee ceremony setup.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
