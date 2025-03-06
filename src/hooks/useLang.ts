import { create } from "zustand";

const STORAGE_KEY = "lang";

const DEFAULT = "en";

interface Props {
  lang: string;
  setLang: (newState: string) => void;
}

const useLang = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored ? JSON.parse(stored) : DEFAULT;

  return {
    lang: initial,
    setLang: (newState) =>
      set(() => {
        const newLang = newState;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newLang));
        return { lang: newState };
      }),
  };
});

export default useLang;
