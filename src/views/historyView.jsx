import React, { useState, useEffect } from "react";
import { getPokemons } from "../model/pokemonService";
import Banner from "./components/banner";
import HistoryItem from "./components/historyItem";
import "/src/style.css";

function HistoryView() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons(5); //can get more
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  function goToTest() {
    window.location.hash = "#/test";
  }

  function goHome() {
    window.location.hash = "#/home";
  }

  return (
    <div>
      <Banner text="Your Pokemon History" />
      <div className="historyItemsContainer">
        {pokemons.map((pokemon, index) => (
          <HistoryItem
            key={index}
            image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            intro={`Learn more about ${pokemon.name}:`}
            date="XX/XX/XXXX" //fetch the actual date dynamically
          />
        ))}
      </div>
      <div className="flextRowParent">
        <button className="button_2" onClick={goHome}>
          <div style={{ fontSize: "2.5vh" }}>Home</div>
        </button>
        <button className="button_2" onClick={goToTest}>
          <div style={{ fontSize: "2.5vh" }}>Go to Test!</div>
        </button>
      </div>
    </div>
  );
}

export default HistoryView;
