import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date("March 19, 2023");
  return (
    <main>
      <p>
        Frogplants commencing in <Countdown target={date.toISOString()} /> and counting.
      </p>
      <p>
        Get ready for Frogplants!
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=QH2-TGUlwu4">Frogplants</a>
      </p>
    </main>
  );
}
