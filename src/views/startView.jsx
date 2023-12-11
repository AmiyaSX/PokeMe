import "/src/effect.css";
function StartView(props) {
  const goToLogin = () => {
    window.location.hash = "#/login";
  };
  return (
    <div className="slash">
      <h1>POKEME</h1>
      <div className="text">Take our engaging personality test, discover your perfect Pokémon match with PokeMe...</div>
      <div className="container">
        <div className="login-text" onClick={goToLogin}>Journey Begins!</div>
      </div>
    </div>
  );
}

export default StartView;
