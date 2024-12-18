import days from "@/constant/days";
import {
  Type__DateRange,
  Type__DisclosureSizes,
  Type__PrefixDateFormat,
} from "@/constant/interfaces";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";
import countDay from "@/utils/countDay";
import dateInRange from "@/utils/dateInRange";
import formatDate from "@/utils/formatDate";
import {
  Box,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarDots, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { addDays, startOfWeek } from "date-fns";
import { useState } from "react";
import { Alert } from "../ui/alert";
import { ButtonProps } from "../ui/button";
import { toaster } from "../ui/toaster";
import { Tooltip } from "../ui/tooltip";
import BButton from "./BButton";
import CContainer from "./CContainer";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "./Disclosure";
import DisclosureHeaderContent from "./DisclosureHeaderContent";
import PeriodPickerForDatePicker from "./PeriodPickerForDatePicker";

type Type__DateRangePresets =
  | "thisWeek"
  | "nextWeek"
  | "thisMonth"
  | "nextMonth";
interface Props extends ButtonProps {
  id?: string;
  onConfirm?: (inputValue: Type__DateRange) => void;
  inputValue?: Type__DateRange;
  name?: string;
  title?: string;
  dateFormatOptions?: Type__PrefixDateFormat | object;
  placeholder?: string;
  nonNullable?: boolean;
  isError?: boolean;
  disclosureSize?: Type__DisclosureSizes;
  preset?: Type__DateRangePresets[];
  maxRange?: number;
}

const DateRangePickerInput = ({
  id,
  name,
  title = "Pilih Rentang Tanggal",
  onConfirm,
  inputValue,
  dateFormatOptions = "basicShort",
  placeholder = "Pilih rentang tanggal",
  nonNullable,
  isError,
  size = "xs",
  preset = ["thisWeek", "thisMonth"],
  maxRange,
  ...props
}: Props) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(
    id || `date-range-picker${name ? `-${name}` : ""}`,
    open,
    onOpen,
    onClose
  );

  const [date, setDate] = useState<Date>(
    inputValue?.from || inputValue?.to || new Date()
  );
  const [month, setMonth] = useState<number>(date.getMonth());
  const [year, setYear] = useState<number>(date.getFullYear());

  const [selected, setSelected] = useState<any>(inputValue);

  function confirmSelected() {
    let confirmable = false;
    if (!nonNullable) {
      confirmable = true;
    } else {
      if (selected) {
        confirmable = true;
      }
    }

    if (confirmable) {
      if (onConfirm) {
        onConfirm(selected);
      }
      back();
    }
  }

  function setSelectedToThisWeek() {
    const today = new Date();

    // Get the current day of the week (0 - Sunday, 6 - Saturday)
    const dayOfWeek = today.getDay();

    // Calculate the date of the start of the week (Monday)
    const startOfWeek = new Date(today);
    const dayDiffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // if today is Sunday, set the difference to 6, else subtract 1
    startOfWeek.setDate(today.getDate() - dayDiffToMonday);

    // Calculate the date of the end of the week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // 6 days after Monday is Sunday

    // Set the state with the calculated dates
    setDate(today);
    setSelected({ from: startOfWeek, to: endOfWeek });
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  }
  function setSelectedToNextWeek() {
    const today = new Date();

    // Get the current day of the week (0 - Sunday, 6 - Saturday)
    const dayOfWeek = today.getDay();

    // Calculate the date of the start of the next week (Monday)
    const startOfNextWeek = new Date(today);
    const dayDiffToNextMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // if today is Sunday, set the difference to 1, else calculate to next Monday
    startOfNextWeek.setDate(today.getDate() + dayDiffToNextMonday);

    // Calculate the date of the end of the next week (Sunday)
    const endOfNextWeek = new Date(startOfNextWeek);
    endOfNextWeek.setDate(startOfNextWeek.getDate() + 6); // 6 days after Monday is Sunday

    // Set the state with the calculated dates
    setDate(today);
    setSelected({ from: startOfNextWeek, to: endOfNextWeek });
    setMonth(startOfNextWeek.getMonth());
    setYear(startOfNextWeek.getFullYear());
  }
  function setSelectedToThisMonth() {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    setDate(today);
    setSelected({ from: startOfMonth, to: endOfMonth });
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  }
  function setSelectedToNextMonth() {
    const today = new Date();

    // Calculate the date of the start of the next month
    const startOfNextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      1
    );

    // Calculate the date of the end of the next month
    const endOfNextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 2,
      0
    );

    // Set the state with the calculated dates
    setDate(today);
    setSelected({ from: startOfNextMonth, to: endOfNextMonth });
    setMonth(startOfNextMonth.getMonth());
    setYear(startOfNextMonth.getFullYear());
  }
  const renderPresets = {
    thisMonth: (
      <BButton
        w={"100%"}
        variant={"outline"}
        onClick={setSelectedToThisMonth}
        disabled={!!(maxRange && maxRange < 31)}
      >
        Bulan Ini
      </BButton>
    ),
    nextMonth: (
      <BButton
        w={"100%"}
        variant={"outline"}
        onClick={setSelectedToNextMonth}
        disabled={!!(maxRange && maxRange < 31)}
      >
        Bulan Depan
      </BButton>
    ),
    thisWeek: (
      <BButton
        w={"100%"}
        variant={"outline"}
        onClick={setSelectedToThisWeek}
        disabled={!!(maxRange && maxRange < 7)}
      >
        Minggu Ini
      </BButton>
    ),
    nextWeek: (
      <BButton
        w={"100%"}
        variant={"outline"}
        onClick={setSelectedToNextWeek}
        disabled={!!(maxRange && maxRange < 7)}
      >
        Minggu Depan
      </BButton>
    ),
  };

  function nextMonth() {
    const currentMonth = date.getMonth();
    const currentyear = date.getFullYear();

    const nextMonth = new Date(
      month === 12 ? currentyear + 1 : year,
      month === 12 ? 0 : currentMonth + 1
    );
    setDate(nextMonth);
    setMonth(nextMonth.getMonth());
    setYear(nextMonth.getFullYear());
  }
  function prevMonth() {
    const currentMonth = date.getMonth();
    const currentyear = date.getFullYear();

    const prevMonth = new Date(
      month === 1 ? currentyear - 1 : year,
      month === 1 ? 11 : currentMonth - 1
    );
    setDate(prevMonth);
    setMonth(prevMonth.getMonth());
    setYear(prevMonth.getFullYear());
  }

  const fullDates = () => {
    const firstDayOfMonth = new Date(year, month, 1);

    const startOfFirstWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }); // 0 = Sunday

    let weekDates = [];
    let currentWeek = [];

    for (let i = 0; i < 6; i++) {
      currentWeek = [];

      for (let j = 0; j < 7; j++) {
        const fullDate = addDays(startOfFirstWeek, i * 7 + j);
        currentWeek.push({
          fullDate: fullDate,
          date: fullDate.getDate(),
          month: fullDate.getMonth(),
          year: fullDate.getFullYear(),
        });
      }

      weekDates.push(currentWeek);
    }

    return weekDates;
  };

  const dateRangeValue = `${formatDate(
    inputValue?.from,
    dateFormatOptions
  )} - ${formatDate(inputValue?.to, dateFormatOptions)}`;

  return (
    <>
      <Tooltip content={inputValue ? dateRangeValue : placeholder}>
        <BButton
          unclicky
          variant={"ghost"}
          border={"1px solid"}
          borderColor={isError ? "border.error" : "d3"}
          onClick={() => {
            if (inputValue) {
              setSelected(inputValue);
            }
            onOpen();
          }}
          {...props}
        >
          <HStack w={"100%"}>
            {inputValue ? (
              <Text fontWeight={"normal"} truncate>
                {inputValue ? dateRangeValue : placeholder}
              </Text>
            ) : (
              <Text opacity={0.3} fontWeight={"normal"} truncate>
                {placeholder}
              </Text>
            )}

            <Icon ml={"auto"} fontSize={"md"} opacity={0.3}>
              <CalendarDots />
            </Icon>
          </HStack>
        </BButton>
      </Tooltip>

      <DisclosureRoot open={open} size={size}>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={title} />
          </DisclosureHeader>

          <DisclosureBody
            pt={0}
            overflowY={"auto"}
            maxH={"calc(100dvh - 180px)"}
          >
            {maxRange && (
              <Alert
                variant={"surface"}
                status="warning"
                title={`Maksimal rentang tanggal ${maxRange} hari`}
                mb={4}
              />
            )}

            {/* Period picker */}
            <HStack mb={5}>
              <BButton iconButton variant={"outline"} onClick={prevMonth}>
                <Icon fontSize={"1rem"}>
                  <CaretLeft />
                </Icon>
              </BButton>

              <PeriodPickerForDatePicker
                month={month}
                setMonth={setMonth}
                year={year}
                setYear={setYear}
              />

              <BButton iconButton variant={"outline"} onClick={nextMonth}>
                <Icon fontSize={"1rem"}>
                  <CaretRight />
                </Icon>
              </BButton>
            </HStack>

            {/* Date picker */}
            <SimpleGrid
              columns={[7]}
              gap={2}
              borderBottom={"1px solid"}
              borderColor={"var(--divider3)"}
              pb={2}
              mb={2}
            >
              {days.map((day, i) => (
                <Text key={i} fontWeight={"semibold"} textAlign={"center"}>
                  {day.substring(0, 3)}
                </Text>
              ))}
            </SimpleGrid>
            <CContainer gap={2}>
              {fullDates().map((weeks, i) => (
                <SimpleGrid columns={[7]} key={i} gap={2}>
                  {weeks.map((date, ii) => {
                    const today = new Date();
                    const dateSelected =
                      (selected?.from?.getDate() === date.fullDate.getDate() &&
                        selected?.from?.getMonth() === date.month &&
                        selected?.from?.getFullYear() === date.year) ||
                      (selected?.to?.getDate() === date.fullDate.getDate() &&
                        selected?.to?.getMonth() === date.month &&
                        selected?.to?.getFullYear() === date.year);

                    const dateToday =
                      date.date === today.getDate() &&
                      date.month === today.getMonth() &&
                      date.year === today.getFullYear();

                    return (
                      <BButton
                        key={ii}
                        borderRadius={"full"}
                        variant={"ghost"}
                        onClick={() => {
                          if (
                            (!selected?.from && !selected?.to) ||
                            (selected?.from && selected?.to) ||
                            selected === undefined
                          ) {
                            setSelected({
                              from: date.fullDate,
                              to: undefined,
                            });
                          }

                          if (selected?.from && selected?.to === undefined) {
                            const isWithinRange = maxRange
                              ? countDay(date.fullDate, selected?.from || 0) <=
                                maxRange
                              : true;

                            // Fungsi untuk menangani pemanggilan toaster error
                            const showError = () => {
                              toaster.create({
                                type: "error",
                                title: `Tidak boleh melebihi maksimal rentang ${maxRange} hari `,
                                description: "",
                                action: {
                                  label: "Close",
                                  onClick: () => {},
                                },
                              });
                            };

                            if (isWithinRange) {
                              if (date.fullDate < selected?.from) {
                                setSelected((ps: Type__DateRange) => ({
                                  from: date.fullDate,
                                  to: ps.from,
                                }));
                              } else {
                                setSelected((ps: Type__DateRange) => ({
                                  from: ps.from,
                                  to: date.fullDate,
                                }));
                              }
                            } else {
                              showError();
                            }
                          }
                        }}
                        bg={dateInRange(date.fullDate, selected) ? "d2" : ""}
                        borderColor={dateSelected ? "ibody" : ""}
                        aspectRatio={1}
                      >
                        <Text
                          opacity={
                            date.month === month ||
                            dateInRange(date.fullDate, selected, true, true) ||
                            dateSelected
                              ? 1
                              : 0.3
                          }
                          fontWeight={dateToday ? "bold" : ""}
                        >
                          {date.date}
                        </Text>
                      </BButton>
                    );
                  })}
                </SimpleGrid>
              ))}
            </CContainer>

            <HStack mt={2}>
              {preset?.map((item, i) => (
                <Box w={"50%"} key={i}>
                  {renderPresets[item]}
                </Box>
              ))}
            </HStack>
          </DisclosureBody>

          <DisclosureFooter>
            <BButton
              variant={"subtle"}
              onClick={() => {
                setSelected(undefined);
              }}
            >
              Clear
            </BButton>
            <BButton
              onClick={confirmSelected}
              disabled={
                (nonNullable && !(selected?.from && selected?.to)) ||
                (!nonNullable && selected?.from && !selected?.to)
              }
            >
              Konfirmasi
            </BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default DateRangePickerInput;
