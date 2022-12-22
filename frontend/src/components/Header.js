import React from "react";
import Profile from "./Profile";
import logout from "../img/logout.png"

class Header extends React.Component {
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "300px";
  //   document.getElementById("main").style.marginLeft = "300px";
  // }

  render() {
    return (
        <header className="main-header">
            <Profile />
            <a a href="/#" className="logout-button">
              <img width="50px" height="50px" src={logout}></img>
            </a>
        </header>
    )
  }
}

export default Header