import { IMAGES_PATH } from "@/constant/path";
import { create } from "zustand";

const THEME_STORAGE_KEY = "themeConfig";

interface ThemeConfigProps {
  colorPalette: string;
  primaryColor: string;
  primaryColorHex: string;
  logo: string;
  radii: {
    component: string;
    container: string;
  };
}

const DEFAULT_THEME: ThemeConfigProps = {
  colorPalette: "p",
  primaryColor: "p.500",
  primaryColorHex: "#0062FF",
  logo: `${IMAGES_PATH}/logo_graphic.png`,
  radii: {
    component: "lg",
    container: "xl",
  },
};

interface Props {
  themeConfig: ThemeConfigProps;
  setThemeConfig: (config: Partial<ThemeConfigProps>) => void;
}

export const useThemeConfig = create<Props>((set) => {
  const storedConfig = localStorage.getItem(THEME_STORAGE_KEY);
  const initialTheme = storedConfig ? JSON.parse(storedConfig) : DEFAULT_THEME;

  return {
    themeConfig: initialTheme,
    setThemeConfig: (config) => {
      set((state) => {
        const newConfig = { ...state.themeConfig, ...config };
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newConfig));
        return { themeConfig: newConfig };
      });
    },
  };
});
