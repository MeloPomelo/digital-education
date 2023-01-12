import React from "react";
import comments_icon from "../img/file.svg"


class TextMaterial extends React.Component {
    textMarerial = this.props.textMarerial
    render() {
        return (
            <a href=" https://externat.foxford.ru/polezno-znat/wiki-algebra-metody-resheniya-sistem-linejnyh-uravnenij" className="block-link">
                <div className="elementButton">
                    <img src={comments_icon} width="50px" height="50px" id="module12-lectureButton"/>
                    <h3>{this.textMarerial.title}</h3>
                    <p className="elementButtonDescription">{this.textMarerial.description}</p>
                </div>
            </a>
        )
    }
}

export default TextMaterial