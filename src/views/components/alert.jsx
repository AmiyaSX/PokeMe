import React, { useEffect } from 'react';
import "/src/style.css";

const Alert = ({ message }) => {
    return (
      <div className="modal-content">
        <p>{message}</p>
      </div>
    );
  };
  
  export default Alert;
  
