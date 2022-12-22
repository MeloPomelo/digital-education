import React from "react";


class Module extends React.Component {
    render() {
        return (
            <div className="module12">
                <h2 className="module-title" id="module12-start">Модуль 12.09</h2>
                <div className="lecture-video turnedOff" id="module12-video">
                    <iframe width="700" height="350" src="https://www.youtube.com/embed/jynTNYSKNuk" title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
        
                <a className="lecture-text turnedOff" id="module12-text" href="Текст лекции.pdf" download target="_blank">Скачать текст лекции</a>
        
                <div className="lecture-test turnedOff" id="module12-lecture-test">
                    <h3 className="lecture-headline">Тестирование</h3>
                    <p className="lectures-test-question">
                        <p className="question">Продолжите фразу: "Golden rays over glorious..."</p>
                        <ol className="answers-list">
                            <li><label><input type="radio" name="answer" value="sunshine" id="correct1"/>Sunshine</label></li>
                            <li><label><input type="radio" name="answer" value="moonshine" id="wrong1.1"/>Moonshine</label></li>
                            <li><label><input type="radio" name="answer" value="outshine" id="wrong1.2"/>Outshine</label></li>
                        </ol>
                        <button className="submit-answer" onClick="check1();">Проверить</button>
                        <div id="point1" className="turnedOff">✅ Правильно!</div>
                        <div id="noPoint1" className="turnedOff">❌ Неправильно!</div>
                    </p>
            
                    <p className="lectures-test-question">
                        <p className="question">Завершите четверостишье:</p>
                        Only love is with us now<br/>
                        Something warm and pure<br/>
                        Find the peace within ourselves<br/>
                        No need for a
                        <input className="answer-input" type="text" name="text-answer" id="correct2"/><br/>
                        <button className="submit-answer" onClick="check2();">Проверить</button>
                        <div id="point2" className="turnedOff">✅ Правильно!</div>
                        <div id="noPoint2" className="turnedOff">❌ Неправильно!</div>
                    </p>
            
                    <p className="lectures-test-question">
                        <p className="question">2+2*2</p>
                        <ol className="answers-list">
                            <li><label><input type="radio" name="answer" value="6" id="correct3"/>6</label></li>
                            <li><label><input type="radio" name="answer" value="8" id="wrong3.1"/>8</label></li>
                            <li><label><input type="radio" name="answer" value="10" id="wrong3.2"/>10</label></li>
                        </ol>
                        <button className="submit-answer" onClick="check3();">Проверить</button>
                        <div id="point3" className="turnedOff">✅ Правильно!</div>
                        <div id="noPoint3" className="turnedOff">❌ Неправильно!</div>
                    </p>
                </div>
        
                <div className="lecture-questions turnedOff" id="module12-lecture-questions">
                    <h3 className="lecture-headline">Есть вопросы? Обратитесь к преподавателю.</h3>
                    <ol className="comment-list">
                        <li className="user-comment">A Java и JavaScript - это одно и то же?</li>
                    </ol>
                    <form method="post" className="comment-form">
                        <div className="comment-inner">
                            <label className="comment-label" htmlFor="comment-field">Ваш комментарий:</label>
                            <input type="text" className="comment-field" placeholder=" " required id="comment-input"/>
                        </div>
                        <button className="submit-comment submit-answer" type="submit">Отправить</button>
                    </form>
                </div>
        
                <div className="elementButtons">
                    <button type="button" className="elementButton" id="module12-lectureButton">Лекция</button>
            
                    <button type="button" className="elementButton" id="module12-testButton">Тест</button>
            
                    <button type="button" className="elementButton" id="module12-comments">Комментарии</button>
                </div>
          </div>
        )
    }
}

export default Module