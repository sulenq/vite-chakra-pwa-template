import { Group, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DatePickerInput from "./DatePickerInput";
import TimePickerInput from "./TimePickerInput";
import { Type__DisclosureSizes } from "@/constant/types";
import makeDateTime from "@/utils/makeDateTime";
import moment from "moment-timezone";
import userTimeZone from "@/utils/userTimeZone";
import autoTimeZone from "@/utils/autoTimeZone";
import { makeTime } from "@/utils/getTime";
import resetDateTime from "@/utils/resetDateTime";
import empty from "@/utils/empty";

interface Props {
  id?: string;
  name?: string;
  onChangeSetter?: (inputValue: string) => void;
  inputValue?: string;
  size?: Type__DisclosureSizes;
}
const DateTimePicker = ({
  id,
  name,
  onChangeSetter,
  inputValue,
  size,
}: Props) => {
  // States, Refs
  const userTz = userTimeZone();
  const autoTz = autoTimeZone();
  const userOffsetInMs = moment.tz(userTz.key).utcOffset() * 60 * 1000;
  const autoOffsetInMs = moment.tz(autoTz.key).utcOffset() * 60 * 1000;
  const initialDate = inputValue
    ? [
        new Date(
          resetDateTime(
            new Date(
              new Date(inputValue).getTime() - autoOffsetInMs + userOffsetInMs
            )
          ).getTime() + autoOffsetInMs
        ).toISOString(),
      ]
    : undefined;
  const initialTime = inputValue
    ? makeTime(
        new Date(
          new Date(inputValue).getTime() - autoOffsetInMs + userOffsetInMs
        )
      )
    : undefined;

  const [date, setDate] = useState<string[] | undefined>(initialDate);
  const [time, setTime] = useState<string | undefined>(initialTime);

  // Handle onchange all
  useEffect(() => {
    if (date && time) {
      onChangeSetter?.(makeDateTime(date[0], time).toISOString());
    }
  }, [time]);

  useEffect(() => {
    if (empty(date)) {
      setTime(undefined);
    }

    if (date && !time) {
      setTime("00:00:00");
    }
  }, [date]);

  return (
    <SimpleGrid columns={2} w={"full"}>
      <Group attached mr={"-1px"}>
        <DatePickerInput
          id={`${id}-date-picker`}
          name={`${name}-date-picker`}
          onConfirm={(input) => {
            setDate(input);
          }}
          inputValue={date}
          size={size}
        />

        <TimePickerInput
          id={`${id}-time-picker`}
          name={`${name}-time-picker`}
          onConfirm={(input) => {
            setTime(input);
          }}
          inputValue={time}
          size={size}
          disabled={!!empty(date)}
        />
      </Group>
    </SimpleGrid>
  );
};

export default DateTimePicker;
