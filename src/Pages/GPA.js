import React from "react";

function GPA() {
  // Hash Map
  var gradeMap = {};
  gradeMap["A+"] = 4.0;
  gradeMap["A"] = 4.0;
  gradeMap["A-"] = 3.7;
  gradeMap["B+"] = 3.3;
  gradeMap["B"] = 3.0;
  gradeMap["B-"] = 2.7;
  gradeMap["C+"] = 2.3;
  gradeMap["C"] = 2.0;
  gradeMap["C-"] = 1.7;
  gradeMap["D+"] = 1.3;
  gradeMap["D"] = 1.0;
  gradeMap["D-"] = 0.7;
  gradeMap["F"] = 0.0;

  let gradesList = ["A+", "A-", "D", "C"];
  let creditsList = [3, 3, 3, 3];

  function gpaCalc(gradesList, creditsList) {
    let totalPoints = 0;
    let totalCredits = 0;
    for (let i = 0; i < gradesList.length; i++) {
      totalPoints += gradeMap[gradesList[i]] * creditsList[i];
      totalCredits += creditsList[i];
    }
    let tempGPA = totalPoints / totalCredits;
    tempGPA = Math.round(tempGPA * 1000) / 1000;
    return tempGPA;
  }

  let gpa = gpaCalc(gradesList, creditsList);
  return <div>GPA {gpa}</div>;
}

export default GPA;
