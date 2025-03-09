import { ButtonProps, MenuItemProps } from "@chakra-ui/react";

export type LanguageOptions = "id" | "en";

export type Type__DisclosureSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type Type__DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

export type Type__DateRangePresets =
  | "thisWeek"
  | "nextWeek"
  | "thisMonth"
  | "nextMonth";

export type Type__TimeRange = {
  from: string | undefined;
  to: string | undefined;
};

export type Type__TableOptions = (
  | {
      label: string;
      icon?: any;
      callback?: (dataParams: any) => void;
      confirmation?: (dataParams: any) => {
        id: string;
        title: string;
        description: string;
        confirmLabel: string;
        confirmCallback: () => void;
        confirmButtonProps?: ButtonProps;
      };
      subMenu?: any; // unused yet
      menuItemProps?: MenuItemProps;
      disabled?: (rowData: any) => boolean | boolean;
    }
  | "divider"
)[];

export type Type__DateVariant =
  | "basic"
  | "shortMonth"
  | "fullMonth"
  | "monthYear"
  | "shortMonthDay"
  | "fullMonthDay"
  | "weekdayBasic"
  | "weekdayShortMonth"
  | "weekdayFullMonth";
