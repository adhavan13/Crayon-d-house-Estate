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
          src={sidebararrow}      className="sidebar-arrow"
          onClick={handleToggle}
          style={clicked ? {transform:"rotate(180deg)", transition: "transform 0.5s ease-in-out"}: {transform:"rotate(0deg)",transition:"transform 0.5s ease-in-out"}}
           
        />
        <div className="line"></div>
        <div className='hover-img'> 
          <img src={menu} className="img" />
        </div>
       <div className='hover-img'>
          <img src={groupicon} className="img" />
       </div>
        
        <img src={taskbar} className="img" />
        <img src={ticket} className="img" />
        <img src={settings} className="img" />
        <img src={drive} className="img" />
        <img src={file} className="img" />
        <img src={box} className="img" />
        <img src={msg} className="img" />
      </div>

        <div className="sidebar-toggle" style={ clicked ? {left:"73px",transition:"0.5s"}:{left:"-300px",transition:"0.5s"}}>
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
