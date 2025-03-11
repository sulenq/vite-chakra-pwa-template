import CContainer from "@/components/ui-custom/CContainer";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import ToggleSettingsContainer from "@/components/widget/ToggleSettingsContainer";
import useADM from "@/context/useADM";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconMoon2 } from "@tabler/icons-react";
import { useEffect } from "react";

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
          <Text fontWeight={"bold"}>{l.dark_mode_settings}</Text>
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

const DisplaySettingsPage = () => {
  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/display">
      <CContainer gap={4}>
        <DarkMode />
      </CContainer>
    </SettingsNavsContainer>
  );
};

export default DisplaySettingsPage;
