import React, { useEffect, useState } from "react";
import { Colors } from "../Theme/Colors";
import { queryDate } from "./parameters";

export default function Countdown() {
  const date = new Date(queryDate);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    calcTime();
  });

  const calcTime = () => {
    const now = new Date();
    // set the time difference
    const diff = date.getTime() - now.getTime();

    // if the time difference is negative, the countdown is over
    if (diff < 0) {
      setIsRunning(false);
      return;
    }
    // calculate the days, hours, minutes and seconds
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const m = Math.floor(diff / (1000 * 60)) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // set the state with the new values
    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);

    // set the interval to call the function again in 1 second
    setTimeout(calcTime, 1000);
  };

  return (
    <div>
      {!isRunning ? (
        <h1 style={styles.finished}>
          Herzlichen Glückwunsch du musst nicht mehr in Quarantäne!
        </h1>
      ) : (
        <>
          <h1 style={styles.text}>Du musst nur noch</h1>
          <div style={styles.countdown}>
            <h2 style={styles.countdownText}>{days} Tage</h2>
            <h2 style={styles.countdownText}>{hours} Stunden</h2>
            <h2 style={styles.countdownText}>{minutes} Minuten</h2>
            <h2 style={styles.countdownText}>{seconds} Sekunden</h2>
          </div>
          <h1 style={styles.text}>in Quarantäne bleiben.</h1>
        </>
      )}
    </div>
  );
}

const styles = {
  text: {
    color: Colors.text,
    fontSize: "1.5em",
    textAlign: "center",
  },
  countdown: {
    padding: "2em 15vw 2em 15vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
    gridGap: "0.5em",
  },
  countdownText: {
    color: Colors.accent2,
    fontSize: "2em",
    textAlign: "center",
  },
  finished: {
    color: Colors.accent2,
    fontSize: "2.5em",
    textAlign: "center",
  },
};
