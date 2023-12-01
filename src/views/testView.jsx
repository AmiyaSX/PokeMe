import "/src/style.css";
import Banner from "./components/banner";
import TestItem from "./components/testItem";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/gaming.png";
function TestView(props){
    function goToResults(){
        window.location.hash="#/results";
    }
    return (
            <div className="">
                <Banner text="Test"/>
                <div className="columnContainer">
                    <TestItem text="Do you xxx xxx xxx xxxx?"/>
                    <TestItem text="Do you xxx xxx xxx xxxx?"/>
                    <TestItem text="Do you xxx xxx xxx xxxx?"/>
                    <TestItem text="Do you xxx xxx xxx xxxx?"/>
                    <TestItem text="Do you xxx xxx xxx xxxx?"/>
                </div>
                <div className="flextRowParent">
                    <button className="button_2">
                        <img src={Icon1} width={58} height={58}/>
                        <div>Review Choices</div>
                    </button>
                    <button className="button_2" onClick={goToResults}>
                        <img src={Icon2} width={58} height={58}/>
                        <div>Submit Now!</div>
                    </button>
                </div>
            </div>
    );
}

export default TestView;