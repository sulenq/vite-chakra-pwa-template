import { Interface__TimePicker } from "@/constant/interfaces";
import { drawerbodyMaxH, mainButtonSize } from "@/constant/sizes";
import useBackOnClose from "@/hooks/useBackOnClose";
import useScreen from "@/hooks/useScreen";
import back from "@/utils/back";
import formatTime from "@/utils/formatTime";
import { getHours, getMinutes, getSeconds } from "@/utils/getTime";
import {
  HStack,
  Icon,
  Text,
  useDisclosure,
  useFieldContext,
  VStack,
} from "@chakra-ui/react";
import { CaretDown, CaretUp, Clock } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "../ui/tooltip";
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

const TimePickerInput = ({
  id,
  name,
  title = "Pilih Waktu",
  onConfirm,
  inputValue,
  withSeconds = false,
  placeholder = "Pilih waktu",
  nonNullable,
  invalid,
  size = withSeconds ? "sm" : "xs",
  ...props
}: Interface__TimePicker) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(
    id || `time-picker${name ? `-${name}` : ""}`,
    open,
    onOpen,
    onClose
  );
  const { sw } = useScreen();
  const fc = useFieldContext();
  const overflow = sw < 450 && withSeconds;

  const defaultTime = "00:00:00";
  const [selected, setSelected] = useState<string | undefined>(
    inputValue ? inputValue : defaultTime
  );
  const [hours, setHours] = useState<number>(getHours(inputValue));
  const [minutes, setMinutes] = useState<number>(getMinutes(inputValue));
  const [seconds, setSeconds] = useState<number>(getSeconds(inputValue));
  useEffect(() => {
    if (inputValue) {
      setHours(getHours(inputValue));
      setMinutes(getMinutes(inputValue));
      setSeconds(getSeconds(inputValue));
    }
  }, [inputValue]);

  useEffect(() => {
    const fHours = String(hours).padStart(2, "0");
    const fMinutes = String(minutes).padStart(2, "0");
    const fSeconds = String(seconds).padStart(2, "0");
    setSelected(`${fHours}:${fMinutes}:${fSeconds}`);
  }, [hours, minutes, seconds]);

  // console.log(inputValue, time, hours, minutes, seconds);

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

  function handleMouseDownIncrement(type: string) {
    if (timeoutIncrementRef.current || intervalIncrementRef.current) return;

    timeoutIncrementRef.current = setTimeout(() => {
      intervalIncrementRef.current = setInterval(() => {
        if (type === "hours") {
          setHours((ps) => (ps < 23 ? ps + 1 : 0));
        } else if (type === "minutes") {
          setMinutes((ps) => (ps < 59 ? ps + 1 : 0));
        } else if (type === "seconds") {
          setSeconds((ps) => (ps < 59 ? ps + 1 : 0));
        }
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
  function handleMouseDownDecrement(type: string) {
    if (timeoutDecrementRef.current || intervalDecrementRef.current) return;

    timeoutDecrementRef.current = setTimeout(() => {
      intervalDecrementRef.current = setInterval(() => {
        if (type === "hours") {
          setHours((ps) => (ps > 0 ? ps - 1 : 23));
        } else if (type === "minutes") {
          setMinutes((ps) => (ps > 0 ? ps - 1 : 59));
        } else if (type === "seconds") {
          setSeconds((ps) => (ps > 0 ? ps - 1 : 59));
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

  const renderValue = formatTime(inputValue);

  return (
    <>
      <Tooltip content={inputValue ? renderValue : placeholder}>
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
              <Text truncate>
                {withSeconds ? inputValue : formatTime(inputValue)}
              </Text>
            ) : (
              <Text //@ts-ignore
                color={props?._placeholder?.color || "#96969691"}
              >
                {placeholder}
              </Text>
            )}

            <Icon fontSize={"md"} opacity={0.3}>
              <Clock />
            </Icon>
          </HStack>
        </BButton>
      </Tooltip>

      <DisclosureRoot open={open} size={size}>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={title} />
          </DisclosureHeader>

          <DisclosureBody pt={0} overflowY={"auto"} maxH={drawerbodyMaxH}>
            <HStack
              justify={"space-between"}
              gap={1}
              wrap={overflow ? "wrap" : ""}
              gapY={overflow ? 4 : 0}
            >
              <VStack flex={"1 1 120"} align={"stretch"} gap={0}>
                <BButton
                  iconButton
                  aria-label="add hour button"
                  variant={"outline"}
                  onClick={() => {
                    setHours((ps) => (ps < 23 ? ps + 1 : 0));
                    if (!selected) {
                      setSelected(defaultTime);
                    }
                  }}
                  onMouseDown={() => {
                    handleMouseDownIncrement("hours");
                  }}
                  onMouseUp={handleMouseUpIncrement}
                  onMouseLeave={handleMouseUpIncrement}
                  onTouchStart={() => {
                    handleMouseDownIncrement("hours");
                  }}
                  onTouchEnd={handleMouseUpIncrement}
                >
                  <Icon fontSize={"md"}>
                    <CaretUp />
                  </Icon>
                </BButton>

                <VStack my={4}>
                  <StringInput
                    name="jam"
                    onChangeSetter={(input) => {
                      if (parseInt(input as string) < 24) {
                        setHours(parseInt(input as string));
                      }
                    }}
                    inputValue={
                      selected ? String(hours).padStart(2, "0") : "--"
                    }
                    fontSize={"64px !important"}
                    fontWeight={600}
                    h={"64px"}
                    textAlign={"center"}
                    border={"none !important"}
                    _focus={{ border: "none !important" }}
                  />
                  <Text textAlign={"center"}>Jam</Text>
                </VStack>

                <BButton
                  iconButton
                  aria-label="reduce hour button"
                  variant={"outline"}
                  onClick={() => {
                    setHours((ps) => (ps > 0 ? ps - 1 : 23));
                    if (!selected) {
                      setSelected(defaultTime);
                    }
                  }}
                  onMouseDown={() => {
                    handleMouseDownDecrement("hours");
                  }}
                  onMouseUp={handleMouseUpDecrement}
                  onMouseLeave={handleMouseUpDecrement}
                  onTouchStart={() => {
                    handleMouseDownDecrement("hours");
                  }}
                  onTouchEnd={handleMouseUpDecrement}
                >
                  <Icon fontSize={"md"}>
                    <CaretDown />
                  </Icon>
                </BButton>
              </VStack>

              {!overflow && (
                <Text fontSize={50} opacity={0.2} mt={-9}>
                  :
                </Text>
              )}

              <VStack flex={"1 1 120"} align={"stretch"} gap={0}>
                <BButton
                  iconButton
                  aria-label="add hour button"
                  variant={"outline"}
                  onClick={() => {
                    setMinutes((ps) => (ps < 59 ? ps + 1 : 0));
                    if (!selected) {
                      setSelected(defaultTime);
                    }
                  }}
                  onMouseDown={() => {
                    handleMouseDownIncrement("minutes");
                  }}
                  onMouseUp={handleMouseUpIncrement}
                  onMouseLeave={handleMouseUpIncrement}
                  onTouchStart={() => {
                    handleMouseDownIncrement("minutes");
                  }}
                  onTouchEnd={handleMouseUpIncrement}
                >
                  <Icon fontSize={"md"}>
                    <CaretUp />
                  </Icon>
                </BButton>

                <VStack my={4}>
                  <StringInput
                    name="jam"
                    onChangeSetter={(input) => {
                      if (parseInt(input as string) < 60) {
                        setMinutes(parseInt(input as string));
                      }
                    }}
                    inputValue={
                      selected ? String(minutes).padStart(2, "0") : "--"
                    }
                    fontSize={"64px !important"}
                    fontWeight={600}
                    h={"64px"}
                    textAlign={"center"}
                    border={"none !important"}
                    _focus={{ border: "none !important" }}
                  />
                  <Text textAlign={"center"}>Menit</Text>
                </VStack>

                <BButton
                  iconButton
                  aria-label="reduce hour button"
                  variant={"outline"}
                  onClick={() => {
                    setMinutes((ps) => (ps > 0 ? ps - 1 : 59));
                    if (!selected) {
                      setSelected(defaultTime);
                    }
                  }}
                  onMouseDown={() => {
                    handleMouseDownDecrement("minutes");
                  }}
                  onMouseUp={handleMouseUpDecrement}
                  onMouseLeave={handleMouseUpDecrement}
                  onTouchStart={() => {
                    handleMouseDownDecrement("minutes");
                  }}
                  onTouchEnd={handleMouseUpDecrement}
                >
                  <Icon fontSize={"md"}>
                    <CaretDown />
                  </Icon>
                </BButton>
              </VStack>

              {withSeconds && (
                <>
                  {!overflow && (
                    <Text fontSize={50} opacity={0.2} mt={-9}>
                      :
                    </Text>
                  )}

                  <VStack flex={"1 1 120"} align={"stretch"} gap={0}>
                    <BButton
                      iconButton
                      aria-label="add hour button"
                      variant={"outline"}
                      onClick={() => {
                        setSeconds((ps) => (ps < 59 ? ps + 1 : 0));
                        if (!selected) {
                          setSelected(defaultTime);
                        }
                      }}
                      onMouseDown={() => {
                        handleMouseDownIncrement("seconds");
                      }}
                      onMouseUp={handleMouseUpIncrement}
                      onMouseLeave={handleMouseUpIncrement}
                      onTouchStart={() => {
                        handleMouseDownIncrement("seconds");
                      }}
                      onTouchEnd={handleMouseUpIncrement}
                    >
                      <Icon fontSize={"md"}>
                        <CaretUp />
                      </Icon>
                    </BButton>

                    <VStack my={4}>
                      <StringInput
                        name="jam"
                        onChangeSetter={(input) => {
                          if (parseInt(input as string) < 60) {
                            setSeconds(parseInt(input as string));
                          }
                        }}
                        inputValue={
                          selected ? String(seconds).padStart(2, "0") : "--"
                        }
                        fontSize={"64px !important"}
                        fontWeight={600}
                        h={"64px"}
                        textAlign={"center"}
                        border={"none !important"}
                        _focus={{ border: "none !important" }}
                      />
                      <Text textAlign={"center"}>Detik</Text>
                    </VStack>

                    <BButton
                      iconButton
                      aria-label="reduce hour button"
                      variant={"outline"}
                      onClick={() => {
                        setSeconds((ps) => (ps > 0 ? ps - 1 : 59));
                        if (!selected) {
                          setSelected(defaultTime);
                        }
                      }}
                      onMouseDown={() => {
                        handleMouseDownDecrement("seconds");
                      }}
                      onMouseUp={handleMouseUpDecrement}
                      onMouseLeave={handleMouseUpDecrement}
                      onTouchStart={() => {
                        handleMouseDownDecrement("seconds");
                      }}
                      onTouchEnd={handleMouseUpDecrement}
                    >
                      <Icon fontSize={"md"}>
                        <CaretDown />
                      </Icon>
                    </BButton>
                  </VStack>
                </>
              )}
            </HStack>
          </DisclosureBody>

          <DisclosureFooter>
            <BButton
              variant={"subtle"}
              onClick={() => {
                if (selected && hours === 0 && minutes === 0 && seconds === 0) {
                  setSelected(undefined);
                  setHours(0);
                  setMinutes(0);
                  setSeconds(0);
                } else {
                  setSelected(defaultTime);
                  setHours(0);
                  setMinutes(0);
                  setSeconds(0);
                }
              }}
              size={mainButtonSize}
            >
              {selected && hours === 0 && minutes === 0 && seconds === 0
                ? "Clear"
                : "Reset"}
            </BButton>
            <BButton
              onClick={confirmSelected}
              disabled={nonNullable ? (selected ? false : true) : false}
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

export default TimePickerInput;
