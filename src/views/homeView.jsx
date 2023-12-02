import Banner from "./components/banner";
import BackButton from "./components/backbutton";
import PokeItem from "./components/pokeItem";
import PokeIcon from "./../assets/images/pokecoin.png";
import Image from "./../assets/images/Pikachu_c.png";
import "/src/style.css";

function HomeView(props){
    function goToTest(){
        window.location.hash="#/test";
    }
    return (
        <div> 
            <Banner text="Pokemon Personality Test"/>
            <BackButton />
            <div className="normalText">Find your personalized Pokemon…</div>
            <div className="gridContainer">
                {/* TODO: render array  */}
                <PokeItem name="Pikachu" image={Image} />
                <PokeItem name="Pikachu" image={Image} />
                <PokeItem name="Pikachu" image={Image} />
                <PokeItem name="Pikachu" image={Image} />
                <PokeItem name="Pikachu" image={Image} />
                <PokeItem name="Pikachu" image={Image} />
                <PokeItem name="Pikachu" image={Image} />
            </div>
            <div className="floating-button-div">
                <button className="float-button" onClick={goToTest}>
                    <img src={PokeIcon} width={58} height={58}/>
                    <div>Test Now!</div>
                </button>
            </div>
        </div>
    );

    
    
}


export default HomeView;