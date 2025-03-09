import { create } from "zustand";

const STORAGE_KEY = "timeFormat";
const DEFAULT = "24-hour";

interface Props {
  timeFormat: string;
  setTimeFormat: (newState: string) => void;
}

const useTimeFormat = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) localStorage.setItem(STORAGE_KEY, DEFAULT);
  const initial = stored ? stored : DEFAULT;

  return {
    timeFormat: initial,
    setTimeFormat: (newState) =>
      set(() => {
        localStorage.setItem(STORAGE_KEY, newState);
        return {
          timeFormat: newState,
        };
      }),
  };
});

export default useTimeFormat;
