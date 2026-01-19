import React from "react";
import styles from "./WhyChooseUs.module.css";

const points = [
  "Profesionales con experiencia",
  "Atención personalizada",
  "Cobertura nacional e internacional",
  "Soluciones eficientes y seguras"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={styles.why}>
      <h2>Por qué elegirnos</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>✔ {point}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
