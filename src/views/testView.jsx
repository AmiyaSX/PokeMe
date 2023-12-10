import Banner from "./components/banner";
import TestItem from "./components/testItem";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/gaming.png";
import React, { useState } from "react";
import { callChatGPT } from "../model/openai/GetPersonalityMatch";
import questions from "../model/questions";
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
  function toTop() {
    document.documentElement.scrollIntoView({
      behavior:'smooth'
    })
  }

  return (
    <div className="testViewContainer">
      <Banner text="Test" />
      <div className="columnContainer">
        {questions.map((question, index) => (
          <TestItem
            key={question}
            text={question.question}
            onSelect={(value) => handleSelect(index, value)}
            selectedValue={selections[index]}
          />
        ))}
      </div>
      <div className="flextRowParent">
        <button className="button_2" onClick={toTop}>
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
