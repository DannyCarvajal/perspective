import { format } from "date-fns";

/**
 * Returns an object with the year, month and day of the given date.
 * @example
 * const date = new Date("2003-01-01");
 * // { year: 2003, month: "March", day: 1 }
 */
export const getSplittedDate = (date: Date) => {
  return {
    year: date.getUTCFullYear(),
    month: format(date, "MMMM"),
    day: date.getUTCDate(),
  };
};
