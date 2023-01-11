import React from "react";
import video_icon from "./img/video.svg"
import comments_icon from "./img/file.svg"
import test_icon from "./img/search.svg"
import delete_icon from "./img/delete.svg";
import edit_icon from "./img/edit-icon.svg";

class Module extends React.Component {
    module = this.props.module
    render() {
        return (
            <div className="module12">
                <h2 className="module-title" id="module12-start">{this.module.title}</h2>
                <div className="elementButtons">
                    
                    <a href="https://youtu.be/kk938eKvmDA" className="block-link">
                        <div className="elementButton">
                            <div className="edit-delete-grid">
                                <img src={video_icon} width="50px" height="50px" id="module12-lectureButton"/>
                                <div>
                                <button className="edit-delete-button"><img src={edit_icon} width="25px" height="25px"/></button>
                                <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="25px" height="25px"/></button>
                                </div>
                            </div>
                            <h3>Видео</h3>
                            <p className="elementButtonDescription">Метод Крамера за 3 минуты. Решение системы линейных уравнений</p>
                        </div>
                    </a>
                   
                    <a href=" https://externat.foxford.ru/polezno-znat/wiki-algebra-metody-resheniya-sistem-linejnyh-uravnenij" className="block-link">
                        <div className="elementButton">
                            <div className="edit-delete-grid">
                                <img src={comments_icon} width="50px" height="50px" id="module12-lectureButton"/>
                                <div>
                                <button className="edit-delete-button"><img src={edit_icon} width="25px" height="25px"/></button>
                                <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="25px" height="25px"/></button>
                                </div>
                            </div>
                            <h3>Лекция</h3>
                            <p className="elementButtonDescription">Разбираемся в решении линейных уравнениях</p>
                        </div>
                    </a>
                    <div className="elementButton">
                        <div className="edit-delete-grid">
                            <img src={test_icon} width="50px" height="50px" id="module12-lectureButton"/>
                            <div>
                                <button className="edit-delete-button"><img src={edit_icon} width="25px" height="25px"/></button>
                                <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="25px" height="25px"/></button>
                            </div>
                        </div>
                        <h3>Тестирование</h3>
                        <p className="elementButtonDescription">10 вопрсов на 20 минут</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Module