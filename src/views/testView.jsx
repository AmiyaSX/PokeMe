import Banner from "./components/banner";
import TestItem from "./components/testItem";
import BackButton from "./components/backbutton";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/gaming.png";
import React, { useState } from 'react';
import { callChatGPT } from "../openai/GetPersonalityMatch";
import "/src/style.css";

function TestView(props) {

  const [selections, setSelections] = useState({}); 

  const handleSelect = (question, value) => {
    setSelections((prevSelections) => {
      if (prevSelections[question] === value) {
        const updatedSelections = { ...prevSelections };
        delete updatedSelections[question]; 
        return updatedSelections;
      }
      return {
        ...prevSelections,
        [question]: value,
      };
    });
  };
  

  function goToResults() {
    window.location.hash = "#/results";
  }

  const questions = [
    "When faced with a difficult situation, are you likely to tackle it head-on without hesitation?",
    "Do you often find yourself taking care of others and putting their needs before your own?",
    "Are you comfortable being the center of attention and do you thrive in social situations?",
    "Do you prefer to plan and strategize before taking action, rather than acting on impulse?",
    "Do you find it easy to adapt to new environments and change your strategy when needed?",
    "Are you often considered the peacemaker in your group, always looking to maintain harmony?",
    "Do you have a fiery spirit and a passion that motivates you and possibly others?",
    "Are you known for your intelligence and often relied upon for your knowledge and wisdom?",
    "Do you prefer solitude and deep thought, often finding yourself lost in your own mind?",
    "Are you playful and energetic, often spreading joy and laughter wherever you go?",
  ];

  return (
    <div className="testViewContainer">
      <Banner text="Test" />
      <BackButton />
      <div className="columnContainer">
      {questions.map((question, index) => (
          <TestItem 
            key={question} 
            text={question} 
            onSelect={(value) => handleSelect(index, value)} 
            selectedValue={selections[index]} 
          />
        ))}
      </div>
      <div className="flextRowParent">
        <button className="button_2">
          <img
            src={Icon1}
            alt="Review Choices"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "5vw",
              maxHeight: "5vh",
            }}
          />
          <div style={{ fontSize: "2.5vh" }}>Review Choices</div>
        </button>
        <button
          className="button_2"
          onClick={() => {
            callChatGPT();
            goToResults();
          }}
        >
          <img
            src={Icon2}
            alt="Submit Now!"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "5vw",
              maxHeight: "5vh",
            }}
          />
          <div style={{ fontSize: "2.5vh" }}>Submit Now!</div>
        </button>
      </div>
    </div>
  );
}

export default TestView;
