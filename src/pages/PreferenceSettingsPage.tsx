import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import CheckIndicator from "@/components/ui-custom/CheckIndicator";
import FeedbackNotFound from "@/components/ui-custom/FeedbackNotFound";
import HelperText from "@/components/ui-custom/HelperText";
import ItemContainer from "@/components/ui-custom/ItemContainer";
import ItemHeaderContainer from "@/components/ui-custom/ItemHeaderContainer";
import SearchInput from "@/components/ui-custom/SearchInput";
import SettingsNavsContainer from "@/components/widget/SettingsNavsContainer";
import { DATE_FORMATS } from "@/constant/dateFormats";
import { LANGUAGES } from "@/constant/languages";
import { MEASURMENT_UNIT_FORMATS } from "@/constant/measurmentUnitFormats";
import { TIME_FORMATS } from "@/constant/timeFormats";
import { Type__DateFormat, Type__TimeFormat } from "@/constant/types";
import useDateFormat from "@/context/useDateFormat";
import useLang from "@/context/useLang";
import useMeasurementUnitFormat from "@/context/useMeasurementUnitFormat";
import { useThemeConfig } from "@/context/useThemeConfig";
import useTimeFormat from "@/context/useTimeFormat";
import useTimeZone from "@/context/useTimeZone";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import formatDate from "@/utils/formatDate";
import formatTime from "@/utils/formatTime";
import pluck from "@/utils/pluck";
import { chakra, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import {
  IconCalendar,
  IconClock12,
  IconLanguage,
  IconRulerMeasure,
  IconTimezone,
} from "@tabler/icons-react";
import moment from "moment-timezone";
import { useState } from "react";

const TimeZone = () => {
  // Contexts
  const { l } = useLang();
  const { timeZone, setTimeZone } = useTimeZone();

  // States, Refs
  const userTimezone = moment.tz.guess();
  const TIME_ZONES = moment.tz.names();
  const [search, setSearch] = useState("");
  const fd = [`Auto (${userTimezone})`, ...TIME_ZONES].filter((item) => {
    const itemTerm = item.toLowerCase();
    const searchTerm = search.toLowerCase();

    return itemTerm.includes(searchTerm);
  });

  // Utils
  const iss = useIsSmScreenWidth();

  return (
    <ItemContainer>
      <ItemHeaderContainer borderLess={!!iss}>
        <HStack>
          <Icon maxW={"20px"}>
            <IconTimezone />
          </Icon>
          <Text fontWeight={"bold"}>{l.time_zone_settings_title}</Text>
        </HStack>

        {!iss && (
          <SearchInput
            onChangeSetter={(input) => {
              setSearch(input);
            }}
            inputValue={search}
            inputProps={{
              size: "xs",
            }}
            maxW={"300px"}
          />
        )}
      </ItemHeaderContainer>

      <CContainer>
        {iss && (
          <CContainer px={3} mt={2}>
            <SearchInput
              onChangeSetter={(input) => {
                setSearch(input);
              }}
              inputValue={search}
              inputProps={{
                variant: "flushed",
                borderRadius: 0,
              }}
            />
          </CContainer>
        )}

        <CContainer h={"300px"} overflowY={"auto"}>
          {fd.length === 0 && <FeedbackNotFound />}

          <SimpleGrid px={2} columns={[1, 2, 3, 4]} my={2}>
            {fd.map((item, i) => {
              const active = item === timeZone;

              return (
                <BButton
                  key={i}
                  onClick={() => {
                    setTimeZone(item);
                  }}
                  variant={"ghost"}
                  justifyContent={"start"}
                >
                  <Text fontWeight={"bold"} truncate>
                    {item}
                  </Text>

                  {active && <CheckIndicator />}
                </BButton>
              );
            })}
          </SimpleGrid>
        </CContainer>
      </CContainer>
    </ItemContainer>
  );
};

const PreferenceSettingsPage = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l, lang, setLang } = useLang();
  const { dateFormat, setDateFormat } = useDateFormat();
  const { timeFormat, setTimeFormat } = useTimeFormat();
  const { measurementUnitFormat, setMeasurementUnitFormat } =
    useMeasurementUnitFormat();

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
            <SimpleGrid px={2} columns={[1, 2]}>
              {LANGUAGES.map((item, i) => {
                const active = lang === item.key;

                return (
                  <BButton
                    key={i}
                    unclicky
                    borderRadius={themeConfig.radii.component}
                    gap={1}
                    variant={"ghost"}
                    justifyContent={"start"}
                    onClick={() => {
                      setLang(item.key);
                    }}
                  >
                    <Text fontWeight={"bold"} truncate>
                      {item.label}{" "}
                      <chakra.span
                        color={"fg.subtle"}
                        mx={2}
                        fontWeight={"normal"}
                      >
                        {item.code}
                      </chakra.span>
                    </Text>

                    {active && <CheckIndicator />}
                  </BButton>
                );
              })}
            </SimpleGrid>
          </CContainer>
        </ItemContainer>

        {/* Time Zone */}
        <TimeZone />

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
                    <HStack align={"start"}>
                      <Text fontWeight={"bold"} truncate>
                        {item.label}
                      </Text>

                      {active && <CheckIndicator />}
                    </HStack>

                    <Text color={"fg.subtle"} mt={1} mb={2}>
                      {item.description}
                    </Text>

                    <Text>
                      {formatDate(new Date(), "basic", {
                        prefixDateFormat: item.key as Type__DateFormat,
                      })}
                    </Text>
                    <Text>
                      {formatDate(new Date(), "fullMonth", {
                        prefixDateFormat: item.key as Type__DateFormat,
                      })}
                    </Text>
                    <Text>
                      {formatDate(new Date(), "weekdayFullMonth", {
                        prefixDateFormat: item.key as Type__DateFormat,
                      })}
                    </Text>
                  </CContainer>
                );
              })}
            </SimpleGrid>
          </CContainer>
        </ItemContainer>

        {/* Time Format */}
        <ItemContainer>
          <ItemHeaderContainer>
            <HStack>
              <Icon maxW={"20px"}>
                <IconClock12 />
              </Icon>
              <Text fontWeight={"bold"}>{l.time_format_settings_title}</Text>
            </HStack>
          </ItemHeaderContainer>

          <CContainer gap={4} py={2}>
            <SimpleGrid px={2} columns={[1, 2]}>
              {TIME_FORMATS.map((item, i) => {
                const active = item.key === timeFormat;

                return (
                  <CContainer
                    key={i}
                    px={4}
                    py={3}
                    borderRadius={themeConfig.radii.component}
                    onClick={() => {
                      setTimeFormat(item.key);
                    }}
                    cursor={"pointer"}
                    _hover={{ bg: "gray.subtle" }}
                    _active={{ bg: "gray.subtle" }}
                    transition={"200ms"}
                  >
                    <HStack align={"start"}>
                      <Text fontWeight={"bold"} truncate>
                        {item.label}
                      </Text>

                      {active && <CheckIndicator />}
                    </HStack>

                    <Text>
                      {formatTime(new Date().toISOString(), {
                        prefixTimeFormat: item.key as Type__TimeFormat,
                      })}
                    </Text>
                  </CContainer>
                );
              })}
            </SimpleGrid>
          </CContainer>
        </ItemContainer>

        {/* Measurment Unit Format */}
        <ItemContainer>
          <ItemHeaderContainer>
            <HStack>
              <Icon maxW={"20px"}>
                <IconRulerMeasure />
              </Icon>
              <Text fontWeight={"bold"}>
                {l.measurment_unit_format_settings_title}
              </Text>
            </HStack>
          </ItemHeaderContainer>

          <CContainer gap={4} py={2}>
            <SimpleGrid px={2} columns={[1, 2, 3]}>
              {MEASURMENT_UNIT_FORMATS.map((item, i) => {
                const active = item.key === measurementUnitFormat;

                return (
                  <CContainer
                    key={i}
                    px={4}
                    py={3}
                    borderRadius={themeConfig.radii.component}
                    onClick={() => {
                      setMeasurementUnitFormat(item.key);
                    }}
                    cursor={"pointer"}
                    _hover={{ bg: "gray.subtle" }}
                    _active={{ bg: "gray.subtle" }}
                    transition={"200ms"}
                  >
                    <HStack align={"start"}>
                      <Text fontWeight={"bold"} truncate>
                        {item.label}
                      </Text>

                      {active && <CheckIndicator />}
                    </HStack>

                    <Text color={"fg.subtle"} mt={1}>
                      {pluck(l, item.descriptionKey)}
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
