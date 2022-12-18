import React from "react";
import Profile from "./Profile";
import { AiOutlineLogout } from "react-icons/ai"

class Header extends React.Component {
  render() {
    return (
        <header className="main-header">
            <Profile />
            <a href="/#" className="logout-button">
              <AiOutlineLogout className="logout-icon"/>
            </a>
        </header>
    )
  }
}

export default Header