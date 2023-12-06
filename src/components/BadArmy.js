import { useState } from "react";

const BadArmy = ({ myData, isLoading}) => {
    const [army, setArmy] = useState("");

    return ( 
        <div>
            <select onChange={(e) => setArmy(e.target.value)}>
          <option value="Army of Dunland">Army of Dunland</option>
          <option value="Assault Upon Helm's Deep">Assault Upon Helm's Deep </option>
          <option value="Barad-dur">Barad-dur</option>
          <option value="Cirith Ungol">Cirith Ungol</option>
          <option value="Corsairs of Umbar">Corsairs of Umbar</option>
          <option value="Depths of Moria">Depths of Moria</option>
          <option value="Far Harad">Far Harad</option>
          <option value="Grand Army of the South">Grand Army of the South </option>
          <option value="Isengard">Isengard</option>
          <option value="Mordor">Mordor</option>
          <option value="Moria">Moria</option>
          <option value="Sharkey's Rogues">Sharkey's Rogues</option>
          <option value="The Chief's Ruffians">The Chief's Ruffians</option>
          <option value="The Easterlings">The Easterlings</option>
          <option value="The Serpent Horde">The Serpent Horde </option>
          <option value="Variags of Khand">Variags of Khand</option>
        </select>


        {isLoading && <div>Loading...</div>}
        {myData &&
          myData.map((elem) => {
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
}
 
export default BadArmy;