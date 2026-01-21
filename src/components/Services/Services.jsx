import React from "react";
import styles from "./Services.module.css";

const servicesList = [
  "General Cargo",
  "Cargo Management",
  "Hazardous Materials",
  "Vehicle Transport"
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>📦</div>
            <h3>{service}</h3>
            <p>Brief service description.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
