import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      bg: "body",
    },
  },
  theme: {
    tokens: {
      colors: {
        p: {
          50: { value: "#f5faff" },
          100: { value: "#CCE7FF" },
          200: { value: "#99CCFF" },
          300: { value: "#66ACFF" },
          400: { value: "#3F90FF" },
          500: { value: "#0062FF" },
          "500a": { value: "#1a91ff80" },
          600: { value: "#004BDB" },
          700: { value: "#0038B7" },
          800: { value: "#002793" },
          900: { value: "#001B7A" },
        },
        light: { value: "#FAFAFA" },
        dark: { value: "#151515" },
        darktrans: { value: "#303030df" },
        gray: {
          50: { value: "#fbfbfb" },
          100: { value: "#f5f5f5" },
          200: { value: "#e5e5e5" },
          300: { value: "#d4d4d4" },
          400: { value: "#bcbcbc" },
          500: { value: "#9e9e9e" },
          600: { value: "#626262" },
          700: { value: "#515151" },
          800: { value: "#272727" },
          900: { value: "#202020" },
        },
        d0: { value: "#7e7e7e08" },
        d1: { value: "#7e7e7e10" },
        d2: { value: "#7e7e7e20" },
        d3: { value: "#7e7e7e36" },
        dt: { value: "#858585ff" },
      },
    },
    semanticTokens: {
      colors: {
        p: {
          solid: { value: { base: "{colors.p.500}", _dark: "{colors.p.500}" } },
          contrast: { value: "{colors.p.100}" },
          fg: { value: { base: "{colors.p.700}", _dark: "{colors.p.200}" } },
          muted: { value: { base: "{colors.p.300}", _dark: "{colors.p.800}" } },
          subtle: {
            value: { base: "{colors.p.200}", _dark: "{colors.p.900}" },
          },
          emphasized: { value: "{colors.p.300}" },
          focusRing: {
            value: { base: "{colors.p.500}", _dark: "{colors.p.900}" },
          },
        },
        ap: {
          solid: { value: "{colors.p.500}" },
          contrast: { value: "{colors.p.500}" },
          fg: { value: "{colors.p.500}" },
          muted: { value: "{colors.p.500}" },
          subtle: { value: "{colors.p.500}" },
          emphasized: { value: "{colors.p.500}" },
          focusRing: { value: "{colors.p.500}" },
        },
        aw: {
          solid: { value: "{white}" },
          contrast: { value: "{white}" },
          fg: { value: "{white}" },
          muted: { value: "{white}" },
          subtle: { value: "{white}" },
          emphasized: { value: "{white}" },
          focusRing: { value: "{white}" },
        },
        red: {
          contrast: { value: "{colors.red.100} !important" },
        },
        orange: {
          solid: {
            value: {
              base: "{colors.orange.500} !important",
              _dark: "{colors.orange.500}",
            },
          },
          contrast: { value: "{colors.orange.100} !important" },
        },
        body: { value: { base: "#FFF", _dark: "#151515" } },
        ibody: { value: { base: "#151515", _dark: "#FAFAFC" } },
      },
    },
  },
});

const customSystem = createSystem(defaultConfig, customConfig);

export default customSystem;
