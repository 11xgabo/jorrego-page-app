import React from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="/logo-trans.png" alt="Southern Chile Shipping and Logistics" className={styles.headerLogo} />
        <div className={styles.headerBrand}>
          <h2 className={styles.headerBrandName}>SOUTHERN CHILE</h2>
          <p className={styles.headerBrandSubtitle}>SHIPPING AND LOGISTICS</p>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.text}>
          Soon you'll be able to discover our website. We are working to provide you with the best experience.
        </p>
        <div className={styles.contact}>
          <p>
            In the meantime, contact us by email:{" "}
            <a href="mailto:info@company.com" className={styles.link}>
              info@company.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
