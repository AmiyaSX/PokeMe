import HomeView from "../views/homeView";
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Home(props){
        const navigate = useNavigate();

        const goToPokemonInfo = (pokemonName) => {
            navigate(`/pokemon/${pokemonName.toLowerCase()}`);
          };

        const goToTest = () => {
            window.location.hash = "#/test";
            console.log("Navigate to the test page");
        };

        return <HomeView 
                goToPokemonInfo={goToPokemonInfo} 
                goToTest={goToTest}
               />;
    }
);


