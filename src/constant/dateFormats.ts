const DATE_FORMATS = [
  {
    label: "DMY", // Format: Day-Month-Year
    basic: { day: "numeric", month: "numeric", year: "numeric" },
    // exanple: 5-11-2001

    shortMonth: { day: "numeric", month: "short", year: "numeric" },
    // exanple: 5 Nov 2001

    fullMonth: { day: "numeric", month: "long", year: "numeric" },
    // exanple: 5 November 2001

    monthYear: { month: "long", year: "numeric" },
    // exanple: November 2001

    shortMonthDay: { day: "numeric", month: "short" },
    // exanple: 5 Nov

    fullMonthDay: { day: "numeric", month: "long" },
    // exanple: 5 November
  },
  {
    label: "MDY", // Format: Month-Day-Year
    basic: { month: "numeric", day: "numeric", year: "numeric" },
    // exanple: 11-5-2001

    shortMonth: { month: "short", day: "numeric", year: "numeric" },
    // exanple: Nov 5 2001

    fullMonth: { month: "long", day: "numeric", year: "numeric" },
    // exanple: November 5, 2001

    monthYear: { month: "long", year: "numeric" },
    // exanple: November 2001

    shortMonthDay: { month: "short", day: "numeric" },
    // exanple: Nov 5

    fullMonthDay: { month: "long", day: "numeric" },
    // exanple: November 5
  },
  {
    label: "YMD", // Format: Year-Month-Day
    basic: { year: "numeric", month: "numeric", day: "numeric" },
    // exanple: 2001-11-5

    shortMonth: { year: "numeric", month: "short", day: "numeric" },
    // exanple: 2001 Nov 5

    fullMonth: { year: "numeric", month: "long", day: "numeric" },
    // exanple: 2001 November 5

    monthYear: { year: "numeric", month: "long" },
    // exanple: 2001 November

    shortMonthDay: { month: "short", day: "numeric" },
    // exanple: Nov 5

    fullMonthDay: { month: "long", day: "numeric" },
    // exanple: November 5
  },
];

export default DATE_FORMATS;
