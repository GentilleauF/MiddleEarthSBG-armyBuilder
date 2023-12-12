import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  //! Cette fonction nous permet d'utiliser des parametres dans l'URL ///////
  const { id } = useParams();

  const { myData, isLoading, error } = useFetch(
    "http://localhost:8000/data/" + id
  );

  return (
    <div className="container character-detail-card">
      {isLoading && <div>Loading...</div>}
      {error && <div> ERREUR !!!!</div>}
      {myData && (
        <div>
          <div className="my-character card">
            <img
              className="imgCharacter"
              src={(() => {
                try {
                  return require("../../images/" +
                    myData.profile_origin +
                    "/pictures/" +
                    myData.name +
                    ".png");
                } catch (e) {
                  return require("../../images/default.png");
                }
              })()}
              alt=""
              width="250px"
            />
            <div className="card-body">
              <h2 className="card-title">{myData.name}</h2>
            </div>
          </div>

          <p className="mt-3">{myData.faction}</p>
          <p>{myData.id}</p>

          <div className="options  mt-3 d-flex flex-wrap align-items-start">
            {myData.options.map((option, index) => (
              <div className="bg-primary card card-primary mx-2 my-1" key={index}>
                <div className="p-2 text-white">
                  <p className="text-white">Option: {option.option}</p>
                  <p className="text-white">Points: {option.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default CharacterPage;
