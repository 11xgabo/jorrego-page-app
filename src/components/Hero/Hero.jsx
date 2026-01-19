import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Bienvenido a nuestra empresa</h1>
        <p>
          Especialistas en soluciones corporativas. Secciones y estilo inspirado en diseño profesional marítimo.
        </p>
        <button className={styles.cta}>Cotizar Servicio</button>
      </div>
    </section>
  );
};

export default Hero;
