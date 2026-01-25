import React from "react";
import styles from "./WhyChooseUs.module.css";
import useTranslation from "../../hooks/useTranslation";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const whyList = [
    "whyChooseUs.professionals",
    "whyChooseUs.attention",
    "whyChooseUs.coverage",
    "whyChooseUs.solutions",
  ];

  return (
    <section id="why-us" className={styles.why}>
      <h2>{t("whyChooseUs.title")}</h2>
      <ul>
        {whyList.map((key, index) => (
          <li key={index}>✔ {t(key)}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
