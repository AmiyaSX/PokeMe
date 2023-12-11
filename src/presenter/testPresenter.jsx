import TestView from "../views/testView.jsx";
import React, { useState } from "react";
import "/src/style.css";
import { observer } from "mobx-react-lite";
import _get_window_height from "../utilities";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Test(props){

        const [selections, setSelections] = useState({});

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
              if (prevSelections[index] === value) {
                const updatedSelections = { ...prevSelections };
                delete updatedSelections[index];
                return updatedSelections;
              } else {
                document.documentElement.scrollTo({
                  top: (_get_window_height()/2.9)*index + _get_window_height()/4.8,
                  behavior:'smooth'
                })
              }
              return {
                ...prevSelections,
                [index]: value,
              };
            });
        };


        return <TestView
                handleSelect={handleSelect}
                goToResults={goToResults}
                toTop={toTop}
                selections={selections}
               />;
    }
);