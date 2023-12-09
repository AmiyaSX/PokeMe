import React, { useState, useEffect } from "react";
import { getPokemons } from "../model/pokemonService";
import Banner from "./components/banner";
import PokeItem from "./components/pokeItem";
import PokeIcon from "../assets/images/pokecoin.png";
import "/src/style.css";

function HomeView({ goToPokemonInfo }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  const goToTest = () => {
    window.location.hash = "#/test";
    console.log("Navigate to the test page");
  };

  return (
    <div>
      <Banner text="Pokemon Personality Test" />
      <div className="gridContainer">
        {pokemons.map((pokemon, index) => (
          <PokeItem
            key={index}
            name={pokemon.name}
            goToPokemonInfo={() => goToPokemonInfo(pokemon.name)}
            image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        ))}
      </div>
      <div className="floating-button-div">
        <button className="float-button" onClick={goToTest}>
          <img
            src={PokeIcon}
            alt="PokeIcon"
            style={{ maxWidth: "58px", height: "auto" }}
          />
          <div>Test Now!</div>
        </button>
      </div>
    </div>
  );
}

export default HomeView;
