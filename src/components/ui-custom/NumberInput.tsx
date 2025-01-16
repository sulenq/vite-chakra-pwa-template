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
  integer?: boolean;
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
  noFormat = false,
  integer = false,
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
    let sanitizedInput = rawInput.replace(/[^0-9,]/g, ""); // Hapus karakter non-angka/koma

    // Jika properti integer true, hapus semua koma dari input
    if (integer) {
      sanitizedInput = sanitizedInput.replace(/,/g, ""); // Hapus semua koma
    }

    // Batasi hanya satu koma jika integer = false
    const commaIndex = sanitizedInput.indexOf(",");
    if (
      !integer &&
      commaIndex !== -1 &&
      sanitizedInput.lastIndexOf(",") !== commaIndex
    ) {
      return; // Abaikan input jika lebih dari satu koma
    }

    // Batasi panjang maksimum 19 karakter
    if (sanitizedInput.length > 19) {
      sanitizedInput = sanitizedInput.substring(0, 19);
    }

    // Jika noFormat true, langsung set nilai input tanpa formatting tambahan
    if (noFormat) {
      setLocalInputValue(sanitizedInput);
      if (onChangeSetter) onChangeSetter(parseNumber(sanitizedInput));
      return;
    }

    // Format input dengan pemisah ribuan
    let formattedValue = sanitizedInput.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if (!integer && sanitizedInput.includes(",")) {
      const parts = sanitizedInput.split(",");
      if (parts.length === 2) {
        formattedValue = `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${
          parts[1]
        }`;
      }
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
