import { create } from "zustand";
import en from "../locales/en";
import id from "../locales/id";

const STORAGE_KEY = "lang";
const DEFAULT = "id";

const translations = {
  id,
  en,
};

interface Props {
  lang: string;
  l: typeof id | typeof en;
  setLang: (newState: Props["lang"]) => void;
}

const useLang = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) localStorage.setItem(STORAGE_KEY, DEFAULT);
  const initial = stored ? stored : DEFAULT;

  return {
    lang: initial,
    l: translations[initial as keyof typeof translations],
    setLang: (newState) =>
      set(() => {
        localStorage.setItem(STORAGE_KEY, newState);
        return {
          lang: newState,
          l: translations[newState as keyof typeof translations],
        };
      }),
  };
});

export default useLang;
