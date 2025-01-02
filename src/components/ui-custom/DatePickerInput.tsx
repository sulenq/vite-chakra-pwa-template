import days from "@/constant/days";
import { Interface__DatePicker } from "@/constant/interfaces";
import { drawerbodyMaxH, mainButtonSize } from "@/constant/sizes";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";
import formatDate from "@/utils/formatDate";
import {
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useDisclosure,
  useFieldContext,
} from "@chakra-ui/react";
import { CalendarDot, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { addDays, startOfWeek } from "date-fns";
import { useState } from "react";
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

const DatePickerInput = ({
  id,
  name,
  title = "Pilih Tanggal",
  onConfirm,
  inputValue,
  dateFormatOptions = "basicShort",
  placeholder = "Pilih tanggal",
  nonNullable,
  invalid,
  size = "xs",
  ...props
}: Interface__DatePicker) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(
    id || `date-picker${name ? `-${name}` : ""}`,
    open,
    onOpen,
    onClose
  );
  const fc = useFieldContext();

  const [date, setDate] = useState<Date>(inputValue || new Date());
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

  function setSelectedToToday() {
    const today = new Date();
    setDate(today);
    setSelected(today);
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  }
  function setSelectedToTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setDate(tomorrow);
    setSelected(tomorrow);
    setMonth(tomorrow.getMonth());
    setYear(tomorrow.getFullYear());
  }

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

  const renderValue = formatDate(inputValue, dateFormatOptions);
  const selectedRenderValue = formatDate(selected);

  return (
    <>
      <Tooltip content={inputValue ? formatDate(inputValue) : placeholder}>
        <BButton
          w={"full"}
          unclicky
          variant={"ghost"}
          border={"1px solid"}
          borderColor={fc?.invalid || invalid ? "border.error" : "gray.muted"}
          onClick={() => {
            if (inputValue) {
              setSelected(inputValue);
            }
            onOpen();
          }}
          {...props}
        >
          <HStack w={"full"} justify={"space-between"}>
            {inputValue ? (
              <Text fontWeight={"normal"} truncate>
                {renderValue}
              </Text>
            ) : (
              <Text opacity={0.3} fontWeight={"normal"} truncate>
                {placeholder}
              </Text>
            )}

            <Icon fontSize={"md"} opacity={0.3}>
              <CalendarDot />
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
            className="scrollY"
            pt={0}
            overflowY={"auto"}
            maxH={drawerbodyMaxH}
          >
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
                      selected?.getDate() === date.fullDate.getDate() &&
                      selected?.getMonth() === date.month &&
                      selected?.getFullYear() === date.year;
                    const dateToday =
                      date.date === today.getDate() &&
                      date.month === today.getMonth() &&
                      date.year === today.getFullYear();

                    return (
                      <BButton
                        key={ii}
                        borderRadius={"full"}
                        onClick={() => {
                          setSelected(date.fullDate);
                        }}
                        borderColor={dateSelected ? "ibody" : ""}
                        variant={dateSelected ? "surface" : "ghost"}
                        aspectRatio={1}
                      >
                        <Text
                          opacity={
                            date.month !== month && !dateSelected ? 0.3 : 1
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

            {/* Preset Buttons */}
            <HStack mt={2}>
              <BButton
                flex={"1 1 120px"}
                variant={"outline"}
                onClick={setSelectedToToday}
              >
                Hari ini
              </BButton>
              <BButton
                flex={"1 1 120px"}
                variant={"outline"}
                onClick={setSelectedToTomorrow}
              >
                Besok
              </BButton>
            </HStack>

            <CContainer
              // border={"1px solid"}
              borderColor={"gray.muted"}
              bg={"bg.muted"}
              p={3}
              borderRadius={6}
              mt={2}
            >
              <Text textAlign={"center"} fontWeight={"semibold"}>
                {selectedRenderValue || "Pilih tanggal"}
              </Text>
            </CContainer>
          </DisclosureBody>

          <DisclosureFooter>
            <BButton
              variant={"subtle"}
              onClick={() => {
                setSelected(undefined);
              }}
              size={mainButtonSize}
            >
              Clear
            </BButton>
            <BButton
              onClick={confirmSelected}
              disabled={nonNullable && !selected}
              size={mainButtonSize}
            >
              Konfirmasi
            </BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default DatePickerInput;
