const Navigation = () => {
  return (
    <div className="navbar">
      
      <img
        src={(() => {
          try {
            return require("../images/title-logo.png");
          } catch (e) {
            return require("../images/default.png");
          }
        })()}
        alt=""
      />
      <div className="links">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
      </div>
    </div>
  );
};

export default Navigation;
