import { ButtonProps } from "@/components/ui/button";
import {
  BoxProps,
  MenuItemProps,
  StackProps,
  TableCellProps,
  TableColumnHeaderProps,
  TableRowProps,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export type LanguageOptions = "id" | "en";

export interface Interface__Nav {
  label: {
    [lang in LanguageOptions]: string;
  };
  link: string;
  icon?: any;
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
  name?: string;
  title?: string;
  onConfirm?: (inputValue: Date | undefined) => void;
  inputValue?: Date | undefined;
  dateFormatOptions?: Type__PrefixDateFormat | object;
  placeholder?: string;
  nonNullable?: boolean;
  invalid?: boolean;
  disclosureSize?: Type__DisclosureSizes;
}

// Date Range Picker
type Type__DateRangePresets =
  | "thisWeek"
  | "nextWeek"
  | "thisMonth"
  | "nextMonth";
export interface Interface__DateRangePicker extends ButtonProps {
  id?: string;
  name?: string;
  title?: string;
  onConfirm?: (inputValue: Type__DateRange) => void;
  inputValue?: Type__DateRange;
  dateFormatOptions?: Type__PrefixDateFormat | object;
  placeholder?: string;
  nonNullable?: boolean;
  invalid?: boolean;
  disclosureSize?: Type__DisclosureSizes;
  preset?: Type__DateRangePresets[];
  maxRange?: number;
}

// Time Picker
export type Type__TimeRange = {
  from: string | undefined;
  to: string | undefined;
};
export interface Interface__TimePicker extends ButtonProps {
  id?: string;
  name?: string;
  title?: string;
  onConfirm?: (inputValue: string | undefined) => void;
  inputValue?: string | undefined;
  withSeconds?: boolean;
  placeholder?: string;
  nonNullable?: boolean;
  invalid?: boolean;
  size?: Type__DisclosureSizes;
}

// Time Range Picker
export interface Interface__TimeRangePicker extends ButtonProps {
  id?: string;
  name?: string;
  title?: string;
  onConfirm?: (inputValue: Type__TimeRange | undefined) => void;
  inputValue?: Type__TimeRange | undefined;
  withSeconds?: boolean;
  placeholder?: string;
  nonNullable?: boolean;
  invalid?: boolean;
  size?: Type__DisclosureSizes;
}

// Table Component
export interface Interface__FormattedTableHeader {
  th: string;
  columnKey?: string; // unused yet
  isSortable?: boolean;
  tableColumnHeaderProps?: TableColumnHeaderProps;
  stackProps?: StackProps;
}
export interface Interface__FormattedTableBody {
  id: number;
  columnsFormat: {
    td: any;
    value: any;
    columnKey?: string; // unused yet
    dataType?: "string" | "number" | "date" | "time";
    original_data?: any;
    tableCellProps?: TableCellProps;
    stackProps?: StackProps;
  }[];
}
export interface Interface__TableComponent extends StackProps {
  ths: Interface__FormattedTableHeader[];
  tds: Interface__FormattedTableBody[];
  originalData: any;
  rowClick?: (rowData: any) => void;
  columnsConfig?: number[];
  batchOptions?: any[];
  rowOptions?: any[];
  initialSortOrder?: "asc" | "desc";
  initialSortColumnIndex?: number;
  trBodyProps?: TableRowProps;
  initialLimit?: number;
  initialPage?: number;
  footerContent?: any;
  pagination?: any;
  pageControl?: number;
  setPageControl?: Dispatch<number>;
  limitControl?: number;
  setLimitControl?: Dispatch<number>;
}
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
      };
      subMenu?: any; // unused yet
      menuItemProps?: MenuItemProps;
    }
  | "divider"
)[];
export interface Interface__RowOptions {
  rowData: any;
  rowOptions: Type__TableOptions;
  tableRef: any;
}
export interface Interface__BatchOptions {
  selectedRows: number[];
  batchOptions: Type__TableOptions;
  selectAllRows: boolean;
  handleSelectAllRows: (isChecked: boolean) => void;
  tableRef: any;
}

// Divider
export interface Interface__Divider extends BoxProps {
  dir?: "vertical" | "horizontal";
}
