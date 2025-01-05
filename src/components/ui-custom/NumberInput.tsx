import { BoxProps, InputProps } from "@chakra-ui/react";
import StringInput from "./StringInput";
import parseNumber from "@/utils/parseNumber";
import formatNumber from "@/utils/formatNumber";
import { useEffect, useState } from "react";

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
  const [localInputValue, setLocalInputValue] = useState<string>("");

  useEffect(() => {
    if (inputValue !== undefined && inputValue !== null) {
      const formattedValue = noFormat
        ? inputValue.toString()
        : formatValue
        ? formatValue(inputValue)
        : formatNumber(inputValue);

      setLocalInputValue(formattedValue || "");
    }
  }, [inputValue, formatValue, noFormat]);

  function handleChange(rawInput: string | undefined | null) {
    if (!rawInput) {
      setLocalInputValue("");
      if (onChangeSetter) onChangeSetter(null);
      return;
    }

    // Validasi input: hanya angka dan koma
    let sanitizedInput = rawInput.replace(/[^0-9,]/g, "");

    // Batasi hanya satu koma
    const isValid = sanitizedInput.split(",").length <= 2;
    if (!isValid) return; // Abaikan input jika lebih dari satu koma

    // Batasi panjang maksimum 19 karakter
    if (sanitizedInput.length > 19) {
      sanitizedInput = sanitizedInput.substring(0, 19);
    }

    // Format input dengan pemisah ribuan dan koma sebagai pemisah desimal
    let formattedValue = sanitizedInput.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Tambah titik untuk ribuan
    const hasComma = formattedValue.includes(",");
    if (hasComma) {
      // Jika ada koma, pastikan hanya satu
      formattedValue = formattedValue.replace(/(\d+),(\d+)/, "$1,$2");
    }

    setLocalInputValue(formattedValue);

    // Parsing angka hanya jika valid
    const parsedValue = parseNumber(formattedValue);
    if (onChangeSetter) onChangeSetter(parsedValue);
  }

  return (
    <StringInput
      fRef={fRef}
      name={name}
      onChangeSetter={handleChange}
      inputValue={localInputValue}
      invalid={invalid}
      placeholder={placeholder}
      boxProps={boxProps}
      {...props}
    />
  );
};

export default NumberInput;
