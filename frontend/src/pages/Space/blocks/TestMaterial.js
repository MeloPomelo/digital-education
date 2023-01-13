import React from "react";
import test_icon from "../img/search.svg"
import delete_icon from "../img/delete.svg";
import edit_icon from "../img/edit-icon.svg";


class TestMaterial extends React.Component {
    testMaterial = this.props.testMaterial
    render() {
        return (
            <div className="elementButton">
                <div className="edit-delete-grid">
                    <img src={test_icon} width="50px" height="50px" id="module12-lectureButton"/>
                    <div>
                        <button className="edit-delete-button"><img src={edit_icon} width="27px" height="27px" alt="Изменить компонент"/></button>
                        <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="27px" height="27px" alt="Удалить компонент"/></button>
                    </div>
                </div>
                <h3>{this.testMaterial.title}</h3>
                <p className="elementButtonDescription">{this.testMaterial.description}</p>
            </div>
        )
    }
}

export default TestMaterial