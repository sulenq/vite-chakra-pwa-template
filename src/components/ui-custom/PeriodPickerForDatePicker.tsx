import { Dispatch } from "react";
import BButton from "./BButton";
import PeriodDisclosure from "./PeriodDisclosure";
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
      <PeriodDisclosure month={month} year={year} {...props}>
        <BButton w={"full"} variant={"outline"}>
          {`${formatDate(new Date(year, month), "periode")}`}
        </BButton>
      </PeriodDisclosure>
    </>
  );
};

export default PeriodPickerForDatePicker;
