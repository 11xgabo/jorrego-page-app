import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Southern Chile Shipping and Logistics</h1>
        <p>
          Specialists in corporate solutions. Sections and style inspired by professional maritime design.
        </p>
        <button className={styles.cta}>Request Quote</button>
      </div>
    </section>
  );
};

export default Hero;
