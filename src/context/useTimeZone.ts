import moment from "moment-timezone";
import { create } from "zustand";

const STORAGE_KEY = "timeZone";
const DEFAULT = `Auto (${moment.tz.guess()})`;

interface Props {
  timeZone: string;
  setTimeZone: (newState: string) => void;
}

const useTimeZone = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) localStorage.setItem(STORAGE_KEY, DEFAULT);
  if (stored?.includes("Auto")) localStorage.setItem(STORAGE_KEY, DEFAULT);
  const initial = stored ? stored : DEFAULT;

  return {
    timeZone: initial,
    setTimeZone: (newState) =>
      set(() => {
        localStorage.setItem(STORAGE_KEY, newState);
        return {
          timeZone: newState,
        };
      }),
  };
});

export default useTimeZone;
