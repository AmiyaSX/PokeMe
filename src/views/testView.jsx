import Banner from "./components/banner";
import TestItem from "./components/testItem";
import Icon1 from "../assets/images/avatar.png";
import Icon2 from "../assets/images/gaming.png";
import _get_window_height from "../utilities";
import React, { useState } from "react";
import { callChatGPT } from "../model/openai/GetPersonalityMatch";
import questions from "../model/questions";
import "/src/style.css";

function TestView(props) {
  const [selections, setSelections] = useState({});

  const handleSelect = (index, value) => {
    setSelections((prevSelections) => {
      if (prevSelections[index] === value) {
        const updatedSelections = { ...prevSelections };
        delete updatedSelections[index];
        return updatedSelections;
      } else {
        document.documentElement.scrollTo({
          top: (_get_window_height()/3.3)*index + _get_window_height()/4.8,
          behavior:'smooth'
        })
      }
      return {
        ...prevSelections,
        [index]: value,
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
              id={"test-"+index}
              key={question.id}
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
