import { useState } from "react";
import useFetch from "./useFetch";
import GoodArmy from "./GoodArmy";
import BadArmy from "./BadArmy";

const HOME = () => {
  const { myData, isLoading } = useFetch("http://localhost:8000/data");
  const [army, setArmy] = useState("");


  return (
    <div className="home-content">
      <div className="left-menu">
        <ul>
          <li><a href="#" onClick={() => setArmy("Good Army")}>Armée du bien</a>
          <ul>
            <li><a href="" value="Rohan" ></a></li>
          </ul>
          </li>
          <li> <a href="#" onClick={() => {setArmy("Evil Army")}}>Armée du mal</a></li>
        </ul>

      </div>
      <div className="list">


        {console.log(myData)}

        {army === "Good Army" && <GoodArmy myData={myData} isLoading={isLoading} />}
        {army === "Evil Army" && <BadArmy myData={myData} army={army} setArmy={setArmy} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default HOME;
