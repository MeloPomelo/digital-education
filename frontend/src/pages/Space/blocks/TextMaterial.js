import React from "react";
import comments_icon from "../img/file.svg"
import delete_icon from "../img/delete.svg";
import edit_icon from "../img/edit-icon.svg";


class TextMaterial extends React.Component {
    textMarerial = this.props.textMarerial
    render() {
        return (
            <a href=" https://externat.foxford.ru/polezno-znat/wiki-algebra-metody-resheniya-sistem-linejnyh-uravnenij" className="block-link">
                <div className="elementButton">
                    <div className="edit-delete-grid">
                        <img src={comments_icon} width="50px" height="50px" id="module12-lectureButton"/>
                        <div>
                            <button className="edit-delete-button"><img src={edit_icon} width="27px" height="27px" alt="Изменить компонент"/></button>
                            <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="27px" height="27px" alt="Удалить компонент"/></button>
                        </div>
                    </div>
                    <h3>{this.textMarerial.title}</h3>
                    <p className="elementButtonDescription">{this.textMarerial.description}</p>
                </div>
            </a>
        )
    }
}

export default TextMaterial