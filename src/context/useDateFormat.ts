import { create } from "zustand";

const STORAGE_KEY = "dateFormat";
const DEFAULT = "dmy";

interface Props {
  dateFormat: string;
  setDateFormat: (newState: string) => void;
}

const useDateFormat = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) localStorage.setItem(STORAGE_KEY, DEFAULT);
  const initial = stored ? stored : DEFAULT;

  return {
    dateFormat: initial,
    setDateFormat: (newState) =>
      set(() => {
        localStorage.setItem(STORAGE_KEY, newState);
        return {
          dateFormat: newState,
        };
      }),
  };
});

export default useDateFormat;
