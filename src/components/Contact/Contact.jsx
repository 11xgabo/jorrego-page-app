import React from "react";
import styles from "./Contact.module.css";
import useTranslation from "../../hooks/useTranslation";
import siteConfig from "../../config/siteConfig";

const Contact = () => {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const phoneNumber = siteConfig.contact.phone.replace(/\s/g, "");
    const message = "Hola, me interesa comunicarme con Southern Chile Shipping and Logistics";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>{t("contact.title")}</h2>
        <p className={styles.subtitle}>{t("contact.subtitle")}</p>

        <div className={styles.contactOptions}>
          {/* OPCIÓN 1: EMAIL */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>✉</div>
            <h3>{t("contact.emailTitle")}</h3>
            <p>{t("contact.emailDescription")}</p>

            <div className={styles.contactInfo}>
              <p className={styles.contactDetail}>{siteConfig.contact.email}</p>
            </div>
          </div>

          {/* OPCIÓN 2: WHATSAPP / LLAMADA */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>📞</div>
            <h3>{t("contact.callTitle")}</h3>
            <p>{t("contact.callDescription")}</p>

            <div className={styles.contactInfo}>
              <p className={styles.contactDetail}>{siteConfig.contact.phone}</p>
              <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
                {t("contact.contactWhatsapp")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
