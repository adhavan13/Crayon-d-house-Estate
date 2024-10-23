import React, { useState,state } from "react";

import "./Wrapper.css";
import Mainpage from "./Mainpage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Title from "./Title";
import "bootstrap/dist/css/bootstrap.min.css";
import HouseToggle from "./House_toggle";

function Wrapper() {

const [house,sethouse]=useState(false);



const handleToggleHouse = () =>{
  sethouse(!house);
  console.log(house);
}

  return (
    <div className="main">

      {house && <div className="overlay"> </div>}

      <div>
      { house && <HouseToggle ifclick={handleToggleHouse}/>}
      </div>
      

      <div className="top-header">
        <Header />
      </div>

      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="center">
          <div className="title">
            <Title />
          </div>

          <div className="main-content">
            <Mainpage ifclick={handleToggleHouse}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
