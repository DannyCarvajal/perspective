import { Calendar } from "@/icons/calendar";
import { getSplittedDate } from "@/utils/dates";
import { Divider } from "@/components/divider";

type CurrentDateProps = {
  date: Date;
};

export const CurrentDate = ({ date }: CurrentDateProps) => {
  const { year, month, day } = getSplittedDate(date);

  return (
    <div className="relative flex size-[230px] flex-col items-end rounded-xl bg-whiteBg bg-gradient-brown-yellow p-5 text-brown">
      <Calendar className="absolute right-5 top-5 size-12" />

      <div className="mt-4 flex w-full items-end gap-2">
        <p className="text-heading font-extrabold">{day}</p>
        <p className="text-body  font-light">{month}</p>
      </div>
      <Divider className="left-5 mt-7 w-[95%]" />
      <p className="text-subheading mt-4 font-extrabold">{year}</p>
    </div>
  );
};
