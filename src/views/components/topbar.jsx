import pikachu from "../../assets/images/pikachu.png";
import psyduck from "../../assets/images/psyduck.png";
import menu from "../../assets/images/menu-burger.png";
function TopBar(props){
    return (
        <div className="topbar">
            <div className="container1">
                <img src={pikachu} className="img_1"/>
                <div className="iconText">PokeMe </div>
            </div>
            <div className="container2">
                <img src={psyduck} className="img_1"/>
                <div className="dropdown">
                    <button className="dropbtn">
                        <img src={menu} className="menu"/> 
                    </button>
                    <div class="dropdown-content">
                        <a href="#history">History</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;