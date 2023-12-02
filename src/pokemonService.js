import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

const getPokemons = async (limit = 30, offset = 0) => {
  try {
    const response = await axios.get(`${API_URL}pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};

export { getPokemons };
