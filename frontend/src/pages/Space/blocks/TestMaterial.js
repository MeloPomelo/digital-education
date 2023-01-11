import React from "react";
import test_icon from "../img/search.svg"


class TestMaterial extends React.Component {
    testMaterial = this.props.testMaterial
    render() {
        return (
            <div className="elementButton">
                <img src={test_icon} width="50px" height="50px" id="module12-lectureButton"/>
                <h3>{this.testMaterial.title}</h3>
                <p className="elementButtonDescription">{this.testMaterial.description}</p>
            </div>
        )
    }
}

export default TestMaterial