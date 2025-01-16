import { Dispatch } from "react";
import BButton from "./BButton";
import PeriodPickerDisclosure from "./PeriodPickerDisclosure";
import formatDate from "@/utils/formatDate";

interface Props {
  id?: string;
  name?: string;
  title?: string;
  month?: number;
  setMonth?: Dispatch<number>;
  year?: number;
  setYear?: Dispatch<number>;
  setDate?: Dispatch<Date>;
}

const PeriodPickerForDatePicker = ({
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  ...props
}: Props) => {
  return (
    <>
      <PeriodPickerDisclosure month={month} year={year} {...props}>
        <BButton w={"full"} variant={"outline"}>
          {`${formatDate(new Date(year, month), "periode")}`}
        </BButton>
      </PeriodPickerDisclosure>
    </>
  );
};

export default PeriodPickerForDatePicker;
