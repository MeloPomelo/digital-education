import React from "react";
import Profile from "./Profile";
import logoutImg from "../img/logout.png"
import homeIcon from "./img/home.svg"

const logout = () => {
  sessionStorage.removeItem("token")
  window.location.reload()
}

class Header extends React.Component {
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "300px";
  //   document.getElementById("main").style.marginLeft = "300px";
  // }

  render() {
    return (
        <header className="main-header">
            <Profile />
            <a className="home-icon">
              <img src={homeIcon} width="50px" height="50px"/>
            </a>
            <a className="logout-button">
              <img width="50px" height="50px" onClick={logout} src={logoutImg} />
            </a>
        </header>
    )
  }
}

export default Header