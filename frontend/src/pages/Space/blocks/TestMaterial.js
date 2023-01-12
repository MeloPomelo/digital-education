import React from "react";
import test_icon from "../img/search.svg"
import delete_icon from "../img/delete.svg";
import edit_icon from "../img/edit-icon.svg";


class TestMaterial extends React.Component {
    testMaterial = this.props.testMaterial
    render() {
        return (
            <div className="elementButton">
                <div>
                    <button className="edit-delete-button"><img src={edit_icon} width="25px" height="25px"/></button>
                    <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="25px" height="25px"/></button>
                </div>
                <img src={test_icon} width="50px" height="50px" id="module12-lectureButton"/>
                <h3>{this.testMaterial.title}</h3>
                <p className="elementButtonDescription">{this.testMaterial.description}</p>
            </div>
        )
    }
}

export default TestMaterial