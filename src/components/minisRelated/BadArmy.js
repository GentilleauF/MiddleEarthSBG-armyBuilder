import { useState } from "react";
import CardOfCharacter from "./CardOfCharacter";

const BadArmy = ({ myData, isLoading }) => {
  const [army, setArmy] = useState("");

  
  return (
    <div>
      <div className="select-container" >
      <select className="select-style"  onChange={(e) => setArmy(e.target.value)}>
        <option value=""></option>
        <option value="Angmar">Angmar</option>
        <option value="Army of Dunland">Army of Dunland</option>
        <option value="Assault Upon Helm's Deep">Assault Upon Helm's Deep{" "}</option>
        <option value="Barad-dur">Barad-dur</option>
        <option value="Cirith Ungol">Cirith Ungol</option>
        <option value="Corsairs of Umbar">Corsairs of Umbar</option>
        <option value="Depths of Moria">Depths of Moria</option>
        <option value="Far Harad">Far Harad</option>
        <option value="Grand Army of the South"> Grand Army of the South{" "}</option>
        <option value="Isengard">Isengard</option>
        <option value="Mordor">Mordor</option>
        <option value="Moria">Moria</option>
        <option value="Sharkey's Rogues">Sharkey's Rogues</option>
        <option value="The Chief's Ruffians">The Chief's Ruffians</option>
        <option value="The Easterlings">The Easterlings</option>
        <option value="The Serpent Horde">The Serpent Horde </option>
        <option value="Variags of Khand">Variags of Khand</option>
      </select>
      </div>

      {myData && <CardOfCharacter myData={myData} army={army} isLoading={isLoading}/>}
    </div>
  );
};

export default BadArmy;
