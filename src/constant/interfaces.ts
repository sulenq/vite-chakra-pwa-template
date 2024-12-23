import { ButtonProps } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

export type LanguageOptions = "id" | "en";

export interface Interface__Nav {
  label: {
    [lang in LanguageOptions]: string;
  };
  link: string;
}

// Select
export interface Interface__SelectOption {
  value: any;
  label: any;
  label2?: any;
  original_data?: any;
}
export type Type__DisclosureSizes = "xs" | "sm" | "md" | "lg" | "xl";
export interface Interface__Select extends ButtonProps {
  id?: string;
  name: string;
  title?: string;
  onConfirm?: (inputValue: Interface__SelectOption[] | undefined) => void;
  inputValue?: Interface__SelectOption[] | undefined;
  initialOptions?: Interface__SelectOption[] | undefined | null;
  placeholder?: string;
  invalid?: boolean;
  nonNullable?: boolean;
  multiple?: boolean;
  disclosureSize?: Type__DisclosureSizes;
  fetch?: (
    setOptions: Dispatch<
      SetStateAction<Interface__SelectOption[] | null | undefined>
    >
  ) => void;
  // withSearch?: boolean;
  // optionsDisplay?: "list" | "chip";
}

// Date Picker
export type Type__PrefixDateFormat =
  | "basic"
  | "basicShort"
  | "long"
  | "longShort"
  | "dmy"
  | "ymd"
  | "periode"
  | "iso";
export type Type__DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};
export interface Interface__DatePicker extends ButtonProps {
  id?: string;
  name: string;
  title?: string;
  onConfirm?: (inputValue: Date | undefined) => void;
  inputValue?: Date | undefined;
  dateFormatOptions?: Type__PrefixDateFormat | object;
  placeholder?: string;
  nonNullable?: boolean;
  invalid?: boolean;
  disclosureSize?: Type__DisclosureSizes;
}

// Time Picker
export type Type__TimeRange = {
  from: string | undefined;
  to: string | undefined;
};
