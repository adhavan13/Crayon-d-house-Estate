import React, { useState } from "react";

import "./Wrapper.css";
import Mainpage from "./Mainpage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Title from "./Title";
import "bootstrap/dist/css/bootstrap.min.css";
import house1 from "../assets/download-23.png";
import house2 from "../assets/hall.jpg";
import house3 from "../assets/garden.jpg";
import house4 from "../assets/kitchen.jpg";
import house5 from "../assets/bedroom.jpg";
import bed from "../assets/sleeping (1).png";
import bathtub from "../assets/bathtub.png";
import home from "../assets/home-agreement.png";
import cancel from "../assets/close.png";
import handbook from "../assets/book.png";

function Wrapper() {
  const [house, sethouse] = useState(false);

  const handleHouseToggle = () => {
    sethouse(true);
  };

  return (
    <div className="main">
      <div className="house-toggle">
        <div className="house-info">
          <div className="house-title">
            <p style={{ fontWeight: "bold" }}>Unit Detials</p>
            <img
              src={cancel}
              className="image-cancel"
              onclick={handleHouseToggle}
              style={house ? {display:"none"} : {display:"block"}}
              
            />
          </div>

          <div className="house-content">
            <div className="content-left">
              <div className="images">
                <div className="left-img1">
                  <img
                    src={house1}
                    style={{
                      width: "220px",
                      height: "158px",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <div className="left-right-img">
                  <div className="vessel">
                    <div className="vessel1">
                      <img src={house2} style={{ marginLeft: "8px" }} />
                      <img src={house3} style={{ marginLeft: "8px" }} />
                    </div>
                    <div className="vessel1">
                      <img
                        src={house4}
                        style={{ marginTop: "8px", marginLeft: "8px" }}
                      />
                      <img
                        src={house5}
                        style={{ marginTop: "8px", marginLeft: "8px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="vessel-des">
                <p style={{ fontWeight: "bold" }}>Jumreiah Estate</p>
                <div className="vessel-des-box">
                  <p>UNR-1234</p>
                </div>
              </div>

              <div className="vessel-subtitle" style={{ width: "386px" }}>
                <p style={{ fontWeight: "medium", color: "#cfcfcf" }}>
                  Rubix,Apartment, K Tower, Floor 1
                </p>
              </div>

              <div className="content-icon">
                <img src={bed} style={{ height: "20px", width: "20px" }} />
                <p>2</p>
                <div className="dot"></div>
                <img src={bathtub} style={{ height: "20px", width: "20px" }} />
                <p>2</p>
                <div className="dot"></div>
                <img src={home} style={{ height: "20px", width: "20px" }} />
                <p>2BHK</p>
                <div className="dot"></div>
                <p>2000 Sq.Ft</p>
              </div>

              <div className="content-down">
                <div style={{ display: "flex" }}>
                  <img
                    src={handbook}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <p style={{ fontWeight: "bold", color: "#696a6b" }}>
                    Handbook
                  </p>
                </div>

                <p style={{ color: "#5078e1" }}>View/Download</p>
              </div>
            </div>

            <div className="house-right">
              <div className="right-box">
                <div className="right-box-top">
                  <div className="one">
                    <p
                      style={{
                        fontSize: "larger",
                        fontWeight: "bold",
                        marginLeft: "15px",
                      }}
                    >
                      UNIT PRICING DETAILS
                    </p>
                  </div>

                  <div className="two">
                    <p
                      style={{
                        marginLeft: "15px",
                        color: " #4e5a6b",
                        fontWeight: "bolder",
                      }}
                    >
                      Bill Name Here
                    </p>
                    <p
                      style={{
                        marginLeft: "15px",
                        color: " #4e5a6b",
                        fontWeight: "bolder",
                      }}
                    >
                      $1000
                    </p>
                  </div>

                  <div className="three">
                    <p style={{ color: " #4e5a6b", fontSize: "small" }}>
                      Discount
                    </p>
                    <p style={{ color: " #4e5a6b", fontSize: "small" }}>10%</p>
                  </div>

                  <div className="two">
                    <p
                      style={{
                        marginLeft: "15px",
                        color: " #4e5a6b",
                        fontWeight: "bolder",
                      }}
                    >
                      Bill Name Here
                    </p>
                    <p
                      style={{
                        marginLeft: "15px",
                        color: " #4e5a6b",
                        fontWeight: "bolder",
                      }}
                    >
                      $1000
                    </p>
                  </div>

                  <div className="three">
                    <p style={{ color: " #4e5a6b", fontSize: "small" }}>
                      Discount
                    </p>
                    <p style={{ color: " #4e5a6b", fontSize: "small" }}>10%</p>
                  </div>

                  <div className="four">
                    <p>Bill Name here</p>
                    <p>$1000</p>
                  </div>

                  <div className="four">
                    <p>Bill Name here</p>
                    <p>$1000</p>
                  </div>

                  <div className="four">
                    <p>Bill Name here</p>
                    <p>$1000</p>
                  </div>
                </div>

                <div className="right-box-button">
                  <p>Final Total</p>
                  <p>$1000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <Mainpage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
