import { useState } from "react";
export default function ChangeColorCar() {

    const [urlImg, setUrlImg] = useState("./img/black-car.jpg");

    // const handleChangeColor = (url) => {
    //     setUrlImg(url);

    const handleChangeColor = (color) => {
        console.log(color);
        if (color === "black") {
            setUrlImg("./img/black-car.jpg");
        } else if (color === "red") {
            setUrlImg("./img/red-car.jpg");
        } else {
            setUrlImg("./img/silver-car.jpg");
        }
    
    };  

  return (
    <div className="mx-auto container ">
      <h1>Change Color Car</h1>
      <div className="grid grid-cols-2">
        <div>
          <img src={urlImg} alt="black" />
        </div>
        
        <div>
          <button
            onClick={() => {handleChangeColor("black")}}
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Black
          </button>
          <button
          onClick={() => {handleChangeColor("red")}}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>
          <button
          onClick={() => {handleChangeColor("white")}}
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Whiite
          </button>
        </div>
      </div>
    </div>
  );
}
