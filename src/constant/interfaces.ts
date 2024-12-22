import { ButtonProps } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

export type LanguageOptions = "id" | "en";

export interface Interface__Nav {
  label: {
    [lang in LanguageOptions]: string;
  };
  link: string;
}

export interface Interface__SelectOption {
  value: any;
  label: any;
  label2?: any;
  original_data?: any;
}

// Select
interface KeyProps {
  value: string;
  label: string;
  label2?: string;
  original_data: any;
}
type PropsWithUrlAndKeys = {
  url: string;
  keys: KeyProps;
};
type PropsWithoutUrlAndKeys = {
  url?: never;
  keys?: never;
};
export type Type__DisclosureSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type Interface__Select = ButtonProps & {
  id: string;
  onConfirm?: (inputValue: Interface__SelectOption[] | undefined) => void;
  inputValue?: Interface__SelectOption[] | undefined;
  initialOptions?: Interface__SelectOption[] | undefined | null;
  // url?: string;
  // keys?: KeyProps;
  name?: string;
  title?: string;
  placeholder?: string;
  isError?: boolean;
  // withSearch?: boolean;
  // optionsDisplay?: "list" | "chip";
  nonNullable?: boolean;
  multiple?: boolean;
  disclosureSize?: Type__DisclosureSizes;
  fetch?: (
    setOptions: Dispatch<
      SetStateAction<Interface__SelectOption[] | null | undefined>
    >
  ) => void;
} & (PropsWithUrlAndKeys | PropsWithoutUrlAndKeys);

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

export type Type__TimeRange = {
  from: string | undefined;
  to: string | undefined;
};
