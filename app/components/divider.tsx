import { cn } from "../utils/cn";

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return <div className={cn("bg-black h-px w-full opacity-20", className)} />;
};
