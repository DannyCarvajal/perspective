import { ReactNode } from "react";

type StatBoxProps = {
  description: string | ReactNode;
  stat: number;
  time: "days" | "weeks" | "months" | "years" | "leap years";
};

export const StatBox = ({ description, stat, time }: StatBoxProps) => {
  return (
    <div className="flex min-w-[280px] max-w-[300px] flex-col rounded-xl bg-white p-6 drop-shadow-xl">
      <p className="text-body font-light">{description}</p>
      <p className="text-heading mt-4 self-center font-extrabold">{stat}</p>
      <p className="text-body self-end font-medium text-brown">{time}</p>
    </div>
  );
};
