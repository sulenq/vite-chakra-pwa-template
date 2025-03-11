import { create } from "zustand";

const STORAGE_KEY = "uom";
const DEFAULT = "metric";

interface Props {
  UOM: string;
  setUOM: (newState: string) => void;
}

const useUOM = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) localStorage.setItem(STORAGE_KEY, DEFAULT);
  const initial = stored ? stored : DEFAULT;

  return {
    UOM: initial,
    setUOM: (newState) =>
      set(() => {
        localStorage.setItem(STORAGE_KEY, newState);
        return {
          UOM: newState,
        };
      }),
  };
});

export default useUOM;
