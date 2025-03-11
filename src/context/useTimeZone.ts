import { Type__TimeZoneObject } from "@/constant/types";
import autoTimeZone from "@/utils/autoTimeZone";
import { create } from "zustand";

const STORAGE_KEY = "timeZone";
const DEFAULT: Type__TimeZoneObject = autoTimeZone();

interface Props {
  timeZone: Type__TimeZoneObject;
  setTimeZone: (newState: Type__TimeZoneObject) => void;
}

const useTimeZone = create<Props>((set) => {
  let stored: Type__TimeZoneObject | null = null;

  try {
    const rawStored = localStorage.getItem(STORAGE_KEY);
    if (rawStored) {
      stored = JSON.parse(rawStored) as Type__TimeZoneObject;
    }
  } catch (error) {
    console.error("Failed to parse timezone from localStorage:", error);
  }

  if (!stored || stored.key.startsWith("Auto")) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT));
    stored = DEFAULT;
  }

  return {
    timeZone: stored,
    setTimeZone: (newState) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      set({ timeZone: newState });
    },
  };
});

export default useTimeZone;
