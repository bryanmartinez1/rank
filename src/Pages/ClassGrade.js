import React, { useEffect, useState } from "react";
import AddClass from "./Component/addClass.js";
import CourseHolder from "./Component/courseHolder.js";
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
  const [courseNameList, setCourseNameList] = useState([]);
  const [gradesList, setGradesList] = useState([]);
  const [creditsList, setCreditsList] = useState([]);

  const [deleteIndex, setDeleteIndex] = useState();
  const [deleteBool, setDeleteBool] = useState(false);

  useEffect(() => {
    console.log("Test 1");
    setFinalGrade(gradeCalc(gradesList, creditsList));
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
      <AddClass
        setName={setCourseName}
        setGrade={setGrade}
        setCredits={setCredits}
      />
      <button onClick={() => addCourseFunction()}>ADD</button>
      <div className="bubble">{finalGrade.toFixed(2)}</div>
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
    </div>
  );
}

export default ClassGrade;
