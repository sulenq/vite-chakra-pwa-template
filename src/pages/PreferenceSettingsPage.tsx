import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import CheckIndicator from "@/components/ui-custom/CheckIndicator";
import HelperText from "@/components/ui-custom/HelperText";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import DATE_FORMATS from "@/constant/dateFormats";
import LANGUAGES from "@/constant/languages";
import useDateFormat from "@/context/useDateFormat";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import formatDate from "@/utils/formatDate";
import { HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IconCalendar, IconLanguage } from "@tabler/icons-react";

const PreferenceSettingsPage = () => {
  // Context
  const { themeConfig } = useThemeConfig();
  const { l, lang, setLang } = useLang();
  const { dateFormat, setDateFormat } = useDateFormat();

  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/language">
      <CContainer gap={4}>
        {/* Language */}
        <ItemContainer>
          <ItemHeaderContainer>
            <HStack>
              <Icon maxW={"20px"}>
                <IconLanguage />
              </Icon>
              <Text fontWeight={"bold"}>{l.language_settings_title}</Text>
            </HStack>
          </ItemHeaderContainer>

          <CContainer gap={4} py={2}>
            <SimpleGrid px={2} columns={[1, 2, 3]}>
              {LANGUAGES.map((item, i) => {
                const active = lang === item.key;

                return (
                  <BButton
                    key={i}
                    unclicky
                    borderRadius={themeConfig.radii.component}
                    gap={1}
                    variant={"ghost"}
                    justifyContent={"space-between"}
                    onClick={() => {
                      setLang(item.key);
                    }}
                  >
                    <Text fontWeight={"bold"} truncate>
                      {item.label}{" "}
                      <span style={{ color: "var(--dt)", marginLeft: "4px" }}>
                        {item.code}
                      </span>
                    </Text>

                    {active && <CheckIndicator />}
                  </BButton>
                );
              })}
            </SimpleGrid>
          </CContainer>
        </ItemContainer>

        {/* Date Format */}
        <ItemContainer>
          <ItemHeaderContainer>
            <HStack>
              <Icon maxW={"20px"}>
                <IconCalendar />
              </Icon>
              <Text fontWeight={"bold"}>{l.date_format_settings_title}</Text>
            </HStack>
          </ItemHeaderContainer>

          <CContainer gap={4} py={2}>
            <SimpleGrid px={2} columns={[1, 2, 3]}>
              {DATE_FORMATS.map((item, i) => {
                const active = item.key === dateFormat;

                return (
                  <CContainer
                    key={i}
                    px={4}
                    py={3}
                    borderRadius={themeConfig.radii.component}
                    onClick={() => {
                      setDateFormat(item.key);
                    }}
                    cursor={"pointer"}
                    _hover={{ bg: "gray.subtle" }}
                    _active={{ bg: "gray.subtle" }}
                    transition={"200ms"}
                  >
                    <HStack justify={"space-between"} align={"start"}>
                      <Text fontWeight={"bold"} truncate>
                        {item.label}
                      </Text>

                      {active && <CheckIndicator />}
                    </HStack>

                    <Text color={"fg.subtle"} mb={2}>
                      {item.description}
                    </Text>

                    <Text>{formatDate(new Date(), "basic", item.key)}</Text>
                    <Text>{formatDate(new Date(), "fullMonth", item.key)}</Text>
                    <Text>
                      {formatDate(new Date(), "weekdayFullMonth", item.key)}
                    </Text>
                  </CContainer>
                );
              })}
            </SimpleGrid>
          </CContainer>
        </ItemContainer>
      </CContainer>

      <HelperText px={2} mt={4}>
        {l.language_region_helper_text}
      </HelperText>
    </SettingsNavsContainer>
  );
};

export default PreferenceSettingsPage;
