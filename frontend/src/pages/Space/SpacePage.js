import React from "react";
import Modules from "./Modules";
import SideNav from "./SideNav";
import Header from "../../components/Header";
import AddModule from "./AddModule";
import "./userSpaceStyle.css"

class SpacePage extends React.Component {
    render(){
        return (
            <div>
                {/* <aside id="mySidenav" className="main-sidebar">
                    <SideNav />
                </aside> */}
                <main id="main" className="main-page">
                    <Header />
                    <Modules />
                    <AddModule />
                </main>
            </div>
        )
    }
}

export default SpacePage