import React from "react";
import styles from "./About.module.css";
import useTranslation from "../../hooks/useTranslation";
import siteConfig from "../../config/siteConfig";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* HEADER CON LOGO Y NOMBRE */}
        <div className={styles.header}>
          <img src={siteConfig.assets.logo} alt="Logo" className={styles.logo} />
          <img src={siteConfig.assets.companyName} alt="Nombre de la empresa" className={styles.companyImage} />
        </div>

        <h2>{t("about.title")}</h2>
        
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h3>{t("about.missionTitle")}</h3>
            <p>{t("about.mission")}</p>

            <h3>{t("about.visionTitle")}</h3>
            <p>{t("about.vision")}</p>

            <h3>{t("about.valuesTitle")}</h3>
            <ul className={styles.valuesList}>
              <li>{t("about.value1")}</li>
              <li>{t("about.value2")}</li>
              <li>{t("about.value3")}</li>
              <li>{t("about.value4")}</li>
            </ul>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h4>{t("about.companyName")}</h4>
              <p>{siteConfig.company.name}</p>
            </div>

            <div className={styles.infoCard}>
              <h4>{t("about.founded")}</h4>
              <p>{siteConfig.company.year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
