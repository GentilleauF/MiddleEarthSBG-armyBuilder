const CardOfCharacter = ({ isLoading, myData, army }) => {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {myData &&
        myData.map((elem) => {
          const imagePath =
            require(`../images/${elem.profile_origin}/pictures/${elem.name}.png`).default;

          if (elem.faction === army) {
            return (
              <div className="name" key={elem.model_id}>
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
                />
                <p>{elem.name}</p>
              </div>
            );
          }
        })}
    </div>
  );
};

export default CardOfCharacter;
