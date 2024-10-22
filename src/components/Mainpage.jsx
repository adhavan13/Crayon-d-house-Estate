import arrow from "../assets/to-right.png";
import profile from "../assets/profilepic.png";
import trash from "../assets/icons8-trash (2)-1.svg";
import "./Mainpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bed from "../assets/sleeping (1).png";
import bathtub from "../assets/bathtub.png";
import home from "../assets/home-agreement.png";
import plus from "../assets/plus.png";

function mainpage() {
  return (
    <div className="main-box">
      <div className="top-content">
        <div className="top-content-train">
          <p>Add Contacts</p>
        </div>
        <div>
          <img src={arrow} style={{ marginBottom: "7px" }} />
        </div>
        <div className="top-content-train">
          <p>Lead Details</p>
        </div>
        <div>
          <img src={arrow} style={{ marginBottom: "7px" }} />
        </div>
        <div className="top-content-train">
          <p>Preview and Create lead</p>
        </div>
        <div>
          <img src={arrow} style={{ marginBottom: "7px" }} />
        </div>
        <div className="top-content-train">
          <p>Quotation Details</p>
        </div>
        <div>
          <img src={arrow} style={{ marginBottom: "7px" }} />
        </div>

        <div className="top-content-number">
          <div className="top-content-number-inner">4</div>
        </div>
        <div className="top-content-train">
          <p className="top-content-train">Preview and Create</p>
        </div>
      </div>
      <div className="main-box-mid">
        <div className="mid-one">
          <div style={{ marginLeft: "24px", marginTop: "10px" }}>
            <p
              style={{
                color: "#4E5A6B",
                font: "font: normal normal bold 14px/19px Nunito Sans",
              }}
            >
              Lead Details
            </p>
          </div>

          <div className="prospect">
            <div className="prospect-img">
              <img src={profile} style={{ height: "80px", width: "80px" }} />
            </div>

            <div className="prospect-details">
              <div className="prospect-name">
                <p>Tom Cruise</p>
                <div className="prospect-role">
                  <p
                    style={{
                      fontSize: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    prospect
                  </p>
                </div>
              </div>

              <div className="prospect-contact">
                <p>+91 983546579</p>
                <p>Tomcurise123@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="quotation-details">
            <div>
              <div className="quotation-title">
                <p style={{ fontSize: "small", fontWeight: "lighter" }}>
                  Quotation Details
                </p>
              </div>

              <div className="quotation-date">
                <div className="date">
                  <p
                    style={{ fontSize: "8px", color: "#E4E8EE", height: "0px" }}
                  >
                    LEASE START DATE
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                    30 Jan 22
                  </p>
                </div>

                <div className="date">
                  <p
                    style={{ fontSize: "8px", color: "#E4E8EE", height: "0px" }}
                  >
                    {" "}
                    LEASE END DATE
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                    30 Jan 23
                  </p>
                </div>

                <div className="date">
                  <p
                    style={{ fontSize: "8px", color: "#E4E8EE", height: "0px" }}
                  >
                    RENT START DATE
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                    30 Jan 23
                  </p>
                </div>
              </div>

              <div className="quotation-summary">
                <div className="quotation-period">
                  <p
                    style={{ fontSize: "8px", color: "#E4E8EE", height: "0px" }}
                  >
                    GRACE PERIOD
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                    90 Days{" "}
                    <span style={{ fontSize: "8px", color: "#E4E8EE" }}>
                      (Beginning)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="quotation-button">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "#E4E8EE",
                  marginLeft: "24px",
                }}
              >
                Previous
              </button>
            </div>
          </div>
        </div>

        <div className="mid-two">
          <div className="two-title">
            <p>Unit Details</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="col-content">
                  <div className="content-img">
                    <div className="delete">
                      <img
                        src={trash}
                        style={{ marginLeft: "7px", marginBottom: "2px" }}
                      />
                    </div>
                  </div>

                  <div className="content-title">
                    <p>Jmreiah Estate</p>
                    <p>$ 1268.00</p>
                  </div>

                  <div className="content-subtitle">
                    <p>Jmreiah Golf Estate</p>
                    <div className="dot"></div>
                    <p>2000.Sq.Ft</p>
                  </div>

                  <div className="content-icons">
                    <img src={bed} style={{ height: "20px", width: "20px" }} />
                    <p>2</p>
                    <div className="dot"></div>
                    <img
                      src={bathtub}
                      style={{ height: "20px", width: "20px" }}
                    />
                    <p>2</p>
                    <div className="dot"></div>
                    <img src={home} style={{ height: "20px", width: "20px" }} />
                    <p>2BHK</p>
                  </div>

                  <div className="content-customize">
                    <img
                      src={plus}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginTop: "3px",
                      }}
                    />
                    <p>Customize</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="col-content">
                  <div className="content-img">
                    <div className="delete">
                      <img
                        src={trash}
                        style={{ marginLeft: "7px", marginBottom: "2px" }}
                      />
                    </div>
                  </div>

                  <div className="content-title">
                    <p>Jmreiah Estate</p>
                    <p>$ 1268.00</p>
                  </div>

                  <div className="content-subtitle">
                    <p>Jmreiah Golf Estate</p>
                    <div className="dot"></div>
                    <p>2000.Sq.Ft</p>
                  </div>

                  <div className="content-icons">
                    <img src={bed} style={{ height: "20px", width: "20px" }} />
                    <p>2</p>
                    <div className="dot"></div>
                    <img
                      src={bathtub}
                      style={{ height: "20px", width: "20px" }}
                    />
                    <p>2</p>
                    <div className="dot"></div>
                    <img src={home} style={{ height: "20px", width: "20px" }} />
                    <p>2BHK</p>
                  </div>

                  <div className="content-customize">
                    <img
                      src={plus}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginTop: "3px",
                      }}
                    />
                    <p>Customize</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="col-content">
                  <div className="content-img">
                    <div className="delete">
                      <img
                        src={trash}
                        style={{ marginLeft: "7px", marginBottom: "2px" }}
                      />
                    </div>
                  </div>

                  <div className="content-title">
                    <p>Jmreiah Estate</p>
                    <p>$ 1268.00</p>
                  </div>

                  <div className="content-subtitle">
                    <p>Jmreiah Golf Estate</p>
                    <div className="dot"></div>
                    <p>2000.Sq.Ft</p>
                  </div>

                  <div className="content-icons">
                    <img src={bed} style={{ height: "20px", width: "20px" }} />
                    <p>2</p>
                    <div className="dot"></div>
                    <img
                      src={bathtub}
                      style={{ height: "20px", width: "20px" }}
                    />
                    <p>2</p>
                    <div className="dot"></div>
                    <img src={home} style={{ height: "20px", width: "20px" }} />
                    <p>2BHK</p>
                  </div>

                  <div className="content-customize">
                    <img
                      src={plus}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginTop: "3px",
                      }}
                    />
                    <p>Customize</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="col-content">
                  <div className="content-img">
                    <div className="delete">
                      <img
                        src={trash}
                        style={{ marginLeft: "7px", marginBottom: "2px" }}
                      />
                    </div>
                  </div>

                  <div className="content-title">
                    <p>Jmreiah Estate</p>
                    <p>$ 1268.00</p>
                  </div>

                  <div className="content-subtitle">
                    <p>Jmreiah Golf Estate</p>
                    <div className="dot"></div>
                    <p>2000.Sq.Ft</p>
                  </div>

                  <div className="content-icons">
                    <img src={bed} style={{ height: "20px", width: "20px" }} />
                    <p>2</p>
                    <div className="dot"></div>
                    <img
                      src={bathtub}
                      style={{ height: "20px", width: "20px" }}
                    />
                    <p>2</p>
                    <div className="dot"></div>
                    <img src={home} style={{ height: "20px", width: "20px" }} />
                    <p>2BHK</p>
                  </div>

                  <div className="content-customize">
                    <img
                      src={plus}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginTop: "3px",
                      }}
                    />
                    <p>Customize</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-three">
          <div>
            <div className="three-summary">
              <p style={{ color: "#4E5A6B", fontSize: "medium" }}>
                Quotation Summary
              </p>
            </div>

            <div className="three-bill">
              <div className="three-bill-up">
                <div>
                  <div className="three-bill-one">
                    <p
                      className="l"
                      style={{ color: "#4E5A6B", fontSize: "small" }}
                    >
                      DESCRIPTION
                    </p>
                    <p style={{ color: "#4E5A6B", fontSize: "small" }}>QTY</p>
                    <p
                      style={{
                        color: "#4E5A6B",
                        fontSize: "small",
                        marginRight: "10px",
                      }}
                    >
                      AMOUNT
                    </p>
                  </div>
                </div>

                <div>
                  <div className="three-bill-two">
                    <p
                      className="l"
                      style={{ color: "#4E5A6B", fontSize: "medium" }}
                    >
                      Total Amount
                    </p>
                    <p style={{ color: "#4E5A6B", fontSize: "medium" }}>3</p>
                    <p
                      style={{
                        fontSize: "medium",
                        marginRight: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      $ 3600.00
                    </p>
                  </div>
                </div>

                <div>
                  <div className="three-bill-three">
                    <p
                      className="l"
                      style={{ color: "#4E5A6B", fontSize: "medium" }}
                    >
                      Total Discount
                    </p>
                    <p
                      style={{
                        color: "#4E5A6B",
                        fontSize: "medium",
                        marginRight: "25px",
                      }}
                    >
                      10%
                    </p>
                    <p
                      style={{
                        color: "#4E5A6B",
                        fontSize: "medium",
                        marginRight: "10px",
                      }}
                    >
                      -$ 100
                    </p>
                  </div>
                </div>

                <div>
                  <div className="three-bill-four">
                    <p
                      className="l"
                      style={{ color: "#4E5A6B", fontSize: "medium" }}
                    >
                      Total Refundalbe
                    </p>
                    <p
                      style={{
                        color: "#4E5A6B",
                        fontSize: "medium",
                        marginRight: "20px",
                      }}
                    >
                      0%
                    </p>
                    <p
                      style={{
                        color: "#4E5A6B",
                        fontSize: "medium",
                        marginRight: "10px",
                      }}
                    >
                      $0.00
                    </p>
                  </div>
                </div>

                <div>
                  <div className="three-bill-five">
                    <p
                      className="l"
                      style={{ color: "#4E5A6B", fontSize: "medium" }}
                    >
                      Total Tax
                    </p>
                    <p style={{ color: "#4E5A6B", fontSize: "medium" }}>18%</p>
                    <p
                      style={{
                        fontSize: "medium",
                        marginRight: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      $ 648.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="three-bill-down">
                <p className="l" style={{ fontWeight: "bold" }}>
                  Quote Amount
                </p>
                <p style={{ marginRight: "10px", fontWeight: "bold" }}>
                  $ 4180.00
                </p>
              </div>
            </div>
          </div>

          <div className="three-bottom">
            <div className="three-bottom-css">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "#E4E8EE",
                }}
              >
                Cancel
              </button>

              <button className="btn btn-primary">Create Quotation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mainpage;
