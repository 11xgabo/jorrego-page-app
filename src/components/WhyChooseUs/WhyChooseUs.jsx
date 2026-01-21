import React from "react";
import styles from "./WhyChooseUs.module.css";

const points = [
  "Experienced Professionals",
  "Personalized Attention",
  "National and International Coverage",
  "Efficient and Safe Solutions"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={styles.why}>
      <h2>Why Choose Us</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>✔ {point}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
