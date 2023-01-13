import React from "react";
import comments_icon from "../img/file.svg"
import delete_icon from "../img/delete.svg";
import edit_icon from "../img/edit-icon.svg";


class TextMaterial extends React.Component {
    textMaterial = this.props.textMaterial
    render() {
        return (
            <a href=" https://externat.foxford.ru/polezno-znat/wiki-algebra-metody-resheniya-sistem-linejnyh-uravnenij" className="block-link">
                <div className="elementButton">
                    <div className="edit-delete-grid">
                        <img src={comments_icon} width="50px" height="50px" id="module12-lectureButton"/>
                        <div>
                            <button className="edit-delete-button"><img src={edit_icon} width="27px" height="27px" alt="Изменить компонент"/></button>
                            <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="27px" height="27px" alt="Удалить компонент" onClick={() => this.props.onDelete(this.textMaterial.id)}/></button>
                        </div>
                    </div>
                    <h3>{this.textMaterial.title}</h3>
                    <p className="elementButtonDescription">{this.textMaterial.description}</p>
                </div>
            </a>
        )
    }
}

export default TextMaterial