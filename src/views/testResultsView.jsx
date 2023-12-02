import Icon1 from "../assets/images/icon_1.png";
import Icon2 from "../assets/images/icon_2.png";
import Icon3 from "../assets/images/insignia.png";
import Banner from "./components/banner";
import psyduck from "../assets/images/avatar_c.png";
import BackButton from "./components/backbutton";
import "/src/style.css";

function TestResultsView(props) {
    return (
        <div>
            <Banner text="Your Pokemon is here!"/>
            <BackButton />
            <div className="columnContainer">
                <img className="img_2" src={psyduck} alt="Psyduck"/>
                <div className="textBox">
                    <div className="introText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="flextRowParent">
                    <button className="button_2">
                        <img src={Icon1} alt="Try Again!" style={{ maxWidth: '58px', height: 'auto' }}/>
                        <div>Try Again!</div>
                    </button>
                    <button className="button_2">
                        <img src={Icon2} alt="Save My Results!" style={{ maxWidth: '58px', height: 'auto' }}/>
                        <div>Save My Result!</div>
                    </button>
                    <button className="button_2">
                        <img src={Icon3} alt="Share!" style={{ maxWidth: '58px', height: 'auto' }}/>
                        <div>Share!</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TestResultsView;
