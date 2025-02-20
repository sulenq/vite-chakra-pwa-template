const THEME_STORAGE_KEY = "themeConfig";

interface ThemeConfig {
  colorPalette: string;
  primaryColor: string;
}

const DEFAULT_THEME: ThemeConfig = {
  colorPalette: "p",
  primaryColor: "p.500",
};

const themeConfig = (): ThemeConfig => {
  try {
    const storedConfig = localStorage.getItem(THEME_STORAGE_KEY);
    return storedConfig ? JSON.parse(storedConfig) : DEFAULT_THEME;
  } catch (error) {
    console.error("Error reading theme config from localStorage:", error);
    return DEFAULT_THEME;
  }
};

const setThemeConfig = (config: Partial<ThemeConfig>) => {
  try {
    const currentConfig = themeConfig();
    const newConfig = { ...currentConfig, ...config };
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newConfig));
  } catch (error) {
    console.error("Error saving theme config to localStorage:", error);
  }
};

export { themeConfig, setThemeConfig };
