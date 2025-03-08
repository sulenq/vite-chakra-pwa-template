import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import CheckIndicator from "@/components/ui-custom/CheckIndicator";
import HelperText from "@/components/ui-custom/HelperText";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import SearchInput from "@/components/ui-custom/SearchInput";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import LANGUAGES from "@/constant/languages";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import { HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IconLanguage } from "@tabler/icons-react";

const LanguageRegionSettingsPage = () => {
  // Context
  const { themeConfig } = useThemeConfig();
  const { l, lang, setLang } = useLang();

  // Utils
  const iss = useIsSmScreenWidth();

  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/language">
      <HelperText px={2} mb={4}>
        {l.language_region_helper_text}
      </HelperText>

      <ItemContainer>
        <ItemHeaderContainer>
          <HStack>
            <Icon maxW={"20px"}>
              <IconLanguage />
            </Icon>
            <Text fontWeight={"bold"}>{l.language_settings_title}</Text>
          </HStack>

          {!iss && <SearchInput maxW={"200px"} inputProps={{ size: "xs" }} />}
        </ItemHeaderContainer>

        <CContainer gap={4} py={3}>
          {iss && (
            <CContainer px={3}>
              <SearchInput />
            </CContainer>
          )}

          <SimpleGrid px={3} gap={2} columns={[1, 2, 3]}>
            {LANGUAGES.map((item, i) => {
              const active = lang === item.key;

              return (
                <BButton
                  key={i}
                  border={"1px solid {colors.border.muted}"}
                  borderRadius={themeConfig.radii.component}
                  p={4}
                  gap={1}
                  variant={"ghost"}
                  justifyContent={"space-between"}
                  onClick={() => {
                    setLang(item.key);
                  }}
                >
                  <HStack>
                    <Text fontWeight={"bold"}>{item.label}</Text>
                    <Text color={"fg.subtle"}>{item.code}</Text>
                  </HStack>

                  {active && <CheckIndicator />}
                </BButton>
              );
            })}
          </SimpleGrid>
        </CContainer>
      </ItemContainer>
    </SettingsNavsContainer>
  );
};

export default LanguageRegionSettingsPage;
