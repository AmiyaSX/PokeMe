import Banner from "./components/banner";
import HistoryItem from "./components/historyItem";
import BackButton from "./components/backbutton";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/eevee.png";
import Icon3 from "../assets/images/gaming.png";
import "/src/style.css";

function HistoryView(props) {
    function goToTest() {
        window.location.hash = "#/test";
    }

    function goHome() {
        window.location.hash = "#/home";
    }

    return (
        <div>
            <Banner text="Your Pokemon History"/>
            <BackButton />
            <div className="historyItemsContainer">
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet..." date="28/11/23"/>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet..." date="28/11/23"/>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet..." date="28/11/23"/>
                <HistoryItem image={Icon1} intro="Lorem ipsum dolor sit amet..." date="28/11/23"/>
            </div>
            <div className="flextRowParent">
                <button className="button_2" onClick={goHome}>
                    <img src={Icon2} alt="Home Icon" style={{ maxWidth: '58px', height: 'auto' }}/>
                    <div>Home</div>
                </button>
                <button className="button_2" onClick={goToTest}>
                    <img src={Icon3} alt="Test Icon" style={{ maxWidth: '58px', height: 'auto' }}/>
                    <div>Go to Test!</div>
                </button>
            </div>
        </div>
    );
}

export default HistoryView;
