import { useState, useEffect } from "react";
import { LanguageOptions } from "../constant/interfaces";

const DEFAULT_LANGUAGE: LanguageOptions = "en";

const getLang = (): LanguageOptions => {
  const langString = localStorage.getItem("lang");
  return (langString as LanguageOptions) || DEFAULT_LANGUAGE;
};

const setLang = (newLang: LanguageOptions): void => {
  localStorage.setItem("lang", newLang);
  window.dispatchEvent(new Event("storage"));
};

// Fungsi untuk toggle bahasa antara dua opsi
const toggleLang = (): void => {
  const currentLang = getLang();
  const newLang = currentLang === "en" ? "id" : "en";
  setLang(newLang);
};

const useLang = (): {
  lang: LanguageOptions;
  toggleLang: () => void;
} => {
  const [lang, setLanguage] = useState<LanguageOptions>(getLang);

  useEffect(() => {
    const handleStorageChange = () => {
      setLanguage(getLang());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleLanguage = () => {
    toggleLang();
    setLanguage(getLang());
  };

  return { lang, toggleLang: toggleLanguage };
};

export { useLang };
