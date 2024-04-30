import { cn } from "../utils/cn";

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={cn("relative h-[0.5px] w-full bg-black opacity-20", className)}
    />
  );
};
