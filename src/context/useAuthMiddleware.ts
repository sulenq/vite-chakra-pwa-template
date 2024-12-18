import { create } from "zustand";

interface State {
  role: object | undefined;
  permissions: number[] | undefined;
}

interface Actions {
  setRole: (newState: State["role"]) => void;
  setPermissions: (newState: State["permissions"]) => void;
}

const useAuthMiddleware = create<State & Actions>((set) => ({
  role: undefined,
  setRole: (newState) =>
    set(() => ({
      role: newState,
    })),

  permissions: undefined,
  setPermissions: (newState) =>
    set(() => ({
      permissions: newState,
    })),
}));

export default useAuthMiddleware;
