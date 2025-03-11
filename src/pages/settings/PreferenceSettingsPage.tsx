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
import { TIME_FORMATS } from "@/constant/timeFormats";
import { Type__DateFormat, Type__TimeFormat } from "@/constant/types";
import { UOM_FORMATS } from "@/constant/uomFormats";
import useDateFormat from "@/context/useDateFormat";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import useTimeFormat from "@/context/useTimeFormat";
import useTimeZone from "@/context/useTimeZone";
import useUOM from "@/context/useUOM";
import useScreen from "@/hooks/useScreen";
import autoTimeZone from "@/utils/autoTimeZone";
import formatDate from "@/utils/formatDate";
import formatTime from "@/utils/formatTime";
import { makeTime } from "@/utils/getTime";
import pluck from "@/utils/pluck";
import timeZones from "@/utils/timeZones";
import userTimeZone from "@/utils/userTimeZone";
import { chakra, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import {
  IconCalendar,
  IconClock12,
  IconLanguage,
  IconRulerMeasure,
  IconTimezone,
} from "@tabler/icons-react";
import { useState } from "react";

const Language = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { lang, setLang, l } = useLang();

  return (
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
                px={[3, null, 3]}
                onClick={() => {
                  setLang(item.key);
                }}
              >
                <Text fontWeight={"bold"} truncate>
                  {item.label}{" "}
                  <chakra.span color={"fg.subtle"} mx={2} fontWeight={"normal"}>
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
  );
};

const TimeZone = () => {
  // Contexts
  const { l } = useLang();
  const { timeZone, setTimeZone } = useTimeZone();

  // States, Refs
  const TIME_ZONES = timeZones();
  const [search, setSearch] = useState("");
  const fd = [autoTimeZone(), ...TIME_ZONES].filter((item) => {
    const itemTerm = `${item.key.toLowerCase()} ${item.formattedOffset} ${
      item.localAbbr
    }`;
    const searchTerm = search.toLowerCase();

    return itemTerm.includes(searchTerm);
  });

  // Utils
  const { sw } = useScreen();
  const iss = sw < 1000;

  return (
    <ItemContainer>
      <ItemHeaderContainer borderLess={!!iss} gap={2}>
        <HStack>
          <Icon maxW={"20px"}>
            <IconTimezone />
          </Icon>
          <Text fontWeight={"bold"}>{l.time_zone_settings_title}</Text>
          <Text color={"fg.subtle"}>
            {userTimeZone().localAbbr} ({userTimeZone().key}{" "}
            {userTimeZone().formattedOffset})
          </Text>
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
                pl: "36px",
              }}
              iconProps={{ ml: "-6px" }}
            />
          </CContainer>
        )}

        <CContainer h={"178px"} overflowY={"auto"}>
          {fd.length === 0 && <FeedbackNotFound />}

          <SimpleGrid px={2} columns={[1, 2, null, 3]} my={2}>
            {fd.map((item, i) => {
              const active = item.key === timeZone.key;

              return (
                <BButton
                  key={i}
                  unclicky
                  onClick={() => {
                    setTimeZone(item);
                  }}
                  variant={"ghost"}
                  justifyContent={"start"}
                  px={[3, null, 3]}
                >
                  <Text fontWeight={"bold"} truncate>
                    {item.key}{" "}
                  </Text>

                  <Text color={"fg.subtle"}>{item.formattedOffset}</Text>

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

const DateFormat = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { dateFormat, setDateFormat } = useDateFormat();

  return (
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
                px={[3, null, 3]}
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

                <Text color={"fg.muted"} mb={2}>
                  {item.description}
                </Text>

                {/* Example */}
                <>
                  <Text color={"fg.subtle"}>
                    {formatDate(new Date(), {
                      variant: "basic",
                      prefixDateFormat: item.key as Type__DateFormat,
                    })}
                  </Text>
                  <Text color={"fg.subtle"}>
                    {formatDate(new Date(), {
                      variant: "fullMonth",
                      prefixDateFormat: item.key as Type__DateFormat,
                    })}
                  </Text>
                  <Text color={"fg.subtle"}>
                    {formatDate(new Date(), {
                      variant: "weekdayFullMonth",
                      prefixDateFormat: item.key as Type__DateFormat,
                    })}
                  </Text>
                </>
              </CContainer>
            );
          })}
        </SimpleGrid>
      </CContainer>
    </ItemContainer>
  );
};

const TimeFormat = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { timeFormat, setTimeFormat } = useTimeFormat();

  return (
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
                px={[3, null, 3]}
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
                  {formatTime(makeTime(new Date().toISOString()), {
                    prefixTimeFormat: item.key as Type__TimeFormat,
                  })}
                </Text>
              </CContainer>
            );
          })}
        </SimpleGrid>
      </CContainer>
    </ItemContainer>
  );
};

const UOMFormat = () => {
  // Contexts
  const { themeConfig } = useThemeConfig();
  const { l } = useLang();
  const { UOM, setUOM } = useUOM();

  return (
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
          {UOM_FORMATS.map((item, i) => {
            const active = item.key === UOM;

            return (
              <CContainer
                key={i}
                px={[3, null, 3]}
                py={3}
                borderRadius={themeConfig.radii.component}
                onClick={() => {
                  setUOM(item.key);
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

                <Text color={"fg.muted"} mb={2}>
                  {pluck(l, item.descriptionKey)}
                </Text>

                {/* Example */}
                <HStack wrap={"wrap"}>
                  <Text color={"fg.subtle"}>{item.units.mass}</Text>
                  <Text color={"fg.subtle"}>{item.units.length}</Text>
                  <Text color={"fg.subtle"}>{item.units.height}</Text>
                  <Text color={"fg.subtle"}>{item.units.volume}</Text>
                  <Text color={"fg.subtle"}>{item.units.area}</Text>
                  <Text color={"fg.subtle"}>{item.units.speed}</Text>
                </HStack>
              </CContainer>
            );
          })}
        </SimpleGrid>
      </CContainer>
    </ItemContainer>
  );
};

const PreferenceSettingsPage = () => {
  // Contexts
  const { l } = useLang();

  return (
    <SettingsNavsContainer align={"stretch"} activePath="/settings/language">
      <CContainer gap={4}>
        {/* Language */}
        <Language />

        {/* Time Zone */}
        <TimeZone />

        {/* Date Format */}
        <DateFormat />

        {/* Time Format */}
        <TimeFormat />

        {/* Measurment Unit Format */}
        <UOMFormat />
      </CContainer>

      <HelperText px={2} mt={4}>
        {l.language_region_helper_text}
      </HelperText>
    </SettingsNavsContainer>
  );
};

export default PreferenceSettingsPage;
