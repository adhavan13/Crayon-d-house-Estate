import React, { useState} from 'react';

import "./Sidebar.css";
import sidebararrow from "../assets/icons8-expand-arrow.svg";
import menu from "../assets/Group 8127.svg";
import groupicon from "../assets/owner (1).svg";
import taskbar from "../assets/Leads.svg";
import ticket from "../assets/Request Ticket.svg";
import settings from "../assets/Path 93425.svg";
import drive from "../assets/cloud-computing.svg";
import file from "../assets/Group 8128-3.svg";
import box from "../assets/Group 8128-3.svg";
import msg from "../assets/Group 8128-2.svg";

function Sidebar() {

    const [clicked,setcliked] = useState(false);

    const handleToggle= () =>{
        setcliked(!clicked);
    }

  return (
    <div style={{display:"flex"}}>
      <div className="sidebar-box" >
        <img
          src={sidebararrow}
          className="sidebar-arrow"
          onClick={handleToggle}
          style={clicked ? {transform:"rotate(180deg)"}: {transform:"rotate(0deg)"}}
           
        />
        <div className="line"></div>
        <img src={menu} className="img1" />
        <img src={groupicon} className="img2" />
        <img src={taskbar} className="img4" />
        <img src={ticket} className="img5" />
        <img src={settings} className="img6" />
        <img src={drive} className="img7" />
        <img src={file} className="img8" />
        <img src={box} className="img9" />
        <img src={msg} className="img10" />
      </div>

        <div className="sidebar-toggle" style={ clicked ? {display:"block"}:{display:"none"}}>
            <div className="sidebar-name">
                <p>Dashboard</p>
                <p>Component</p>
                <p>Owner</p>
                <p>Properties</p>
                <p>Settings</p>
                <p>Data Storage</p>
                <p>Report</p>
                <p>Document</p>
                <p>Comment</p>
            </div>
        </div>

    </div>
  );
}

export default Sidebar;
