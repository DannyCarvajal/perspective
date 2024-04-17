import { Calendar } from "@/icons/calendar";
import { getSplittedDate } from "@/utils/dates";
import { Divider } from "@/components/divider";

type CurrentDateProps = {
  date: Date;
};

export const CurrentDate = ({ date }: CurrentDateProps) => {
  const { year, month, day } = getSplittedDate(date);

  return (
    <div className="flex h-[280px] w-[280px] flex-col items-end rounded-xl bg-gradient-brown-yellow p-6 text-brown">
      <div className="relative mt-6 flex w-full items-end gap-3">
        <Calendar className="absolute right-0 top-0 size-12" />
        <p className="text-8xl font-black">{day}</p>
        <p className="text-3xl">{month}</p>
      </div>
      <Divider className="mt-10 w-[90%]" />
      <p className="mt-4 text-5xl font-extrabold">{year}</p>
    </div>
  );
};
