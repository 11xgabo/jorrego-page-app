import React from "react";
import styles from "./Services.module.css";

const servicesList = [
  "Carga General",
  "Gestión de Carga",
  "Carga Peligrosa",
  "Transporte de Automóviles"
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>📦</div>
            <h3>{service}</h3>
            <p>Descripción breve del servicio.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
