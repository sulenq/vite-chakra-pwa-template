import months from "@/constant/months";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";
import {
  Box,
  BoxProps,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Dispatch, useEffect, useRef, useState } from "react";
import BButton from "./BButton";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "./Disclosure";
import DisclosureHeaderContent from "./DisclosureHeaderContent";
import StringInput from "./StringInput";

interface Props extends BoxProps {
  children?: any;
  id?: string;
  name?: string;
  title?: string;
  month?: number;
  setMonth?: Dispatch<number>;
  year?: number;
  setYear?: Dispatch<number>;
  setDate?: Dispatch<Date>;
}

const PeriodPickerDisclosure = ({
  children,
  id,
  name,
  title = `Pilih Periode`,
  month = new Date().getMonth(),
  setMonth,
  year = new Date().getFullYear(),
  setYear,
  setDate,
  ...props
}: Props) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(
    id || `period-picker${name ? `-${name}` : ""}`,
    open,
    onOpen,
    onClose
  );

  const [monthLocal, setMonthLocal] = useState<number>(month);
  const [yearLocal, setYearLocal] = useState<number>(year);

  useEffect(() => {
    setMonthLocal(month);
  }, [month]);
  useEffect(() => {
    setYearLocal(year);
  }, [year]);

  const validYear = (year: number) => {
    return year >= 100 && year <= 270000;
  };

  // Handle year increment decrement w/ hold button
  const intervalIncrementRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const timeoutIncrementRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const intervalDecrementRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const timeoutDecrementRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  function handleMouseDownIncrement() {
    if (timeoutIncrementRef.current || intervalIncrementRef.current) return;

    timeoutIncrementRef.current = setTimeout(() => {
      intervalIncrementRef.current = setInterval(() => {
        setYearLocal((ps) => ps + 1);
      }, 100);
    }, 300);
  }
  function handleMouseUpIncrement() {
    if (timeoutIncrementRef.current) {
      clearTimeout(timeoutIncrementRef.current);
      timeoutIncrementRef.current = null;
    }
    if (intervalIncrementRef.current) {
      clearInterval(intervalIncrementRef.current);
      intervalIncrementRef.current = null;
    }
  }
  function handleMouseDownDecrement() {
    if (timeoutDecrementRef.current || intervalDecrementRef.current) return;

    timeoutDecrementRef.current = setTimeout(() => {
      intervalDecrementRef.current = setInterval(() => {
        if (yearLocal > 0) {
          setYearLocal((ps) => ps - 1);
        }
      }, 100);
    }, 300);
  }
  function handleMouseUpDecrement() {
    if (timeoutDecrementRef.current) {
      clearTimeout(timeoutDecrementRef.current);
      timeoutDecrementRef.current = null;
    }
    if (intervalDecrementRef.current) {
      clearInterval(intervalDecrementRef.current);
      intervalDecrementRef.current = null;
    }
  }

  function onConfirm() {
    if (setMonth) {
      setMonth(monthLocal);
    }
    if (setYear) {
      setYear(yearLocal);
    }
    if (setDate) {
      setDate(new Date(yearLocal, monthLocal));
    }
    back();
  }

  return (
    <>
      <Box w={"full"} onClick={onOpen} {...props}>
        {children}
      </Box>

      <DisclosureRoot open={open} size={"xs"}>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={title} />
          </DisclosureHeader>

          <DisclosureBody>
            <Text fontWeight={"medium"} mb={2}>
              Bulan
            </Text>
            <SimpleGrid columns={[2, 3]} gap={2}>
              {months.map((month, i) => (
                <BButton
                  key={i}
                  flex={"1 1 100px"}
                  borderColor={i === monthLocal ? "ibody" : ""}
                  variant={"outline"}
                  // bg={i === monthLocal ? "var(--p500a5) !important" : ""}
                  onClick={() => {
                    setMonthLocal(i);
                  }}
                >
                  {month}
                </BButton>
              ))}
            </SimpleGrid>

            <Text fontWeight={"medium"} mt={5} mb={2}>
              Tahun
            </Text>
            <HStack>
              <BButton
                variant={"outline"}
                iconButton
                disabled={yearLocal <= 0}
                onClick={() => {
                  if (yearLocal > 0) {
                    setYearLocal(yearLocal - 1);
                  }
                }}
                onMouseDown={() => {
                  handleMouseDownDecrement();
                }}
                onMouseUp={handleMouseUpDecrement}
                onMouseLeave={handleMouseUpDecrement}
                onTouchStart={() => {
                  handleMouseDownDecrement();
                }}
                onTouchEnd={handleMouseUpDecrement}
              >
                <Icon fontSize={"md"}>
                  <IconCaretLeftFilled />
                </Icon>
              </BButton>

              <StringInput
                name="tahun"
                textAlign={"center"}
                placeholder="Tahun"
                onChangeSetter={(inputValue) => {
                  setYearLocal(parseInt(inputValue as string));
                }}
                inputValue={yearLocal ? yearLocal.toString() : ""}
                borderColor={"gray.muted"}
              />

              <BButton
                variant={"outline"}
                iconButton
                disabled={yearLocal <= 0}
                onClick={() => {
                  setYearLocal(yearLocal + 1);
                }}
                onMouseDown={() => {
                  handleMouseDownIncrement();
                }}
                onMouseUp={handleMouseUpIncrement}
                onMouseLeave={handleMouseUpIncrement}
                onTouchStart={() => {
                  handleMouseDownIncrement();
                }}
                onTouchEnd={handleMouseUpIncrement}
              >
                <Icon fontSize={"md"}>
                  <IconCaretRightFilled />
                </Icon>
              </BButton>
            </HStack>
          </DisclosureBody>

          <DisclosureFooter>
            <BButton onClick={onConfirm} disabled={!validYear(yearLocal)}>
              Konfirmasi
            </BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default PeriodPickerDisclosure;
