import React, { useState } from "react";
import "./deleteAll.css";

function DeleteAll(props) {
  function deleteAllFunction() {
    props.setDeleteNames([]);
    props.setDeleteGrades([]);
    props.setDeleteCredits([]);
    toggle();
  }
  const [confirmScreen, setConfirmScreen] = useState(false);
  function toggle() {
    setConfirmScreen(!confirmScreen);
  }
  return (
    <>
      <div className="deleteHolder" onClick={() => toggle()}>
        DELETE ALL
      </div>
      {confirmScreen && (
        <div className="pop-up">
          <div className="overlay" onClick={() => toggle()} />
          <div className="pop-up-content">
            <h2>Hello Pop Up Screen</h2>
            <p>Are you sure you want to delete all previoulsy entered data?</p>
            <div className="confirmButtonHolder">
              <button className="closePopUp" onClick={() => toggle()}>
                x
              </button>
              <button className="yesButton" onClick={() => deleteAllFunction()}>
                Yes
              </button>
              <button className="noButton" onClick={() => toggle()}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteAll;
