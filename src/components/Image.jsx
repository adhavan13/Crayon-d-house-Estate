import trash from "../assets/icons8-trash (2)-1.svg";
import "./Mainpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bed from "../assets/sleeping (1).png";
import bathtub from "../assets/bathtub.png";
import home from "../assets/home-agreement.png";
import plus from "../assets/plus.png";

function Image({datas,ifclick}) {
  return (
    <div className="col-md-6">
      <div className="col-content">
        <div className="content-img" onClick={() => ifclick()}>
          <div className="delete">
            <img
              src={trash}
              style={{ marginLeft: "7px", marginBottom: "2px" }}
            />
          </div>
        </div>

        <div className="content-title">
          <p>{datas.title}</p>
          <p>$ {datas.amount}</p>
        </div>

        <div className="content-subtitle">
          <p>{datas.title}</p>
          <div className="dot"></div>
          <p>{datas.area}.Sq.Ft</p>
        </div>

        <div className="content-icons">
          <img src={bed} style={{ height: "20px", width: "20px" }} />
          <p>{datas.bedroom}</p>
          <div className="dot"></div>
          <img src={bathtub} style={{ height: "20px", width: "20px" }} />
          <p>{datas.bathroom}</p>
          <div className="dot"></div>
          <img src={home} style={{ height: "20px", width: "20px" }} />
          <p>{datas.bedroom}BHK</p>
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
  );
}

export default Image;
