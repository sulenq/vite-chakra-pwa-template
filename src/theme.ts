import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      bg: "body",
    },
    "p, h1, h2, h3, h4, h5, h6, a, label, th, td": {
      color: "text",
    },
  },
  theme: {
    tokens: {
      colors: {
        light: { value: "#fff" },
        dark: { value: "#101010" },
        darktrans: { value: "#252525df" },
        d0: { value: "#8a8a8a09" },
        d1: { value: "#7e7e7e08" },
        d2: { value: "#7e7e7e20" },
        d3: { value: "#7e7e7e36" },
        dt: { value: "#858585c1" },
        gray: {
          800: { value: "#1B1B1B" },
          900: { value: "#151515" },
        },
        placeholder: { value: "#96969691" },
        p: {
          50: { value: "#f5faff" },
          100: { value: "#CCE7FF" },
          200: { value: "#99CCFF" },
          300: { value: "#66ACFF" },
          400: { value: "#3F90FF" },
          500: { value: "#0062FF" },
          "500a": { value: "#1a91ff20" },
          600: { value: "#004BDB" },
          700: { value: "#001F7A" },
          800: { value: "#001667" },
          900: { value: "#00124F" },
        },
        salmon: {
          50: { value: "#FFF5F0" },
          100: { value: "#FFE0DA" },
          200: { value: "#FFC1B3" },
          300: { value: "#FFA18D" },
          400: { value: "#FF8267" },
          500: { value: "#FF6242" },
          600: { value: "#E64F2A" },
          700: { value: "#B33F20" },
          800: { value: "#802F16" },
          900: { value: "#4D1F0D" },
        },
        pastelSalmon: {
          50: { value: "#FFF8F5" },
          100: { value: "#FFECE6" },
          200: { value: "#FFD4C1" },
          300: { value: "#FFBDA1" },
          400: { value: "#FFA581" },
          500: { value: "#FF8E62" },
          600: { value: "#E67C4F" },
          700: { value: "#B3623F" },
          800: { value: "#80482F" },
          900: { value: "#4D2E1F" },
        },
        yellow: {
          50: { value: "#fffff0" },
          100: { value: "#fefcbf" },
          200: { value: "#faf089" },
          300: { value: "#f6e05e" },
          400: { value: "#ecc94b" },
          500: { value: "#f6e05e" },
          600: { value: "#b7791f" },
          700: { value: "#975a16" },
          800: { value: "#744210" },
          900: { value: "#5f370e" },
        },
        lime: {
          50: { value: "#F9FBE7" },
          100: { value: "#F0F4C3" },
          200: { value: "#E6EE9C" },
          300: { value: "#DCE775" },
          400: { value: "#D4E157" },
          500: { value: "#CDDC39" },
          600: { value: "#C0CA33" },
          700: { value: "#AFB42B" },
          800: { value: "#9E9D24" },
          900: { value: "#827717" },
        },
        olive: {
          50: { value: "#F2F4E7" },
          100: { value: "#DDE3C4" },
          200: { value: "#C7D29F" },
          300: { value: "#B1C17A" },
          400: { value: "#9CB055" },
          500: { value: "#879F30" },
          600: { value: "#758B2B" },
          700: { value: "#637726" },
          800: { value: "#506321" },
          900: { value: "#3D4F1C" },
        },
        kemenkes: {
          50: { value: "#E9FFF6" },
          100: { value: "#CFFBE9" },
          200: { value: "#A0F7DC" },
          300: { value: "#6EE8CD" },
          400: { value: "#47D1BF" },
          500: { value: "#16B3AC" },
          600: { value: "#109399" },
          700: { value: "#0B7180" },
          800: { value: "#075267" },
          900: { value: "#043C55" },
        },
        sky: {
          50: { value: "#F0F9FF" },
          100: { value: "#E0F2FE" },
          200: { value: "#BAE6FD" },
          300: { value: "#7DD3FC" },
          400: { value: "#38BDF8" },
          500: { value: "#0EA5E9" },
          600: { value: "#0284C7" },
          700: { value: "#0369A1" },
          800: { value: "#075985" },
          900: { value: "#0C4A6E" },
        },
        indigo: {
          50: { value: "#E8EAF6" },
          100: { value: "#C5CAE9" },
          200: { value: "#9FA8DA" },
          300: { value: "#7986CB" },
          400: { value: "#5C6BC0" },
          500: { value: "#3F51B5" },
          600: { value: "#3949AB" },
          700: { value: "#303F9F" },
          800: { value: "#283593" },
          900: { value: "#141A63" },
        },
        lavender: {
          50: { value: "#F5F0FF" },
          100: { value: "#E6DAFF" },
          200: { value: "#CBB3FF" },
          300: { value: "#AF8DFF" },
          400: { value: "#9567FF" },
          500: { value: "#7A42FF" },
          600: { value: "#6720E6" },
          700: { value: "#5314B3" },
          800: { value: "#3F0F80" },
          900: { value: "#2A0A4D" },
        },
        powderLavender: {
          50: { value: "#FBF8FF" },
          100: { value: "#F2ECFF" },
          200: { value: "#E0D3FF" },
          300: { value: "#CFBAFF" },
          400: { value: "#BDA0FF" },
          500: { value: "#AB87FF" },
          600: { value: "#9770E6" },
          700: { value: "#7A5AB3" },
          800: { value: "#5E4380" },
          900: { value: "#412D4D" },
        },
        flamingoPink: {
          50: { value: "#FFEFF4" },
          100: { value: "#FFD6E3" },
          200: { value: "#FFB3CD" },
          300: { value: "#FF8FB7" },
          400: { value: "#FF6BA1" },
          500: { value: "#FF478B" },
          600: { value: "#E63E7D" },
          700: { value: "#B33063" },
          800: { value: "#80234A" },
          900: { value: "#4D162F" },
        },
        bubblegumPink: {
          50: { value: "#FFF0FA" },
          100: { value: "#FFD9F2" },
          200: { value: "#FFB6E4" },
          300: { value: "#FF92D7" },
          400: { value: "#FF6EC9" },
          500: { value: "#FF4ABB" },
          600: { value: "#E642A8" },
          700: { value: "#B33283" },
          800: { value: "#80235E" },
          900: { value: "#4D163A" },
        },
        brown: {
          50: { value: "#EFEBE9" },
          100: { value: "#D7CCC8" },
          200: { value: "#BCAAA4" },
          300: { value: "#A1887F" },
          400: { value: "#8D6E63" },
          500: { value: "#795548" },
          600: { value: "#6D4C41" },
          700: { value: "#5D4037" },
          800: { value: "#3E2723" },
          900: { value: "#2A1916" },
        },
        mocha: {
          50: { value: "#F5EDE9" },
          100: { value: "#EAD7CF" },
          200: { value: "#D7B8A9" },
          300: { value: "#C49A84" },
          400: { value: "#B27B5E" },
          500: { value: "#9F5D39" },
          600: { value: "#864C2F" },
          700: { value: "#6B3D25" },
          800: { value: "#512D1A" },
          900: { value: "#371E10" },
        },
        caramel: {
          50: { value: "#FBF3EA" },
          100: { value: "#F4E0C9" },
          200: { value: "#E8C7A0" },
          300: { value: "#DCAE78" },
          400: { value: "#D0944F" },
          500: { value: "#C47B27" },
          600: { value: "#A56520" },
          700: { value: "#834F19" },
          800: { value: "#623913" },
          900: { value: "#41240C" },
        },
        cream: {
          50: { value: "#FCF9F4" },
          100: { value: "#F7F1E4" },
          200: { value: "#EFE5CE" },
          300: { value: "#E7D9B8" },
          400: { value: "#DFCCA2" },
          500: { value: "#D7BF8C" },
          600: { value: "#B19D72" },
          700: { value: "#8A7A58" },
          800: { value: "#63573E" },
          900: { value: "#3D3424" },
        },
      },
    },
    semanticTokens: {
      colors: {
        text: { value: { base: "{colors.dark}", _dark: "#ddd" } },
        body: { value: { base: "{colors.light}", _dark: "{colors.dark}" } },
        bgContent: {
          value: { base: "{colors.bg.subtle}", _dark: "#0d0d0d" },
        },
        bodytrans: {
          value: { base: "{colors.light}aa", _dark: "{colors.dark}aa" },
        },
        ibody: { value: { base: "{colors.dark}", _dark: "{colors.light}" } },
        border: {
          subtle: {
            value: {
              base: "#f5f5f5 !important",
              _dark: "#151515 !important",
            },
          },
          muted: {
            value: {
              base: "#EBEBEC !important",
              _dark: "#1B1B1E !important",
            },
          },
        },
        p: {
          solid: { value: { base: "{colors.p.500}", _dark: "{colors.p.500}" } },
          contrast: { value: "{colors.p.50}" },
          fg: { value: { base: "{colors.p.500}", _dark: "{colors.p.300}" } },
          muted: { value: { base: "{colors.p.200}", _dark: "{colors.p.700}" } },
          subtle: {
            value: { base: "{colors.p.100}", _dark: "{colors.p.900}" },
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
        salmon: {
          solid: {
            value: {
              base: "{colors.salmon.500}",
              _dark: "{colors.salmon.400}",
            },
          },
          contrast: { value: "{colors.salmon.50}" },
          fg: {
            value: {
              base: "{colors.salmon.600}",
              _dark: "{colors.salmon.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.salmon.200}",
              _dark: "{colors.salmon.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.salmon.100}",
              _dark: "{colors.salmon.900}",
            },
          },
          emphasized: { value: "{colors.salmon.300}" },
          focusRing: {
            value: {
              base: "{colors.salmon.500}",
              _dark: "{colors.salmon.900}",
            },
          },
        },
        pastelSalmon: {
          solid: {
            value: {
              base: "{colors.pastelSalmon.500}",
              _dark: "{colors.pastelSalmon.400}",
            },
          },
          contrast: { value: "{colors.pastelSalmon.50}" },
          fg: {
            value: {
              base: "{colors.pastelSalmon.600}",
              _dark: "{colors.pastelSalmon.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.pastelSalmon.200}",
              _dark: "{colors.pastelSalmon.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.pastelSalmon.100}",
              _dark: "{colors.pastelSalmon.900}",
            },
          },
          emphasized: { value: "{colors.pastelSalmon.300}" },
          focusRing: {
            value: {
              base: "{colors.pastelSalmon.500}",
              _dark: "{colors.pastelSalmon.900}",
            },
          },
        },
        yellow: {
          solid: {
            value: {
              base: "{colors.yellow.500}",
              _dark: "{colors.yellow.500}",
            },
          },
          contrast: { value: "#000000" },
          fg: { value: "{colors.yellow.900}" },
          muted: { value: "{colors.yellow.300}" },
          subtle: { value: "{colors.yellow.200}" },
          emphasized: { value: "{colors.yellow.400}" },
          focusRing: { value: "{colors.yellow.600}" },
        },
        lime: {
          solid: {
            value: {
              base: "{colors.lime.500}",
              _dark: "{colors.lime.500}",
            },
          },
          contrast: { value: "#000000" },
          fg: {
            value: { base: "{colors.lime.800}", _dark: "{colors.lime.200}" },
          },
          muted: {
            value: { base: "{colors.lime.500}", _dark: "{colors.lime.800}" },
          },
          subtle: {
            value: { base: "{colors.lime.200}", _dark: "{colors.lime.900}" },
          },
          emphasized: { value: "{colors.lime.300}" },
          focusRing: {
            value: { base: "{colors.lime.500}", _dark: "{colors.lime.900}" },
          },
        },
        olive: {
          solid: {
            value: { base: "{colors.olive.500}", _dark: "{colors.olive.500}" },
          },
          contrast: { value: "{colors.light}" },
          fg: {
            value: { base: "{colors.olive.700}", _dark: "{colors.olive.200}" },
          },
          muted: {
            value: { base: "{colors.olive.200}", _dark: "{colors.olive.800}" },
          },
          subtle: {
            value: { base: "{colors.olive.100}", _dark: "{colors.olive.900}" },
          },
          emphasized: { value: "{colors.olive.300}" },
          focusRing: {
            value: { base: "{colors.olive.500}", _dark: "{colors.olive.900}" },
          },
        },
        kemenkes: {
          solid: {
            value: {
              base: "{colors.kemenkes.500}",
              _dark: "{colors.kemenkes.500}",
            },
          },
          contrast: {
            value: { base: "{colors.light}", _dark: "{colors.dark}" },
          },
          fg: {
            value: {
              base: "{colors.kemenkes.700}",
              _dark: "{colors.kemenkes.200}",
            },
          },
          muted: {
            value: {
              base: "{colors.kemenkes.200}",
              _dark: "{colors.kemenkes.800}",
            },
          },
          subtle: {
            value: {
              base: "{colors.kemenkes.100}",
              _dark: "{colors.kemenkes.900}",
            },
          },
          emphasized: { value: "{colors.kemenkes.400}" },
          focusRing: {
            value: {
              base: "{colors.kemenkes.600}",
              _dark: "{colors.kemenkes.700}",
            },
          },
        },
        sky: {
          solid: {
            value: {
              base: "{colors.sky.500}",
              _dark: "{colors.sky.400}",
            },
          },
          contrast: {
            value: {
              base: "{colors.light}",
              _dark: "{colors.dark}",
            },
          },
          fg: {
            value: {
              base: "{colors.sky.900}",
              _dark: "{colors.sky.200}",
            },
          },
          muted: {
            value: {
              base: "{colors.sky.300}",
              _dark: "{colors.sky.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.sky.200}",
              _dark: "{colors.sky.800}",
            },
          },
          emphasized: {
            value: {
              base: "{colors.sky.400}",
              _dark: "{colors.sky.600}",
            },
          },
          focusRing: {
            value: {
              base: "{colors.sky.600}",
              _dark: "{colors.sky.300}",
            },
          },
        },
        indigo: {
          solid: {
            value: {
              base: "{colors.indigo.500}",
              _dark: "{colors.indigo.500}",
            },
          },
          contrast: { value: "{colors.indigo.50}" },
          fg: {
            value: {
              base: "{colors.indigo.700}",
              _dark: "{colors.indigo.200}",
            },
          },
          muted: {
            value: {
              base: "{colors.indigo.100}",
              _dark: "{colors.indigo.800}",
            },
          },
          subtle: {
            value: {
              base: "{colors.indigo.50}",
              _dark: "{colors.indigo.900}",
            },
          },
          emphasized: { value: "{colors.indigo.300}" },
          focusRing: {
            value: {
              base: "{colors.indigo.500}",
              _dark: "{colors.indigo.900}",
            },
          },
        },
        lavender: {
          solid: {
            value: {
              base: "{colors.lavender.500}",
              _dark: "{colors.lavender.400}",
            },
          },
          contrast: { value: "{colors.lavender.50}" },
          fg: {
            value: {
              base: "{colors.lavender.600}",
              _dark: "{colors.lavender.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.lavender.200}",
              _dark: "{colors.lavender.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.lavender.100}",
              _dark: "{colors.lavender.900}",
            },
          },
          emphasized: { value: "{colors.lavender.300}" },
          focusRing: {
            value: {
              base: "{colors.lavender.500}",
              _dark: "{colors.lavender.900}",
            },
          },
        },
        powderLavender: {
          solid: {
            value: {
              base: "{colors.powderLavender.500}",
              _dark: "{colors.powderLavender.400}",
            },
          },
          contrast: {
            value: {
              base: "{colors.powderLavender.50}",
              _dark: "{colors.powderLavender.900}",
            },
          },
          fg: {
            value: {
              base: "{colors.powderLavender.600}",
              _dark: "{colors.powderLavender.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.powderLavender.200}",
              _dark: "{colors.powderLavender.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.powderLavender.100}",
              _dark: "{colors.powderLavender.900}",
            },
          },
          emphasized: { value: "{colors.powderLavender.300}" },
          focusRing: {
            value: {
              base: "{colors.powderLavender.500}",
              _dark: "{colors.powderLavender.900}",
            },
          },
        },
        flamingoPink: {
          solid: {
            value: {
              base: "{colors.flamingoPink.500}",
              _dark: "{colors.flamingoPink.400}",
            },
          },
          contrast: { value: "{colors.flamingoPink.50}" },
          fg: {
            value: {
              base: "{colors.flamingoPink.600}",
              _dark: "{colors.flamingoPink.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.flamingoPink.200}",
              _dark: "{colors.flamingoPink.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.flamingoPink.100}",
              _dark: "{colors.flamingoPink.900}",
            },
          },
          emphasized: { value: "{colors.flamingoPink.300}" },
          focusRing: {
            value: {
              base: "{colors.flamingoPink.500}",
              _dark: "{colors.flamingoPink.900}",
            },
          },
        },
        bubblegumPink: {
          solid: {
            value: {
              base: "{colors.bubblegumPink.500}",
              _dark: "{colors.bubblegumPink.400}",
            },
          },
          contrast: { value: "{colors.bubblegumPink.50}" },
          fg: {
            value: {
              base: "{colors.bubblegumPink.600}",
              _dark: "{colors.bubblegumPink.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.bubblegumPink.200}",
              _dark: "{colors.bubblegumPink.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.bubblegumPink.100}",
              _dark: "{colors.bubblegumPink.900}",
            },
          },
          emphasized: { value: "{colors.bubblegumPink.300}" },
          focusRing: {
            value: {
              base: "{colors.bubblegumPink.500}",
              _dark: "{colors.bubblegumPink.900}",
            },
          },
        },
        brown: {
          solid: {
            value: { base: "{colors.brown.500}", _dark: "{colors.brown.500}" },
          },
          contrast: { value: "{colors.brown.50}" },
          fg: {
            value: { base: "{colors.brown.700}", _dark: "{colors.brown.200}" },
          },
          muted: {
            value: { base: "{colors.brown.200}", _dark: "{colors.brown.800}" },
          },
          subtle: {
            value: { base: "{colors.brown.100}", _dark: "{colors.brown.900}" },
          },
          emphasized: { value: "{colors.brown.300}" },
          focusRing: {
            value: { base: "{colors.brown.500}", _dark: "{colors.brown.900}" },
          },
        },
        mocha: {
          solid: {
            value: { base: "{colors.mocha.500}", _dark: "{colors.mocha.400}" },
          },
          contrast: { value: "{colors.mocha.50}" },
          fg: {
            value: { base: "{colors.mocha.600}", _dark: "{colors.mocha.300}" },
          },
          muted: {
            value: { base: "{colors.mocha.200}", _dark: "{colors.mocha.700}" },
          },
          subtle: {
            value: { base: "{colors.mocha.100}", _dark: "{colors.mocha.900}" },
          },
          emphasized: { value: "{colors.mocha.300}" },
          focusRing: {
            value: { base: "{colors.mocha.500}", _dark: "{colors.mocha.900}" },
          },
        },
        caramel: {
          solid: {
            value: {
              base: "{colors.caramel.500}",
              _dark: "{colors.caramel.400}",
            },
          },
          contrast: { value: "{colors.caramel.50}" },
          fg: {
            value: {
              base: "{colors.caramel.600}",
              _dark: "{colors.caramel.300}",
            },
          },
          muted: {
            value: {
              base: "{colors.caramel.200}",
              _dark: "{colors.caramel.700}",
            },
          },
          subtle: {
            value: {
              base: "{colors.caramel.100}",
              _dark: "{colors.caramel.900}",
            },
          },
          emphasized: { value: "{colors.caramel.300}" },
          focusRing: {
            value: {
              base: "{colors.caramel.500}",
              _dark: "{colors.caramel.900}",
            },
          },
        },
        cream: {
          solid: {
            value: { base: "{colors.cream.500}", _dark: "{colors.cream.400}" },
          },
          contrast: { value: "{colors.cream.900}" },
          fg: {
            value: { base: "{colors.cream.600}", _dark: "{colors.cream.300}" },
          },
          muted: {
            value: { base: "{colors.cream.200}", _dark: "{colors.cream.700}" },
          },
          subtle: {
            value: { base: "{colors.cream.100}", _dark: "{colors.cream.900}" },
          },
          emphasized: { value: "{colors.cream.300}" },
          focusRing: {
            value: { base: "{colors.cream.500}", _dark: "{colors.cream.900}" },
          },
        },
      },
    },
  },
});

const customSystem = createSystem(defaultConfig, customConfig);

export default customSystem;
