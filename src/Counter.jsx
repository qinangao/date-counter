import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const today = new Date();
  const options = {
    weekday: "short", // Short weekday name (e.g., 'Sun')
    month: "short", // Short month name (e.g., 'May')
    day: "2-digit", // Two-digit day of the month (e.g., '11')
    year: "numeric", // Full year (e.g., '2014')
  };
  today.setDate(today.getDate() + count);
  const updatedFormattedDate = today.toLocaleDateString("en-US", options);
  function handleClick() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div className="step">
        <input
          className="slicer"
          type="range"
          min="0"
          max="10"
          placeholder="0"
          value={step}
          id="myRange"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{updatedFormattedDate}</span>
      </p>
      <button
        onClick={handleClick}
        className={count !== 0 || step !== 1 ? "" : "active"}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
