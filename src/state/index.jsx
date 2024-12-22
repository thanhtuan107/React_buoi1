import { useState } from "react";

export default function State() {
  console.log("State");

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  
  return (
    <div>
      <p>Number: {count} </p>
      <button
        onClick={() => {
          handleIncrement();
        }}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        +
      </button>
    </div>
  );
}
