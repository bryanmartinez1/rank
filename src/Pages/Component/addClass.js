import React, { useState } from "react";
import "./addClass.css";

function AddClass(props) {
  return (
    <div className="addHolder">
      <div className="addRows">
        <div className="addCol">
          Name
          <input
            type="text"
            id="nameInput"
            placeholder="name"
            maxLength={25}
            onChange={() =>
              props.setName(document.getElementById("nameInput").value)
            }
          />
        </div>
        <div className="addCol">
          Grade
          <input
            type="text"
            id="gradeInput"
            placeholder="grade"
            maxLength={25}
            onChange={() =>
              props.setGrade(document.getElementById("gradeInput").value)
            }
          />
        </div>
        <div className="addCol">
          Worth
          <input
            type="number"
            id="creditsInput"
            placeholder="worth"
            maxLength={25}
            onChange={() =>
              props.setCredits(document.getElementById("creditsInput").value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AddClass;
