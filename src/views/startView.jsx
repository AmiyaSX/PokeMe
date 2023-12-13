import "/src/effect.css";
function StartView(props) {
  const goToLogin = () => {
    window.location.hash = "#/login";
  };
  return (
    <div className="slash">
      <h1>POKÉME</h1>
      <div className="text">Take our engaging personality test, discover your perfect Pokémon match with PokéMe...</div>
      <div className="start-container">
          <div className="login-text" onClick={goToLogin}>Journey Begins!</div>
          <div className="arrows-body" onClick={goToLogin}>
              <div className="arrow"></div>
              <div className="arrow"></div>
              <div className="arrow"></div>
          </div>
        </div>
      </div>
  );
}

export default StartView;
