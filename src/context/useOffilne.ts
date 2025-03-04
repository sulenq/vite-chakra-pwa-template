import { create } from "zustand";

interface State_Actions {
  offline: boolean;
  setOffline: (newState: any) => void;
}

const useOffline = create<State_Actions>((set) => {
  return {
    offline: false,
    setOffline: (newState: any) => set({ offline: newState }),
  };
});

export default useOffline;
