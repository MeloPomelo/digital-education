import React from "react";
import Profile from "./Profile";
import { AiOutlineLogout } from "react-icons/ai"

class Header extends React.Component {
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "300px";
  //   document.getElementById("main").style.marginLeft = "300px";
  // }

  render() {
    return (
        <header className="main-header">
            <span onClick="openNav()" className="open-sidebar">☰ МЕНЮ</span>
            <Profile />
            <a href="/#" className="logout-button">
              <AiOutlineLogout className="logout-icon"/>
            </a>
        </header>
    )
  }
}

export default Header