import arrow from "../assets/icons8-expand-arrow.svg";
import downarrow from "../assets/icons8-expand-arrow-1.svg";
import "./Title.css";

function Title() {
  return (
    <div className="title-box">

     <div className="title-title">
        <div className="arrow-left">
            <img src={arrow} style={{marginTop:"15px",height:"20px",width:"20px"}}/>
        </div>

        <div className="title-text">
            <p>Create Quotation to Existing Lead</p>
        </div>
     </div>


      <div className="dropdown">
        <div className="inside-button">
          <p style={{textAlign:"center",marginTop:"15px"}}>Casagrand</p>
          <img src={downarrow} style={{height:"20px",width:"20px"}}/>
        </div>
      </div>


    </div>
  );
}

export default Title;
