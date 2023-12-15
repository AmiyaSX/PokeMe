import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../model/authContext";
import { readHistoryFromFirebase } from "../model/firebaseModel";
import Banner from "./components/banner";
import HistoryItem from "./components/historyItem";
import "/src/style.css";

const HistoryView = ({ history, formatDate, goToTest, goHome }) => {  
  return (
    <div>
      <Banner text="Your Pokemon History" />
      <div>
        {history.map((item, index) => {
          if (!item.pokemon) {
            return null; 
          }
          return (
            <HistoryItem
              key={index}
              image={`https://img.pokemondb.net/artwork/large/${item.pokemon.toLowerCase()}.jpg`}
              intro={`Reason: ${item.reason}`}
              date={formatDate(item.date)} 
            />
          );
        })}
      </div>
      <div className="flextRowParent">
        <button className="button_2" onClick={goHome}>
          <div style={{ fontSize: "2.5vh" }}>Home</div>
        </button>
        <button className="button_2" onClick={goToTest}>
          <div style={{ fontSize: "2.5vh" }}>Go to Test!</div>
        </button>
      </div>
    </div>
  );
}

export default HistoryView;
