import { BoxProps, InputProps } from "@chakra-ui/react";
import StringInput from "./StringInput";
import parseNumber from "@/utils/parseNumber";
import formatNumber from "@/utils/formatNumber";

interface Props extends InputProps {
  fRef?: any;
  name?: string;
  onChangeSetter?: (inputValue: number | undefined | null) => void;
  inputValue?: number | undefined | null;
  invalid?: boolean;
  placeholder?: string;
  boxProps?: BoxProps;
  formatValue?: (value: number | undefined | null) => string;
  noFormat?: boolean;
}

const NumberInput = ({
  fRef,
  name,
  onChangeSetter,
  inputValue,
  invalid,
  placeholder = "",
  boxProps,
  formatValue,
  noFormat,
  ...props
}: Props) => {
  const formattedInputValue = formatValue
    ? formatValue(inputValue)
    : noFormat
    ? inputValue?.toString()
    : formatNumber(inputValue);

  // Utils
  const handleChange = (inputValue: string | undefined | null) => {
    if (onChangeSetter) {
      onChangeSetter(parseNumber(inputValue as string));
    }
  };

  return (
    <StringInput
      fRef={fRef}
      name={name}
      onChangeSetter={handleChange}
      inputValue={formattedInputValue}
      invalid={invalid}
      placeholder={placeholder}
      boxProps={boxProps}
      {...props}
    />
  );
};

export default NumberInput;
