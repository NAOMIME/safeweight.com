import React from "react";
import notiIcon from "../icons/notificationsIcon.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div style={{ position: "relative" }}>
          <div className="MenuIcon">
            <a id="nav-toggle" className="" href="#">
              <span></span>
            </a>
          </div>
          <h3 style={{ marginTop: 10, marginLeft: 100, position: "relative" }}>
            {this.props.title}
          </h3>
        </div>
        <ul className="registerUl" style={{justifyContent: "center", display: "flex"}}>
          <li style={{ marginTop: 10, marginLeft: 100, position: "relative" }}><a href="/signup">Sign up</a></li>
          <li style={{ marginTop: 10, marginLeft: 100, position: "relative" }}><a href="/login">Log in</a></li>
        </ul>
        <img
          style={{ marginTop: 5, marginRight: 10 }}
          className="defaultIcons"
          src={notiIcon}
        />
      </header>
    );
  }
}

export default Header;
