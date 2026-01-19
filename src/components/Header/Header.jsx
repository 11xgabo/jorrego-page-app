import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>📞 +56 9 1234 5678</span>
        <span>✉ info@empresa.cl</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#why-us">Sobre nosotros</a></li>
          <li><a href="#footer">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
