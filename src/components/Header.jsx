import logo from "../assets/DNT Logo White-04.png";
import bell from "../assets/Group 838.svg";
import profile from "../assets/profilepic.png";
import downarrow from "../assets/icons8-expand-arrow-1.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header-box">
      <div className="header-left">
        <div>
          <img src={logo} className="header-logo" />
        </div>

        <div className="header-line"></div>

        <div className="header-slogan">PROPERTY MANAGEMENT SOLUTION</div>
      </div>

      <div className="header-search">
        <input type="search" placeholder="search" />
      </div>

      <div className="header-right">
        <div>
          <img src={bell} className="header-bell" />
        </div>

        <div className="header-line"></div>

        <div className="header-profile">
          <div className="header-profile-pic">
            <img src={profile} />
          </div>

          <div className="header-profile-name">
            <p className="name1">Bala Ganesh</p>
            <p className="name2">Super Admin</p>
          </div>

          <div className="header-arrow">
            {" "}
            <img src={downarrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
