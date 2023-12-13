import { useState } from "react";

const ButtonOption = ({ myData, option, index }) => {
  const [selectOption, setSelectOption] = useState(true);

  return (
    <div className="card card-primary mx-2 my-1" key={index}>
      <button
        onClick={() => {
          setSelectOption(!selectOption);
          if (selectOption === true) {
            myData.base_points += option.points;
          } else {
            myData.base_points -= option.points;
          }
          console.log(myData.base_points);
        }}
        className={
          selectOption
            ? "bg-primary p-2 text-white"
            : "bg-success p-2 text-white"
        }
      >
        <p className="text-white">Option: {option.option}</p>
        <p className="text-white">Points: {option.points}</p>
      </button>
    </div>
  );
};

export default ButtonOption;
