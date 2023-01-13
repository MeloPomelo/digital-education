import React from "react";
import Profile from "./Profile";
import logoutImg from "../img/logout.png"
import homeIcon from "./img/home.svg"
import { useNavigate } from "react-router-dom";


function Header() {
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "300px";
  //   document.getElementById("main").style.marginLeft = "300px";
  // }
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem("token")
    navigate('/login')
  }

  return (
      <header className="main-header">
          <Profile />
          <a className="home-icon">
            <img src={homeIcon} width="50px" height="50px" onClick={() => navigate('/userspaces')} />
          </a>
          <a className="logout-button">
            <img width="50px" height="50px" onClick={logout} src={logoutImg} />
          </a>
      </header>
  )
}

export default Header