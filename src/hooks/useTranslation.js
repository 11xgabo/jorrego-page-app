import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../config/i18n";

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    console.error("useTranslation debe ser usado dentro de LanguageProvider");
    return { t: (key) => key, language: "es" };
  }

  const { language } = context;

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value;
  };

  return { t, language };
};

export default useTranslation;
