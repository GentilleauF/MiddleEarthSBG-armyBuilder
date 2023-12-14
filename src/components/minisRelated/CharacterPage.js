import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import ButtonOption from "./ButtonOption";




const CharacterPage = () => {
  //! Cette fonction nous permet d'utiliser des parametres dans l'URL ///////
  const { id } = useParams();

  const { myData, isLoading, error } = useFetch(
    "http://localhost:8000/data/" + id
  );

  //test

  //


  return (
    <div className="container character-detail-card">
      {isLoading && <div>Loading...</div>}
      {error && <div> ERREUR !!!!</div>}
      
      {myData && (
        <div>
          <div className="card">
            <div className="my-character mt-3 d-flex flex-wrap justify-content">
              <div className="card-body">
                <img className="imgCharacter" src={require("../../images/" +myData.profile_origin +"/pictures/" +myData.name +".png")} alt="" width="250px"/>
                <h2 className="card-title">{myData.name}</h2>
              </div>
              <h2 className="card-title">Points: {myData.base_points}</h2>
            </div>
          </div>

          <p className="mt-3">{myData.faction}</p>

          <div className="options  mt-3 d-flex flex-wrap align-items-start">
            {myData.options.map((option, index) => (
              // console.log("le nbr de pts"+ myData.base_points ),
              <ButtonOption myData={myData} option={option} index={index}  />
            ))}
          </div>
          <button onClick={()=>console.log("le nbr de pts"+ myData.base_points )}>coucou</button>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
