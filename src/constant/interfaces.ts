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
  id: string;
  onConfirm?: (inputValue: Interface__SelectOption[] | undefined) => void;
  inputValue?: Interface__SelectOption[] | undefined;
  initialOptions?: Interface__SelectOption[] | undefined | null;
  name?: string;
  title?: string;
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

// Time Picker
export type Type__TimeRange = {
  from: string | undefined;
  to: string | undefined;
};
