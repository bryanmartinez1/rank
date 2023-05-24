import React, { useState } from "react";
import "./courseHolder.css";
import deleteIMG from "./images/delete.png";

function CourseHolder(props) {
  function deleteCourse() {
    props.setDeleteIndex(props.index);
    props.setDeleteBool(true);
  }

  let colors = [
    "#efbbff",
    "#bae1ff ",
    "#baffc9 ",
    "#ffffba ",
    "#ffdfba ",
    "#ffb3ba",
  ];

  return (
    <div
      className="holder"
      style={{ backgroundColor: colors[props.index % 6] }}
    >
      <div className="holderText">{props.name}</div>
      <div className="holderText">{props.grade}</div>
      <div className="holderText">{props.credits}</div>
      <img
        className="deleteButton"
        src={deleteIMG}
        onClick={() => deleteCourse()}
      />
    </div>
  );
}

export default CourseHolder;
