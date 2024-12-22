export default function HandlingEvent() {

  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleClickParam = (userName, age) => {
    console.log(`Hello ${userName} - Age: ${age}`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default
      </button>

      <h1>Lorem, ipsum dolor.</h1>

      <button
        onClick={() => handleClickParam("John Doe", 12)}
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default
      </button>
    </div>
  );
}
