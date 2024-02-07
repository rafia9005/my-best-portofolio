// Timer.tsx
import React, { useState, useEffect } from "react";

interface TimerProps {}

const Timer: React.FC<TimerProps> = () => {
  const [time, setTime] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;

          return {
            hours: Math.floor(newSeconds / 3600),
            minutes: Math.floor((newSeconds % 3600) / 60),
            seconds: newSeconds % 60,
          };
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    console.log('timer is start')
  };

  const stopTimer = () => {
    setIsRunning(false);
    console.log('timer is stop')
  };

  const resetTimer = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
    console.log('timer is reset')
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold">Digital Timer</h1>
        <div className="text-center mt-5">
          <p className="bg-indigo-500 text-white py-5 text-3xl rounded">{`${time.hours
            .toString()
            .padStart(2, "0")}:${time.minutes
            .toString()
            .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
          <div className="flex gap-[20px] justify-center items-center mt-5">
            <button
              onClick={startTimer}
              className="bg-blue-400 text-white px-4 py-2 rounded"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              className="bg-red-400 text-white px-4 py-2 rounded"
            >
              Stop
            </button>
            <button
              onClick={resetTimer}
              className="bg-orange-400 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
