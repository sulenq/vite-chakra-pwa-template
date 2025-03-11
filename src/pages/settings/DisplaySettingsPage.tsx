import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import SelectInput from "@/components/ui-custom/SelectInput";
import StringInput from "@/components/ui-custom/StringInput";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import ToggleSettingsContainer from "@/components/widget/ToggleSettingsContainer";
import useADM from "@/context/useADM";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import { OPTIONS_RELIGION } from "@/gens/selectOptions";
import { Center, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IconCheck, IconMoon2, IconPalette } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const DarkMode = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const { ADM, setADM } = useADM(); // Adaptive Dark Mode (Time-based)

  // Handle adaptive dark mode
  useEffect(() => {
    if (ADM === "false") return;

    const updateDarkMode = () => {
      const hour = new Date().getHours();
      setColorMode(hour >= 18 || hour < 6 ? "dark" : "light"); // Dark mode 18:00 ~ 06:00
    };

    updateDarkMode();
    const interval = setInterval(updateDarkMode, 60000);

    return () => clearInterval(interval);
  }, [ADM, setColorMode]);

  const handleAdaptiveToggle = () => {
    if (ADM === "true") {
      setADM("false");
    } else {
      setADM("true");
    }
  };

  return (
    <ItemContainer>
      <ItemHeaderContainer>
        <HStack>
          <Icon maxW={"20px"}>
            <IconMoon2 />
          </Icon>
          <Text fontWeight={"bold"}>{l.dark_mode_settings_title}</Text>
        </HStack>
      </ItemHeaderContainer>

      <CContainer gap={4} py={3}>
        {/* Manual Dark Mode Toggle */}
        <ToggleSettingsContainer disabled={ADM === "true"}>
          <CContainer>
            <Text>{l.dark_mode_ui_settings.label}</Text>
            <Text color={"fg.subtle"}>
              {l.dark_mode_ui_settings.description}
            </Text>
          </CContainer>

          <Switch
            checked={colorMode === "dark"}
            onChange={toggleColorMode}
            colorPalette={themeConfig.colorPalette}
          />
        </ToggleSettingsContainer>

        {/* Adaptive Dark Mode Toggle */}
        <ToggleSettingsContainer>
          <CContainer>
            <Text>{l.auto_dark_mode_ui_settings.label}</Text>
            <Text color={"fg.subtle"}>
              {l.auto_dark_mode_ui_settings.description}
            </Text>
          </CContainer>

          <Switch
            checked={ADM === "true"}
            onChange={handleAdaptiveToggle}
            colorPalette={themeConfig.colorPalette}
          />
        </ToggleSettingsContainer>
      </CContainer>
    </ItemContainer>
  );
};

const Theme = () => {
  // Contexts
  const { themeConfig, setThemeConfig } = useThemeConfig();
  const { l } = useLang();

  // States, Refs
  const colorPalettes = [
    { palette: "p", primaryHex: "#0062FF" },
    { palette: "gray", primaryHex: "#1B1B1B" },
    { palette: "red", primaryHex: "#FF0000" },
    { palette: "salmon", primaryHex: "#FF6242" },
    { palette: "orange", primaryHex: "#FF8E62" },
    { palette: "pastelSalmon", primaryHex: "#FF8E62" },
    { palette: "yellow", primaryHex: "#f6e05e" },
    { palette: "lime", primaryHex: "#CDDC39" },
    { palette: "olive", primaryHex: "#879F30" },
    { palette: "green", primaryHex: "#4CAF50" },
    { palette: "teal", primaryHex: "#009688" },
    { palette: "kemenkes", primaryHex: "#16B3AC" },
    { palette: "cyan", primaryHex: "#00BCD4" },
    { palette: "sky", primaryHex: "#0EA5E9" },
    { palette: "blue", primaryHex: "#2196F3" },
    { palette: "indigo", primaryHex: "#3F51B5" },
    { palette: "discord", primaryHex: "#5865F2" },
    { palette: "lavender", primaryHex: "#7A42FF" },
    { palette: "powderLavender", primaryHex: "#AB87FF" },
    { palette: "purple", primaryHex: "#9C27B0" },
    { palette: "pink", primaryHex: "#E91E63" },
    { palette: "flamingoPink", primaryHex: "#FF478B" },
    { palette: "bubblegumPink", primaryHex: "#FF4ABB" },
    { palette: "cream", primaryHex: "#D7BF8C" },
    { palette: "caramel", primaryHex: "#C47B27" },
    { palette: "mocha", primaryHex: "#9F5D39" },
    { palette: "brown", primaryHex: "#795548" },
  ];
  const [select, setSelect] = useState<any>();

  return (
    <ItemContainer>
      <ItemHeaderContainer>
        <HStack>
          <Icon maxW={"20px"}>
            <IconPalette />
          </Icon>
          <Text fontWeight={"bold"}>{l.theme_settings_title}</Text>
        </HStack>
      </ItemHeaderContainer>

      <CContainer gap={4} py={3} px={3}>
        <HStack wrap={"wrap"} gapY={4}>
          <BButton
            flex={"1 1 100px"}
            colorPalette={themeConfig.colorPalette}
            size={"md"}
          >
            Button
          </BButton>
          <BButton
            flex={"1 1 100px"}
            colorPalette={themeConfig.colorPalette}
            size={"md"}
            variant={"outline"}
          >
            Button
          </BButton>
          <StringInput boxProps={{ flex: "1 1 100px" }} />
          <SelectInput
            flex={"1 1 100px"}
            name="select1"
            title={l.religion}
            initialOptions={OPTIONS_RELIGION}
            onConfirm={(inputValue) => {
              setSelect(inputValue);
            }}
            inputValue={select}
          />
        </HStack>

        <SimpleGrid columns={[5, 10, null, 15]} gap={2}>
          {colorPalettes.map((color, i) => {
            const active = color.palette === themeConfig.colorPalette;

            return (
              <Center
                key={i}
                p={color.palette === themeConfig.colorPalette ? 1 : 0}
                border={"2px solid"}
                borderColor={
                  color.palette === themeConfig.colorPalette
                    ? themeConfig.primaryColor
                    : `${color.palette}.500`
                }
                borderRadius={themeConfig.radii.component}
                cursor={"pointer"}
                onClick={() => {
                  setThemeConfig({
                    colorPalette: color.palette,
                    primaryColor: `${color.palette}.500`,
                    primaryColorHex: color.primaryHex,
                  });
                }}
              >
                <Center
                  w={"full"}
                  aspectRatio={1}
                  borderRadius={
                    color.palette === themeConfig.colorPalette ? 5 : 6
                  }
                  bg={`${color.palette}.500`}
                >
                  {active && (
                    <Icon color={`${themeConfig.colorPalette}.contrast`}>
                      <IconCheck />
                    </Icon>
                  )}
                </Center>
              </Center>
            );
          })}
        </SimpleGrid>
      </CContainer>
    </ItemContainer>
  );
};

const DisplaySettingsPage = () => {
  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/display">
      <CContainer gap={4}>
        <DarkMode />

        <Theme />
      </CContainer>
    </SettingsNavsContainer>
  );
};

export default DisplaySettingsPage;
