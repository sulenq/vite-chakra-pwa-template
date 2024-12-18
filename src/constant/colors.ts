import { useColorModeValue } from "@/components/ui/color-mode";

const useContentBgColor = () => {
  return useColorModeValue("#f8f8f8", "#121212");
};

const useTableStripedColor = () => {
  return useColorModeValue("#fbfbfb", "#171717");
};

const useLightDarkColor = () => {
  return useColorModeValue("light", "dark");
};

const useLightDarkColorAlpha = () => {
  return useColorModeValue("#FFFFFF70", "#15151570");
};

const useDarkLightColor = () => {
  return useColorModeValue("dark", "light");
};

const useErrorColor = () => {
  return useColorModeValue("#E53E3E", "#FC8181");
};

const useWarningColor = () => {
  return useColorModeValue("#C05621", "#FBD38D");
};

const useErrorAlphaColor = () => {
  return useColorModeValue("red.50", "rgba(254, 178, 178, 0.12)");
};

const useWarningAlphaColor = () => {
  return useColorModeValue(
    "rgba(251, 211, 141, 0.12)",
    "rgba(251, 211, 141, 0.12)"
  );
};

export {
  useLightDarkColorAlpha,
  useContentBgColor,
  useLightDarkColor,
  useDarkLightColor,
  useErrorColor,
  useErrorAlphaColor,
  useWarningColor,
  useWarningAlphaColor,
  useTableStripedColor,
};
