import React from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Estamos en construcción</h1>
        <p className={styles.text}>
          Pronto podrás conocer nuestro sitio web. Estamos trabajando para ofrecerte la mejor experiencia.
        </p>
        <div className={styles.contact}>
          <p>
            Mientras tanto, contáctanos por correo:{" "}
            <a href="mailto:info@tusitio.com" className={styles.link}>
              info@tusitio.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
