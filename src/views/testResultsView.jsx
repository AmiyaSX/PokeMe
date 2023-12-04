import React, { useState, useEffect } from 'react';
import { getPokemonDetails, getPokemonSpecies } from "../pokemonService";
import Banner from "./components/banner";
import BackButton from "./components/backbutton";
import PokeItem from "./components/pokeItem";
import Icon1 from "../assets/images/icon_1.png";
import Icon2 from "../assets/images/icon_2.png";
import Icon3 from "../assets/images/insignia.png";
import "/src/style.css";

function TestResultsView(props) {
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const pokemonData = await getPokemonDetails('pikachu'); // Change to dynamic Pokemon based on test
            setPokemon(pokemonData);

            const speciesData = await getPokemonSpecies('pikachu'); // Change to dynamic species based on test
            setSpecies(speciesData);
        };

        fetchPokemonData();
    }, []);

    const pokemonImageURL = pokemon ? `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg` : '';

    // Someone later will implement the onClicks here
    const handleTryAgain = () => {
        console.log("Try Again clicked");
    };
    const handleSaveResult = () => {
        console.log("Save My Result clicked");
    };
    const handleShare = () => {
        console.log("Share clicked");
    };

    return (
        <div>
            <Banner text="Your Pokemon is here!"/>
            <BackButton />
            <div className="columnContainer">
                {pokemon ? (
                    <PokeItem key={pokemon.id} name={pokemon.name} image={pokemonImageURL} />
                ) : (
                    <p>Loading...</p>
                )}
                <div className="textBox">
                    <div className="introText">
                        {pokemon && species ? (
                            <div>
                                <p>Name: {pokemon.name}</p>
                                <p>Height: {pokemon.height * 10} cm</p>
                                <p>Weight: {pokemon.weight / 10} kg</p>
                                <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
                                <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
                                <p>Fact: {species.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text}</p>
                            </div>
                            ) : (
                                "Loading Pokémon details..."
                            )}
                    </div>
                </div>
                <div className="flextRowParent">
                    <button className="button_2" onClick={handleTryAgain}>
                        <img src={Icon1} alt="Try Again" width={58} height={58}/>
                        <div style={{fontSize: '2.5vh'}}>Try Again!</div>
                    </button>
                    <button className="button_2" onClick={handleSaveResult}>
                        <img src={Icon2} alt="Save My Result" width={58} height={58}/>
                        <div style={{fontSize: '2.5vh'}}>Save My Result!</div>
                    </button>
                    <button className="button_2" onClick={handleShare}>
                        <img src={Icon3} alt="Share" width={58} height={58}/>
                        <div style={{fontSize: '2.5vh'}}>Share!</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TestResultsView;
