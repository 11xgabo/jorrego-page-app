import React from "react";
import styles from "./Footer.module.css";
import siteConfig from "../../config/siteConfig";
import useTranslation from "../../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.contact}>
        <p>📞 {siteConfig.contact.phone}</p>
        <p>✉ {siteConfig.contact.email}</p>
      </div>
      <p className={styles.copy}>© {siteConfig.company.year} {siteConfig.company.shortName}. {t("footer.rights")}</p>
    </footer>
  );
};

export default Footer;
