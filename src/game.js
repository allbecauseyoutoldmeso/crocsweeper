import React, { useState, Fragment } from "react";
import Grid from "./Grid";

const Game = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const newSecond = second => {
    if (second === 0) {
      setMinutes(currentMinute => currentMinute - 1);
      return 60;
    } else {
      return second - 1;
    }
  };

  // const countUp = () => {
  //   setSeconds(currentSecond => newSecond(currentSecond));
  // };

  const countDown = () => {
    setSeconds(currentSecond => newSecond(currentSecond));
  };

  const formattedNumber = number => ("0" + number).slice(-2);

  const start = level => {
    setSeconds(60);
    setMinutes(10 - level);

    const intervalId = setInterval(countDown, 1000);
    setIntervalId(intervalId);
  };

  const stop = () => {
    clearInterval(intervalId);
  };

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const Timer = () => {
    return (
      <div className="timer text-center">
        {formattedNumber(minutes)}:{formattedNumber(seconds)}
      </div>
    );
  };

  return (
    <Fragment>
      <Timer />
      <Grid
        className="grid"
        startTimer={level => start(level)}
        stopTimer={stop}
        resetTimer={reset}
      />
    </Fragment>
  );
};

export default Game;
