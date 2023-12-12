import { useState } from "react";
import { Link } from "react-router-dom";

const CardOfCharacter = ({ isLoading, myData, army }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  function handleOpenOverlay() {
    setIsOverlayOpen(true);
  }

  function handleCloseOverlay() {
    setIsOverlayOpen(false);
  }

  return (
    <div className="characterList">
      {isLoading && <div>Loading...</div>}

      {myData &&
        myData.map((elem) => {
          if (elem.faction === army) {
            return (
            <Link to={`/characterPage/${elem.id}`}>
              <div className="characterCard" key={elem.id}>
                <img
                  className="imgCharacter"
                  src={(() => {
                    try {
                      return require("../../images/" + elem.profile_origin +"/pictures/" + elem.name +".png");
                    } catch (e) {
                      return require("../../images/default.png");
                    }
                  })()}
                  alt=""
                  width="150px"
                />
                <h4>{elem.name}</h4>
                <div className="detailCharacterCard">
                  <p>{elem.unit_type}</p>
                  <p>Nombre de points: {elem.base_points}pts</p>
                  <p>Nbr d'options disponible: {elem.options.length} </p>
                  
                </div>
              </div>
            </Link>
            );
          }
        })}

<div>
        <button onClick={handleOpenOverlay}>Ouvrir le modal</button>
        {isOverlayOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Contenu du modal</h2>
              <button onClick={handleCloseOverlay}>Fermer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardOfCharacter;
