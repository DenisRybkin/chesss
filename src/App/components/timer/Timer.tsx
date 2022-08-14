import React, { useEffect, useRef, useState } from "react";
import { ITimer } from "./Timer.interface";
import { Colors } from "../../models/Colors";
import { TimerKeys } from "../../../constants/boardConfig";

export const Timer: React.FC<ITimer> = (props) => {
  const [blackTime, setBlackTime] = useState(TimerKeys.durationMoves);
  const [whiteTime, setWhiteTime] = useState(TimerKeys.durationMoves);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    const callback =
      props.currentPlayer?.color === Colors.BLACK
        ? decrementBlackTimer
        : decrementWhiteTimer;
    timer.current = setInterval(callback, 1000);
  };

  const decrementBlackTimer = () => setBlackTime((prev) => prev - 1);
  const decrementWhiteTimer = () => setWhiteTime((prev) => prev - 1);

  const resetBlackTime = () => setBlackTime(TimerKeys.durationMoves);
  const resetWhiteTime = () => setWhiteTime(TimerKeys.durationMoves);

  const handleTimeUp = (lostColor?: string) => {
    alert(`${lostColor} lost`);
    handleRestart();
  };

  useEffect(() => {
    props.currentPlayer && startTimer();
  }, [props.currentPlayer]);

  useEffect(() => {
    if (blackTime <= 0 || whiteTime <= 0)
      handleTimeUp(props.currentPlayer?.color!);
  }, [blackTime, whiteTime]);

  const handleRestart = () => {
    resetBlackTime();
    resetWhiteTime();
    props.onRestart();
  };

  return (
    <>
      <button className="button" onClick={handleRestart}>
        Restart game
      </button>
      <h3>Black - {blackTime}</h3>
      <h3>White - {whiteTime}</h3>
    </>
  );
};
