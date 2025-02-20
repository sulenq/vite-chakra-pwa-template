import { create } from "zustand";

interface Props {
  role: object | undefined;
  permissions: number[] | undefined;
  setRole: (newState: Props["role"]) => void;
  setPermissions: (newState: Props["permissions"]) => void;
}

const useAuthMiddleware = create<Props>((set) => ({
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
