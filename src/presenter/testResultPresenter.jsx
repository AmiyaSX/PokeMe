import React, { useState, useContext, useEffect } from "react";
import { callChatGPT } from "../model/openai/GetPersonalityMatch";
import { useLocation } from 'react-router-dom'; //
import { AuthContext } from "../model/authContext";
import TestResultsView from "../views/testResultsView";
import { observer } from "mobx-react-lite";


export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function TestResult(props){
        const location = useLocation();
        const { openAIResponse } = location.state || {};
        const { currentUser } = useContext(AuthContext);
        const [testResult, setTestResult] = useState(null);  // Use destructuring to get openAIResponse from state
        
        useEffect(() => {
            if (openAIResponse) {
              setTestResult(openAIResponse);
            }
          }, [location, openAIResponse]);
        

        const handleTryAgain = () => {
            window.location.hash = "#/test"; 
            document.documentElement.scrollIntoView({
                behavior:'smooth'
              })
            console.log("Try Again clicked");
        };
 
        const handleSaveResult = () => {
            if (testResult) {
              saveResultToHistory(currentUser.uid, testResult);
              console.log("Saved to history:", testResult);
            }
        };
    
        const handleShare = () => {
            window.open(
            "https://www.facebook.com/sharer/sharer.php?u=" +
                "https://pokeme-dh2642.web.app",
            "_blank"
            );
        };
        return <TestResultsView 
                handleTryAgain={handleTryAgain} 
                handleSaveResult={handleSaveResult} 
                testResult={testResult}
                handleShare={handleShare} 
               />;
    }
);
