import { CurrentDate } from "./components/current-date";

export default function Home() {
  return (
    <main className="p-14">
      <CurrentDate date={new Date("2003-03-19")} />
    </main>
  );
}
