import React, { useEffect, useState } from "react";
import AddClass from "./Component/addClass.js";
import CourseHolder from "./Component/courseHolder.js";
import DeleteAll from "./Component/deleteAll.js";
import "./Styles/gpa.css";

function ClassGrade() {
  // Hash Map
  var gradeMap = new Map();
  gradeMap.set("A+", 100);
  gradeMap.set("A", 96);
  gradeMap.set("A-", 92);
  gradeMap.set("B+", 89);
  gradeMap.set("B", 86);
  gradeMap.set("B-", 82);
  gradeMap.set("C+", 79);
  gradeMap.set("C", 76);
  gradeMap.set("C-", 72);
  gradeMap.set("D+", 69);
  gradeMap.set("D", 66);
  gradeMap.set("D-", 62);
  gradeMap.set("F", 69);

  function gradeCalc(gradesList, creditsList) {
    let tempFinalGrade = 0;
    if (gradesList.length === 0) {
      return 0;
    }
    let tempGradeArray = gradesList;

    for (let i = 0; i < gradesList.length; i++) {
      if (gradeMap.has(tempGradeArray[i])) {
        tempGradeArray[i] = gradeMap.get(tempGradeArray[i]);
      } else {
        tempGradeArray[i] = Number(tempGradeArray[i]);
      }
      tempFinalGrade += tempGradeArray[i] * (Number(creditsList[i]) / 100);
    }
    return tempFinalGrade;
  }

  const [courseName, setCourseName] = useState("");
  const [courseGrade, setGrade] = useState("A+");
  const [courseCredits, setCredits] = useState(-1);
  const [finalGrade, setFinalGrade] = useState(0);
  const [finalGradeLetter, setFinalGradeLetter] = useState("F");
  const [courseNameList, setCourseNameList] = useState([]);
  const [gradesList, setGradesList] = useState([]);
  const [creditsList, setCreditsList] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState();
  const [deleteBool, setDeleteBool] = useState(false);

  useEffect(() => {
    let tempGrade = gradeCalc(gradesList, creditsList).toFixed(2);
    setFinalGrade(tempGrade);

    if (tempGrade >= 97) {
      document.getElementById("bubble1").style.backgroundColor = "#1790d0";
      document.getElementById("bubble2").style.backgroundColor = "#1790d0";
      setFinalGradeLetter("A+");
    } else if (tempGrade >= 93) {
      document.getElementById("bubble1").style.backgroundColor = "#50C878";
      document.getElementById("bubble2").style.backgroundColor = "#50C878";
      setFinalGradeLetter("A");
    } else if (tempGrade >= 90) {
      document.getElementById("bubble1").style.backgroundColor = "#50C878";
      document.getElementById("bubble2").style.backgroundColor = "#50C878";
      setFinalGradeLetter("A-");
    } else if (tempGrade >= 87) {
      document.getElementById("bubble1").style.backgroundColor = "#bdfb40";
      document.getElementById("bubble2").style.backgroundColor = "#bdfb40";
      setFinalGradeLetter("B+");
    } else if (tempGrade >= 83) {
      document.getElementById("bubble1").style.backgroundColor = "#bdfb40";
      document.getElementById("bubble2").style.backgroundColor = "#bdfb40";
      setFinalGradeLetter("B");
    } else if (tempGrade >= 80) {
      document.getElementById("bubble1").style.backgroundColor = "#bdfb40";
      document.getElementById("bubble2").style.backgroundColor = "#bdfb40";
      setFinalGradeLetter("B-");
    } else if (tempGrade >= 77) {
      document.getElementById("bubble1").style.backgroundColor = "#fbdd40";
      document.getElementById("bubble2").style.backgroundColor = "#fbdd40";
      setFinalGradeLetter("C+");
    } else if (tempGrade >= 73) {
      document.getElementById("bubble1").style.backgroundColor = "#fbdd40";
      document.getElementById("bubble2").style.backgroundColor = "#fbdd40";
      setFinalGradeLetter("C");
    } else if (tempGrade >= 70) {
      document.getElementById("bubble1").style.backgroundColor = "#fbdd40";
      document.getElementById("bubble2").style.backgroundColor = "#fbdd40";
      setFinalGradeLetter("C-");
    } else if (tempGrade >= 67) {
      document.getElementById("bubble1").style.backgroundColor = "#fbb040";
      document.getElementById("bubble2").style.backgroundColor = "#fbb040";
      setFinalGradeLetter("D+");
    } else if (tempGrade >= 63) {
      document.getElementById("bubble1").style.backgroundColor = "#fbb040";
      document.getElementById("bubble2").style.backgroundColor = "#fbb040";
      setFinalGradeLetter("D");
    } else if (tempGrade >= 60) {
      document.getElementById("bubble1").style.backgroundColor = "#fbb040";
      document.getElementById("bubble2").style.backgroundColor = "#fbb040";
      setFinalGradeLetter("D-");
    } else {
      document.getElementById("bubble1").style.backgroundColor = "#FF3131";
      document.getElementById("bubble2").style.backgroundColor = "#FF3131";
      setFinalGradeLetter("F");
    }
  }, [courseNameList, gradesList, creditsList]);

  function addCourseFunction() {
    if (!/^[A-F][\+\-]?$/.test(courseGrade) && isNaN(Number(courseGrade))) {
      alert(
        "Invalid Course Grade, Please put in the form of (A+, A, A-, ..., D+, D, D-, F) or a number"
      );
      return;
    }
    if (courseCredits < 0) {
      alert("Invalid Credits, Must be Greater than 0 (zero)");
      return;
    }
    setCourseNameList([...courseNameList, courseName]);
    setGradesList([...gradesList, courseGrade]);
    setCreditsList([...creditsList, courseCredits]);
  }
  useEffect(() => {
    if (deleteBool === true) {
      const updatedNameList = [...courseNameList];
      const updatedGradeList = [...gradesList];
      const updatedCreditsList = [...creditsList];

      updatedNameList.splice(deleteIndex, 1);
      updatedGradeList.splice(deleteIndex, 1);
      updatedCreditsList.splice(deleteIndex, 1);

      setCourseNameList(updatedNameList);
      setGradesList(updatedGradeList);
      setCreditsList(updatedCreditsList);

      setDeleteBool(false);
    }
  }, [deleteBool]);

  return (
    <div className="bodyPart">
      <div className="pageTitle">Calculate Class Grade</div>
      <AddClass
        setName={setCourseName}
        setGrade={setGrade}
        setCredits={setCredits}
      />
      <button className="addButton" onClick={() => addCourseFunction()}>
        +
      </button>
      <div className="bubbleHolder">
        <div className="bubble" id="bubble1">
          {finalGrade}
        </div>
        <div className="equalSign">=</div>
        <div className="bubble" id="bubble2">
          {finalGradeLetter}
        </div>
      </div>
      <div className="coursesDisplay">
        {courseNameList.map((name, index) => (
          <CourseHolder
            name={name}
            grade={gradesList[index]}
            credits={creditsList[index]}
            index={index}
            setDeleteIndex={setDeleteIndex}
            setDeleteBool={setDeleteBool}
          />
        ))}
      </div>
      {courseNameList.length > 1 && (
        <DeleteAll
          setDeleteNames={setCourseNameList}
          setDeleteGrades={setGradesList}
          setDeleteCredits={setCreditsList}
        />
      )}
    </div>
  );
}

export default ClassGrade;
