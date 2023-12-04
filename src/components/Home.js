import { useState } from "react";
import useFetch from "./useFetch";

const HOME = () => {
  const { myData, isLoading } = useFetch("http://localhost:8000/data");
  const [army, setArmy] = useState("")

  return (
    // console.log(myData)
    <div className="list">
      <select 
      onChange={(e) => setArmy(e.target.value)}
      >
        <option value="Rohan">Rohan</option>
        <option value="Arnor">Arnor</option>
        <option value="Army of Dunland">Army of Dunland</option>
        <option value="Assault Upon Helm's Deep">Assault Upon Helm's Deep</option>
        <option value="Barad-dur">Barad-dur</option>
        <option value="Breaking of the Fellowship">Breaking of the Fellowship</option>
        <option value="Cirith Ungol">Cirith Ungol</option>
        <option value="Corsairs of Umbar">Corsairs of Umbar</option>
        <option value="Defenders of Helm's Deep">Defenders of Helm's Deep</option>
        <option value="Defenders of the Shire">Defenders of the Shire</option>
        <option value="Depths of Moria">Depths of Moria</option>
        <option value="Fangorn">Fangorn</option>
        <option value="Far Harad">Far Harad</option>
        <option value="Grand Army of the South">Grand Army of the South</option>
        <option value="Helm's Guard">Helm's Guard</option>
        <option value="Isengard">Isengard</option>
        <option value="Lothlorien">Lothlorien</option>
        <option value="Minas Tirith">Minas Tirith</option>
        <option value="Mordor">Mordor</option>
        <option value="Moria">Moria</option>
        <option value="Numenor">Numenor</option>
        <option value="Paths of the Druadan">Paths of the Druadan</option>
        <option value="Rangers of Ithilien">Rangers of Ithilien</option>
        <option value="Rivendell">Rivendell</option>
        <option value="Rohan">Rohan</option>
        <option value="Sharkey's Rogues">Sharkey's Rogues</option>
        <option value="The Chief's Ruffians">The Chief's Ruffians</option>
        <option value="The Dead of Dunharrow">The Dead of Dunharrow</option>
        <option value="The Easterlings">The Easterlings</option>
        <option value="The Fellowship">The Fellowship</option>
        <option value="The Fiefdoms">The Fiefdoms</option>
        <option value="The Kingdom of Khazad-Dum ">The Kingdom of Khazad-Dum</option>
        <option value="The Serpent Horde ">The Serpent Horde </option>
        <option value="The Shire">The Shire</option>
        <option value="Variags of Khand ">Variags of Khand</option>
        <option value="Wildmen of Druadan">The </option>


      </select>

      {console.log(myData)}

      {isLoading && <div>Loading...</div>}
      {myData &&
        myData.map((elem) => {
          console.log(elem.faction);
          if (elem.faction == army) {
            return (
              <div className="name" key={elem.model_id}>
                <p>{elem.name}</p>
              </div>
            );
          }
        })}
    </div>
  );
};

export default HOME;
