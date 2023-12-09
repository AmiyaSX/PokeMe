import HomeView from "../views/homeView";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Home(props){
        const goToPokemonInfo = (pokemonName) => {
            const detailUrl = `https://pokemondb.net/pokedex/${pokemonName.toLowerCase()}`;
            window.open(detailUrl, '_blank');
        };
        return <HomeView goToPokemonInfo={goToPokemonInfo} />;
    }
);


