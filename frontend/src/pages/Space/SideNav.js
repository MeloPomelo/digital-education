import React from "react";


class SideNav extends React.Component {
    // closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    //     document.getElementById("main").style.marginLeft= "0";
    // }

    render(){
        return (
            <div>
                <a href="javascript:void(0)" className="close-sidebar" onClick="closeNav()">×</a>

                <div className="main-profile">
                    <a href="#" className="profile-link">
                        <img src="img/profile2.svg" alt="Аватар пользователя" width="50px" height="50px"/>
                    </a>
                    <p className="name-subject">
                        <a href="profile.html" className="profile-link">Роман Никифоров</a><br/>
                        Математика
                    </p>
                </div>

                <form className="page-search">
                    <input type="search" className="page-search-input"/>
                    <input type="submit" value="Найти" className="page-search-button"/>
                </form>

                <ol className="modules-list">
                <li className="modules-list-item">
                    <details className="modules-items-details"/>
                    <summary>Модуль 12.09</summary>
                    <p><a href="#module12-lecture-test" className="module-detail">Тестирование</a></p>
                    <p><a href="#module12-lecture-questions" className="module-detail">Обсуждение</a></p>
                    <p><a href="#module12-start" className="module-detail">К лекции</a></p>
                </li>
                <li className="modules-list-item">
                    <details className="modules-items-details">
                    <summary>Модуль 19.09</summary>
                    <p><a href="#module19-lecture-test" className="module-detail">Тестирование</a></p>
                    <p><a href="#module19-lecture-questions" className="module-detail">Обсуждение</a></p>
                    <p><a href="#module19-start" className="module-detail">К лекции</a></p>
                    </details>
                </li>
                <li className="modules-list-item">
                    <summary><a className="module-detail" href="#new-module">Новый модуль</a></summary>
                </li>
                </ol>
            </div>
        )
    }
}

export default SideNav