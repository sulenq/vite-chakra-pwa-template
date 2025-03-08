import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import CheckIndicator from "@/components/ui-custom/CheckIndicator";
import HelperText from "@/components/ui-custom/HelperText";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import LANGUAGES from "@/constant/languages";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import { HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IconLanguage } from "@tabler/icons-react";

const LanguageRegionSettingsPage = () => {
  // Context
  const { themeConfig } = useThemeConfig();
  const { l, lang, setLang } = useLang();

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
        </ItemHeaderContainer>

        <CContainer gap={4} pt={4} pb={3}>
          <CContainer px={4}>
            <HelperText>Silahkan sesuaikan preferensi bahasa Anda</HelperText>
          </CContainer>

          <SimpleGrid px={3} gap={2} columns={[1, 2]}>
            {LANGUAGES.map((item, i) => {
              const active = lang === item.key;

              return (
                <BButton
                  key={i}
                  borderRadius={themeConfig.radii.component}
                  gap={1}
                  variant={"outline"}
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
