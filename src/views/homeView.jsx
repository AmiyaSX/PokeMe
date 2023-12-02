import Banner from "./components/banner";
import BackButton from "./components/backbutton";
import PokeItem from "./components/pokeItem";
import PokeIcon from "./../assets/images/pokecoin.png";
import Image from "./../assets/images/Pikachu_c.png";
import "/src/style.css";

function HomeView(props) {
    function goToTest() {
        window.location.hash = "#/test";
    }

    // Example array of Pokemon data
    const pokemons = [
        { name: "Pikachu", image: Image },
        { name: "Charmander", image: Image }, // Replace with actual image
        { name: "Bulbasaur", image: Image },  // Replace with actual image
        { name: "Pikachu", image: Image },
        { name: "Pikachu", image: Image },
        { name: "Pikachu", image: Image },
    ];

    return (
        <div> 
            <Banner text="Pokemon Personality Test"/>
            <BackButton />
            <div className="normalText">Find your personalized Pokemon…</div>
            <div className="gridContainer">
                {pokemons.map((pokemon, index) => (
                    <PokeItem key={index} name={pokemon.name} image={pokemon.image} />
                ))}
            </div>
            <div className="floating-button-div">
                <button className="float-button" onClick={goToTest}>
                    <img src={PokeIcon} alt="PokeIcon" style={{ maxWidth: '58px', height: 'auto' }}/>
                    <div>Test Now!</div>
                </button>
            </div>
        </div>
    );
}

export default HomeView;
