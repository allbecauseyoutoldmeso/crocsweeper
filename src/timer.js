import React, { useState, Fragment } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const newSecond = second => {
    if (second > 0 && second % 60 === 0) {
      setMinutes(currentMinute => currentMinute + 1);
      return 0;
    } else {
      return second + 1;
    }
  };

  const countUp = () => {
    setSeconds(currentSecond => newSecond(currentSecond));
  };

  const formattedNumber = number => ("0" + number).slice(-2);

  const startTimer = () => {
    const intervalId = setInterval(countUp, 1000);
    setIntervalId(intervalId);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <Fragment>
      <div>
        {formattedNumber(minutes)}:{formattedNumber(seconds)}
      </div>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </Fragment>
  );
};

export default Timer;
