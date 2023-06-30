import React from "react";
import MainHeader from "../pop-ups/MainHeader";
import "./Report.css";
const Report = () => {
  return (
    <div className="dashboard report">
      <MainHeader title={"Report"}>
        clients complaints and user Experience centre
      </MainHeader>
      <main>
        <h4>page is still in development version ...</h4>
        <p>we'll update this page after few minor changes in our site </p>
        <br />
        <small>thanks for being here with us. <br /> <big style={{fontSize:30}}>😊😊😊😊😊</big></small>
      </main>
    </div>
  );
};

export default Report;
