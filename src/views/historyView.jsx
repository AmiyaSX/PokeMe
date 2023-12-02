import Banner from "./components/banner";
import HistoryItem from "./components/historyItem";
import BackButton from "./components/backbutton";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/eevee.png";
import Icon3 from "../assets/images/gaming.png";
import "/src/style.css";

function HistoryView(props){
    function goToTest(){
        window.location.hash="#/test";
    }
    function goHome(){
        window.location.hash="#/home";
    }
    return (
        <div className="">
            <Banner text="Your Pokemon History"/>
            <BackButton />
            <div>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." date="28/11/23"/>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." date="28/11/23"/>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." date="28/11/23"/>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." date="28/11/23"/>
            </div>
            <div className="flextRowParent">
                    <button className="button_2" onClick={goHome}>
                        <img src={Icon2} width={58} height={58}/>
                        <div>Home</div>
                    </button>
                    <button className="button_2" onClick={goToTest}>
                        <img src={Icon3} width={58} height={58}/>
                        <div>Go to Test!</div>
                    </button>
                </div>
        </div>
    );
    
}


export default HistoryView;