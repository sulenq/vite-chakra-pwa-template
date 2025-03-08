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

const LanguageRegionSettingsPage = () => {
  // Context
  const { themeConfig } = useThemeConfig();
  const { l, lang, setLang } = useLang();
  const { dateFormat, setDateFormat } = useDateFormat();

  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/language">
      <HelperText px={2} mb={4}>
        {l.language_region_helper_text}
      </HelperText>

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

          <CContainer gap={4} pt={4} pb={3}>
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

          <CContainer gap={4} pt={4} pb={3}>
            {/* <CContainer px={4}>
              <Text color={"fg.muted"}>
                {l.today} - {formatDate(new Date(), "weekdayFullMonth")}
              </Text>
            </CContainer> */}

            <SimpleGrid px={3} gap={2} columns={[1, 2, 3]}>
              {DATE_FORMATS.map((item, i) => {
                const active = item.key === dateFormat;

                return (
                  <CContainer
                    key={i}
                    px={4}
                    py={3}
                    borderRadius={themeConfig.radii.component}
                    border={"1px solid {colors.border.muted}"}
                    onClick={() => {
                      setDateFormat(item.key);
                    }}
                    cursor={"pointer"}
                    _hover={{ bg: "bg.muted" }}
                    transition={"200ms"}
                  >
                    <HStack justify={"space-between"} align={"start"}>
                      <Text fontWeight={"bold"} truncate>
                        {item.label}
                      </Text>

                      {active && <CheckIndicator />}
                    </HStack>

                    <Text color={"fg.subtle"} mb={4}>
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
    </SettingsNavsContainer>
  );
};

export default LanguageRegionSettingsPage;
