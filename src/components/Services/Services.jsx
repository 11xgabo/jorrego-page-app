import React, { useState } from "react";
import styles from "./Services.module.css";
import useTranslation from "../../hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const servicesList = [
    {
      image: "/services/box1.jpg",
      titleKey: "services.marineShipping.title",
      descKey: "services.marineShipping.description",
    },
    {
      image: "/services/box2.png",
      titleKey: "services.cargoManagement.title",
      descKey: "services.cargoManagement.description",
    },
    {
      image: "/services/box3.png",
      titleKey: "services.storageLogistics.title",
      descKey: "services.storageLogistics.description",
    },
    {
      image: "/services/box4.jpg",
      titleKey: "services.customsManagement.title",
      descKey: "services.customsManagement.description",
    },
  ];

  const getExcerpt = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section id="services" className={styles.services}>
      <h2>{t("services.title")}</h2>

      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <div
            className={`${styles.card} ${hoveredCard === index ? styles.hovered : ""}`}
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.imageWrapper}>
              <img src={service.image} alt={t(service.titleKey)} />
            </div>

            <h3>{t(service.titleKey)}</h3>
            <p className={hoveredCard === index ? styles.fullDescription : styles.excerpt}>
              {hoveredCard === index ? t(service.descKey) : getExcerpt(t(service.descKey))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
