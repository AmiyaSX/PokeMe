import Banner from "./components/banner";
import TestItem from "./components/testItem";
import BackButton from "./components/backbutton";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/gaming.png";

import "/src/style.css";

function TestView(props) {
    function goToResults() {
        window.location.hash = "#/results";
    }
    
    const questions = [
        "Do you xxx xxx xxx xxxx?",
        "Do you xxx xxx xxx xxxx?",
        "Do you xxx xxx xxx xxxx?",
        "Do you xxx xxx xxx xxxx?",
        "Do you xxx xxx xxx xxxx?",
    ];

    return (
        <div className="testViewContainer">
            <Banner text="Test"/>
            <BackButton />
            <div className="columnContainer">
                {questions.map(question => (
                    <TestItem key={question} text={question} />
                ))}
            </div>
            <div className="flextRowParent">
                <button className="button_2">
                    <img src={Icon1} alt="Review Choices" style={{ width: 'auto', height: 'auto', maxWidth: '5vw', maxHeight: '5vh' }}/>
                    <div style={{fontSize: '2.5vh'}}>Review Choices</div>
                </button>
                <button className="button_2" onClick={goToResults}>
                    <img src={Icon2} alt="Submit Now!" style={{ width: 'auto', height: 'auto', maxWidth: '5vw', maxHeight: '5vh' }}/>
                    <div style={{fontSize: '2.5vh'}}>Submit Now!</div>
                </button>
            </div>
        </div>
    );
}

export default TestView;
