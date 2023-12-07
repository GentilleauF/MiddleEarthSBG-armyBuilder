import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  //! Cette fonction nous permet d'utiliser des parametres dans l'URL ///////
  const { id } = useParams();

  const { myData, isLoading, error } = useFetch(
    "http://localhost:8000/data/" + id
  );

  return (
    <div>
      {myData && (
        <div>
          <p>{myData.faction}</p>
          <p>{myData.id}</p>
        </div>
      )}
      ;
    </div>
  );
};

export default CharacterPage;
