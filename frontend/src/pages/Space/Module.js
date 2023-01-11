import React from "react";
import video_icon from "./img/video.svg"
import comments_icon from "./img/file.svg"
import test_icon from "./img/search.svg"


class Module extends React.Component {
    module = this.props.module
    render() {
        return (
            <div className="module12">
                <h2 className="module-title" id="module12-start">{this.module.title}</h2>
                <div className="elementButtons">
                    
                    <a href="https://youtu.be/kk938eKvmDA" className="block-link">
                        <div className="elementButton">
                            <img src={video_icon} width="50px" height="50px" id="module12-lectureButton"/>
                            <h3>Видео</h3>
                            <p className="elementButtonDescription">Метод Крамера за 3 минуты. Решение системы линейных уравнений</p>
                        </div>
                    </a>
                   
                    <a href=" https://externat.foxford.ru/polezno-znat/wiki-algebra-metody-resheniya-sistem-linejnyh-uravnenij" className="block-link">
                        <div className="elementButton">
                            <img src={comments_icon} width="50px" height="50px" id="module12-lectureButton"/>
                            <h3>Лекция</h3>
                            <p className="elementButtonDescription">Разбираемся в решении линейных уравнениях</p>
                        </div>
                    </a>
                    <div className="elementButton">
                        <img src={test_icon} width="50px" height="50px" id="module12-lectureButton"/>
                        <h3>Тестирование</h3>
                        <p className="elementButtonDescription">10 вопрсов на 20 минут</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Module
