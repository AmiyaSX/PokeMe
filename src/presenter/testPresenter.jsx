import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../model/authContext.jsx";
import TestView from "../views/testView.jsx";
import questions from "../model/questions";
import { saveToFirebase, readFromFirebase } from "../model/firebaseModel.js";
import { callChatGPT } from "../model/openai/GetPersonalityMatch";
import "/src/style.css";
import { observer } from "mobx-react-lite";
import _get_window_height from "../utilities";
import promiseNoDataView from "../views/promiseNoData.jsx";
import { response } from "msw";


export default observer(function Test(props) {
  const { currentUser } = useContext(AuthContext);
  const [selections, setSelections] = useState({});
  const [openAIResponse, setOpenAIResponse] = useState(null);
  const navigate = useNavigate(); 
  const questionRefs = useRef(questions.map(() => React.createRef()));

  useEffect(() => {
    if (currentUser) {
      readFromFirebase(currentUser.uid, (savedState) => {
        if (savedState) setSelections(savedState);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && Object.keys(selections).length > 0) {
      saveToFirebase(currentUser.uid, selections);
    }
  }, [selections, currentUser]);

  const formatResponsesForOpenAI = () => {
    return Object.entries(selections)
      .map(([questionId, answer]) => {
        const matchingQuestion = questions.find(q => q.id === parseInt(questionId));
        if (!matchingQuestion) {
          console.error(`Question with ID ${questionId} not found`);
          return `Question ID: ${questionId}, Answer: ${answer}`;
        }
        return `Question: ${matchingQuestion.question}, Answer: ${answer}`;
      })
      .join('\n');
  };

  const handleSubmitTest = async () => {
    const formattedResponses = formatResponsesForOpenAI();
    try {
      const parsedResponse = await callChatGPT(formattedResponses);
      setOpenAIResponse(parsedResponse);
      setSelections({}); 
  
      await saveToFirebase(currentUser.uid, {}); 
      console.log("Test process cleared");
  
      navigate('/results', { state: { openAIResponse: parsedResponse } });
    } catch (error) {
      console.error("Error in submitting test:", error);
    }
  };

  function goToResults() {
    window.location.hash = "#/results";
  }

  function toTop() {
    document.documentElement.scrollIntoView({
      behavior:'smooth'
    })
  }

  const handleSelect = (index, value) => {
    setSelections((prevSelections) => {
      const updatedSelections = { ...prevSelections };
      if (updatedSelections[index] === value) {
        delete updatedSelections[index]; 
      } else {
        updatedSelections[index] = value; 
      }
  
      saveToFirebase(currentUser.uid, updatedSelections);
  
      setTimeout(() => {
        const nextQuestionIndex = Object.keys(updatedSelections).length;
        if (nextQuestionIndex < questions.length && questionRefs.current[nextQuestionIndex]) {
          const nextQuestionEl = questionRefs.current[nextQuestionIndex].current;
          if (nextQuestionEl) {
            nextQuestionEl.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }
      }, 0);
  
      return updatedSelections;
    });
  };  

  questionRefs.current = questions.map((_, i) => questionRefs.current[i] ?? React.createRef());

    return <TestView
            handleSelect={handleSelect}
            formatResponses={formatResponsesForOpenAI}
            openAIResponse={openAIResponse}
            handleSubmitTest={handleSubmitTest}
            goToResults={goToResults}
            toTop={toTop}
            selections={selections}
            questionRefs={questionRefs}
            />;
  }
);