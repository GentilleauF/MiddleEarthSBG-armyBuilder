const CardOfCharacter = ({ isLoading, myData, army }) => {
  return (
    <div className="characterList">
      {isLoading && <div>Loading...</div>}
      {myData &&
        myData.map((elem) => {
          const imagePath =
            require(`../images/${elem.profile_origin}/pictures/${elem.name}.png`).default;

          if (elem.faction === army) {
            return (
              <div className="characterCard" key={elem.model_id}>
                <img
                  className="imgCharacter"
                  src={(() => {
                    try {
                      return require("../images/" + elem.profile_origin +"/pictures/" + elem.name +".png");
                    } catch (e) {
                      return require("../images/default.png");
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
            );
          }
        })}
    </div>
  );
};

export default CardOfCharacter;
