import { create } from "zustand";

interface Props {
  activeDrawerId: string[];
  setActiveDrawerId: (newState: string[]) => void;
}

const useActiveDrawerId = create<Props>((set) => ({
  activeDrawerId: [],
  setActiveDrawerId: (newState: string[]) => set({ activeDrawerId: newState }),
}));

export default useActiveDrawerId;
