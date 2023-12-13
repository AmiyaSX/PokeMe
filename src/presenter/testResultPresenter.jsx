import TestResultsView from "../views/testResultsView";
import React, { useState, useContext } from "react";
import { AuthContext } from "../model/authContext";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function TestResult(props){

        const { currentUser } = useContext(AuthContext);

        const handleTryAgain = () => {
            window.location.hash = "#/test"; 
            document.documentElement.scrollIntoView({
                behavior:'smooth'
              })
            console.log("Try Again clicked");
        };
        const handleSaveResult = () => {
            console.log("Save My Result clicked");
        };

        const toggleDropdown = () => {
            const dropdown = document.getElementById("myDropdown");
            if (dropdown.style.display === "none" || !dropdown.style.display) {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        };        
        const handleFacebookShare = () => {
            window.open(
                "https://www.facebook.com/sharer/sharer.php?u=" +
                "https://pokeme-dh2642.web.app",
                "_blank"
            );
        };
        const handleTwitterShare = () => {
            window.open(
                "https://twitter.com/intent/tweet?url=" +
                encodeURIComponent("https://pokeme-dh2642.web.app") +
                "&text=" + encodeURIComponent("Check this out!"),
                "_blank"
            );
        };
        const handleLinkedInShare = () => {
            window.open(
                "https://www.linkedin.com/shareArticle?mini=true&url=" +
                encodeURIComponent("https://pokeme-dh2642.web.app") +
                "&title=" + encodeURIComponent("My Shared Content") +
                "&summary=" + encodeURIComponent("This is a great content to share!") +
                "&source=" + encodeURIComponent("Website"),
                "_blank"
            );
        };
        
        return <TestResultsView 
            handleTryAgain={handleTryAgain}
            handleSaveResult={handleSaveResult}
            toggleDropdown={toggleDropdown}
            handleFacebookShare={handleFacebookShare}
            handleTwitterShare={handleTwitterShare}
            handleLinkedInShare={handleLinkedInShare}
               />;
    }
);
