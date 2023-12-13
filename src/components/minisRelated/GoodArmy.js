import { useState } from "react";
import CardOfCharacter from "./CardOfCharacter";

const GoodArmy = ({ myData, isLoading }) => {
  const [army, setArmy] = useState("");

  return (
    <div>
      <div className="select-container">
        <select className="select-style" onChange={(e) => setArmy(e.target.value)}>
          <option value=""></option>
          <option value="Arnor">Arnor</option>
          <option value="Breaking of the Fellowship">Breaking of the Fellowship</option>
          <option value="Defenders of Helm's Deep">Defenders of Helm's Deep</option>
          <option value="Defenders of the Shire">Defenders of the Shire</option>
          <option value="Fangorn">Fangorn</option>
          <option value="Helm's Guard">Helm's Guard</option>
          <option value="Lothlorien">Lothlorien</option>
          <option value="Minas Tirith">Minas Tirith</option>
          <option value="Numenor">Numenor</option>
          <option value="Paths of the Druadan">Paths of the Druadan</option>
          <option value="Rangers of Ithilien">Rangers of Ithilien</option>
          <option value="Rivendell">Rivendell</option>
          <option value="Rohan">Rohan</option>
          <option value="The Dead of Dunharrow">The Dead of Dunharrow</option>
          <option value="The Fellowship">The Fellowship</option>
          <option value="The Fiefdoms">The Fiefdoms</option>
          <option value="The Kingdom of Khazad-Dum">The Kingdom of Khazad-Dum</option>
          <option value="The Shire">The Shire</option>
          <option value="Wildmen of Druadan">Wildmens od Druandan </option>
        </select>
      </div>

      {myData && (<CardOfCharacter myData={myData} army={army} isLoading={isLoading} />)}
    </div>
  );
};

export default GoodArmy;
