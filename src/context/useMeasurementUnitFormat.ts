import { create } from "zustand";

const STORAGE_KEY = "measurementUnitFormat";
const DEFAULT = "metric";

interface Props {
  measurementUnitFormat: string;
  setMeasurementUnitFormat: (newState: string) => void;
}

const useMeasurementUnitFormat = create<Props>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) localStorage.setItem(STORAGE_KEY, DEFAULT);
  const initial = stored ? stored : DEFAULT;

  return {
    measurementUnitFormat: initial,
    setMeasurementUnitFormat: (newState) =>
      set(() => {
        localStorage.setItem(STORAGE_KEY, newState);
        return {
          measurementUnitFormat: newState,
        };
      }),
  };
});

export default useMeasurementUnitFormat;
