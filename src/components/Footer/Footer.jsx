import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.contact}>
        <p>📍 Example Address, City, Country</p>
        <p>📞 +56 9 1234 5678</p>
        <p>✉ info@company.com</p>
      </div>
      <p className={styles.copy}>© 2026 Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
