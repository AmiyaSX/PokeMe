import TestResultsView from "../views/testResultsView";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function TestResult(props){

        const handleTryAgain = () => {
            window.location.hash = "#/test"; 
            console.log("Try Again clicked");
        };
        const handleSaveResult = () => {
            console.log("Save My Result clicked");
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
                handleShare={handleShare} 
               />;
    }
);
