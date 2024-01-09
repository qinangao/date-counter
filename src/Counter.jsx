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

  return (
    <div className="container">
      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <div>Count: {count}</div>
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
    </div>
  );
}

export default Counter;
