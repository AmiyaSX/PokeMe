import React, { useState, useEffect } from 'react';
import { getPokemonDetails, getPokemonSpecies } from "../pokemonService";
import Banner from "./components/banner";
import BackButton from "./components/backbutton";
import PokeItem from "./components/pokeItem";
import "/src/style.css";

function TestResultsView(props) {
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const pokemonData = await getPokemonDetails('pikachu'); //change so it displays the pokemon from test
            setPokemon(pokemonData);

            const speciesData = await getPokemonSpecies('pikachu'); //change so it displays the pokemon from tests
            setSpecies(speciesData);
        };

        fetchPokemonData();
    }, []);

    const pokemonImageURL = pokemon ? `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg` : '';

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
            </div>
        </div>
    );
}

export default TestResultsView;
