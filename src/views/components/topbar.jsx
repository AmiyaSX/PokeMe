import pikachu from "../../assets/images/pikachu.png";
import psyduck from "../../assets/images/psyduck.png";

function TopBar(props){
    return (
        <div className="topbar">
            <div className="container1">
                <img src={pikachu} className="img_1"/>
                <div className="iconText">PokeMe </div>
            </div>
            <div className="container2">
                <img src={psyduck} className="img_1"/>
            </div>

        </div>
    );
}

export default TopBar;