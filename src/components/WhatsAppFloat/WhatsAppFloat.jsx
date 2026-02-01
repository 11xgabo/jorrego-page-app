import React from "react";
import styles from "./WhatsAppFloat.module.css";
import siteConfig from "../../config/siteConfig";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    const phoneNumber = siteConfig.contact.phone.replace(/\s/g, "");
    const message = "Hola, me gustaría conocer más sobre los servicios de Southern Chile Shipping and Logistics";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button className={styles.whatsappFloat} onClick={handleWhatsApp} title="Contáctanos por WhatsApp">
      <img src="/images/wa.jpg" alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppFloat;
