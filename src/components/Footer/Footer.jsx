import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.contact}>
        <p>📍 Dirección de ejemplo, Ciudad, País</p>
        <p>📞 +56 9 1234 5678</p>
        <p>✉ info@empresa.cl</p>
      </div>
      <p className={styles.copy}>© 2026 Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
