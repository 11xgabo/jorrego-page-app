import React from "react";
import styles from "./Hero.module.css";
import siteConfig from "../../config/siteConfig";
import useTranslation from "../../hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>{siteConfig.company.name}</h1>
        <p>
          {t("hero.tagline")}
        </p>
        <button className={styles.cta}>{t("hero.cta")}</button>
      </div>
    </section>
  );
};

export default Hero;
