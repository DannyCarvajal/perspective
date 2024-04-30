import { AgeTimeSelector } from "./components/age-time-selector";
import { CurrentDate } from "./components/current-date";
import { StatBox } from "./components/stat-box";

export default function Home() {
  return (
    <main className="mx-auto grid max-w-[1400px] grid-cols-[14] p-10">
      <div className="flex w-full gap-8">
        <CurrentDate date={new Date("2003-03-19")} />
        <AgeTimeSelector date={new Date("2003-03-19")} />
      </div>
      <div className="mt-8 grid w-full grid-cols-3">
        <div className="flex flex-col gap-6">
          <StatBox
            description={
              <span>
                Your next <br />
                Birthday in
              </span>
            }
            stat={23}
            time="days"
          />
          <StatBox description="You have enjoyed" stat={6} time="leap years" />
        </div>
      </div>
    </main>
  );
}
