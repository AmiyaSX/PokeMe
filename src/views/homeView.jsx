import React, { useState, useEffect } from "react";
import { getPokemons } from "../model/pokemonService";
import Banner from "./components/banner";
import PokeItem from "./components/pokeItem";
import PokeIcon from "../assets/images/pokecoin.png";
import PikachuHello from "../assets/images/pikachuhello.gif";
import "/src/style.css";

function HomeView(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
      <div>
      <Banner text="Pokemon Personality Test" />
      <div className="gridContainer">
        {pokemons.map((pokemon, index) => (
          <PokeItem
            key={index}
            name={pokemon.name}
            goToPokemonInfo={() => props.goToPokemonInfo(pokemon.name)}
            image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        ))}
      </div>
      <div className="floating-button-div">
        <div className="login-pikachu">
          <img src={PikachuHello} alt="pikachu hello" />
        </div>
        <button className="float-button" onClick={props.goToTest}>
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
