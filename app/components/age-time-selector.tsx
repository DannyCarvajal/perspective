import { differenceInMilliseconds } from "date-fns";

type AgeTimeSelectorProps = {
  date: Date;
};

const MILLS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365.25;
/**
 * Given a birtdate uses millisenconds
 * to calculate the age in years, with high precision ( with decimals)
 *
 * @example
 * const birthDate = new Date("2003-03-19");
 * getAgeInYears(birthDate); // 21.08175188867341
 */
const getAgeInYears = (birthDate: Date) => {
  const now = new Date();
  const ageMilliseconds = differenceInMilliseconds(now, birthDate);
  const ageYears = ageMilliseconds / MILLS_IN_A_YEAR; // Accounting for leap years
  return ageYears;
};

export const AgeTimeSelector = ({ date }: AgeTimeSelectorProps) => {
  return (
    <div className="flex flex-1 flex-col rounded-xl">
      <header>you are</header>
    </div>
  );
};
