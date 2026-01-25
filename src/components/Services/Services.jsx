import React from "react";
import styles from "./Services.module.css";
import useTranslation from "../../hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    {
      image: "/services/box1.jpg",
      titleKey: "services.generalCargo.title",
      descKey: "services.generalCargo.description",
    },
    {
      image: "/services/box2.png",
      titleKey: "services.cargoManagement.title",
      descKey: "services.cargoManagement.description",
    },
    {
      image: "/services/box3.png",
      titleKey: "services.hazardousMaterials.title",
      descKey: "services.hazardousMaterials.description",
    },
    {
      image: "/services/box4.png",
      titleKey: "services.vehicleTransport.title",
      descKey: "services.vehicleTransport.description",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <h2>{t("services.title")}</h2>

      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={service.image} alt={t(service.titleKey)} />
            </div>

            <h3>{t(service.titleKey)}</h3>
            <p>{t(service.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
