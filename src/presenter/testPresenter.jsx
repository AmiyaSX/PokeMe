import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../model/authContext.jsx";
import TestView from "../views/testView.jsx";
import { saveToFirebase, readFromFirebase } from "../model/firebaseModel.js";
import "/src/style.css";
import { observer } from "mobx-react-lite";
import _get_window_height from "../utilities";
import promiseNoDataView from "../views/promiseNoData.jsx";


export default observer(function Test(props) {
  const { currentUser } = useContext(AuthContext);
  const [selections, setSelections] = useState({});

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
        saveToFirebase(currentUser, selections);
    };


    return <TestView
            handleSelect={handleSelect}
            goToResults={goToResults}
            toTop={toTop}
            selections={selections}
            />;
  }
);