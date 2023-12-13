import { useState } from "react";
import useFetch from "./useFetch";
import GoodArmy from "./minisRelated/GoodArmy";
import BadArmy from "./minisRelated/BadArmy";

const HOME = () => {
  const { myData, isLoading } = useFetch("http://localhost:8000/data");
  const [army, setArmy] = useState("");


  return (
    <div className="home-content">
      <div className="select-menu">
        <a href="#" onClick={() => setArmy("Good Army")}>Armée du bien</a>
        <a href="#" onClick={() => setArmy("Evil Army")}>Armée du mal</a>
       </div>
      <div className="list">


        {console.log(myData)}

        {army === "Good Army" && <GoodArmy myData={myData} army={army} isLoading={isLoading} />}
        {army === "Evil Army" && <BadArmy myData={myData} army={army} setArmy={setArmy} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default HOME;
