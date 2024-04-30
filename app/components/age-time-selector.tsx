import { Relief } from "@/icons/relief";
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
    <div className="relative flex flex-1 flex-col gap-8 overflow-hidden rounded-xl bg-white bg-[url('/cubes-background.png')] px-16 py-12 shadow-xl">
      <p className="text-body font-light">You are</p>
      <div className="flex justify-between">
        <p className="text-heading font-extrabold">
          {getAgeInYears(date).toFixed(1)}
        </p>
        {/* TODO: Dropdown select old type */}
        <button className="mr-8">Years old</button>
        <Relief className="bg-gray absolute -right-5 -top-5 size-32 -rotate-[15deg]" />
      </div>
    </div>
  );
};
