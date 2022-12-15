import React from "react";
import Profile from "./Profile";
import logoutIcon from "../img/logout.png"

class Header extends React.Component {
  render() {
    return (
        <header class="main-header">
            <Profile />
            <a href="/#" class="logout-button"><img src={logoutIcon} alt="Выход" width="35px" height="35px"/></a>
        </header>
    )
  }
}

export default Header