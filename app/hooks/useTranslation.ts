import { useState, useEffect } from "react";

const loadTranslation = async (lang: string) => {
  try {
    const translationModule = await import(`../translations/${lang}.json`);
    return translationModule.default || translationModule;
  } catch (error) {
    console.error("Error cargando las traducciones:", error);
    return null;
  }
};

export const useTranslation = (language: string) => {
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    loadTranslation(language).then((translationData) => {
      setTranslations(translationData);
    });
  }, [language]);

  const t = (key: string) => {
    return translations[key] || key;
  };

  return { t };
};
