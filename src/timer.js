import React, { useState, Fragment } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const kate = () => {
    console.log("I was called");
    setSeconds(currentSecond => currentSecond + 1);
  };

  const handleClick = () => {
    setInterval(kate, 1000);
  };

  return (
    <Fragment>
      <div>{seconds}</div>
      <button onClick={handleClick}>start</button>
    </Fragment>
  );
};

export default Timer;
