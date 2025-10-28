import React, { useEffect, useRef, useState } from "react";

export default function PomodoroTimer({ workMinutes = 25, breakMinutes = 5 }) {
  const WORK_SECONDS = workMinutes * 60;
  const BREAK_SECONDS = breakMinutes * 60;

  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(WORK_SECONDS);
  const intervalRef = useRef(null);

  // format mm:ss
  function formatTime(s) {
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
  }

  // start or resume
  function handleStart() {
    if (isRunning) return;
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setIsWork(true);
    setSecondsLeft(WORK_SECONDS);
  }

  // Switch mode when time reaches 0
  useEffect(() => {
    if (secondsLeft !== 0) return;
    // small pause to show 00:00 before switching
    const t = setTimeout(() => {
      setIsWork((prev) => !prev);
      setSecondsLeft((prev) => (isWork ? BREAK_SECONDS : WORK_SECONDS));
    }, 600);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  // timer interval
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // create interval
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  // update secondsLeft when user changes work/break via props
  useEffect(() => {
    setSecondsLeft(isWork ? WORK_SECONDS : BREAK_SECONDS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workMinutes, breakMinutes]);

  const total = isWork ? WORK_SECONDS : BREAK_SECONDS;
  const percent = Math.round(((total - secondsLeft) / total) * 100);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Pomodoro ტაიმერი</h2>
          <p className="text-sm text-gray-500">რეჟიმი: <span className="font-medium">{isWork ? 'სამუშაო' : 'შესვენება'}</span></p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-mono">{formatTime(secondsLeft)}</div>
          <div className="text-xs text-gray-400">{isWork ? `${workMinutes}ენტ წუთი` : `${breakMinutes}ენტ წუთი`}</div>
        </div>
      </div>

      {/* progress bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-5">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${percent}%`, background: isWork ? 'linear-gradient(90deg,#4f46e5,#06b6d4)' : 'linear-gradient(90deg,#10b981,#f59e0b)' }}
        />
      </div>

      <div className="flex gap-3">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="flex-1 py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm"
            aria-label="Start timer"
          >
            დაწყება
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="flex-1 py-2 px-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium shadow-sm"
            aria-label="Pause timer"
          >
            პაუზა
          </button>
        )}

        <button
          onClick={handleReset}
          className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium shadow-sm"
          aria-label="Reset timer"
        >
          თავიდან
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>რეკომენდაცია: 25 წუთი მუშაობა → 5 წუთი შესვენება. შეგიძლიათ დაარეგულიროთ კომპონენტის props-ებით: <code>workMinutes</code> და <code>breakMinutes</code>.</p>
      </div>
    </div>
  );
}

