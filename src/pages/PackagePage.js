import React from "react";
import "../../src/pages/PackagePage.css";
import bgImage from "../assets/amaram.jpeg";

const packages = [
  { nights: 3, standard: 11250, discount: 10, final: 10125 },
  { nights: 5, standard: 18750, discount: 12, final: 16500 },
  { nights: 7, standard: 26250, discount: 15, final: 22313 },
  { nights: 14, standard: 52500, discount: 20, final: 42000 },
  { nights: 21, standard: 78750, discount: 25, final: 59063 },
  { nights: 30, standard: 112500, discount: 30, final: 78750 },
];

const PackagesPage = () => {
  return (
    <div
      className="packages-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="packages-overlay">
        <section className="packages-hero text-center py-5 text-white">
          <h1 className="display ">Stay Packages at Aranyaka</h1>
          <p className="lead">Conscious stays. Clear pricing. Deep value.</p>
        </section>

        <section className="container-fluid py-5 px-3">
          <div className="packages-scroll-container">
            {packages.map((pkg, index) => (
              <div className="package-card text-center p-3" key={index}>
                <span className="elegant-heading mb-2 night-pack">
                  {pkg.nights}-Nights Package
                </span>
                <p className="standard-rate">
                  ₹
                  <span className="line-text">
                    {pkg.standard?.toLocaleString()}
                  </span>
                </p>
                <p className="discount-text">Save {pkg.discount}%</p>
                <h5 className="final-price">₹{pkg.final.toLocaleString()}</h5>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PackagesPage;
