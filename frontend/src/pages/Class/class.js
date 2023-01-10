import React, { useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import ListUsers from "./ClassList";
import "./classTeacherStyle.css";

const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

const space_id = sessionStorage.getItem('space_id')


class ClassTeacher extends React.Component {
    constructor (props) {
        super(props)

        axios.get('http://localhost:8000/space/get_all_user_in_space?space_id=' + space_id, config).then((response) => {
            this.setState({users: response.data})
        })

        this.state = {
            users: [
                {
                    "username": "",
                    "first_name": "Никифоров",
                    "last_name": "Кирилл",
                    "patronymic": "Николаевич",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Волков",
                    "last_name": "Даниил",
                    "patronymic": "Витальевич",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Волкифоров",
                    "last_name": "Дарилл",
                    "patronymic": "Витаколаевич",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Никифоров",
                    "last_name": "Роман",
                    "patronymic": "Романович",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Конилов",
                    "last_name": "Александр",
                    "patronymic": "Игоревич",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Новиков",
                    "last_name": "Максим",
                    "patronymic": "Юрьевич",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Алешин",
                    "last_name": "Максим",
                    "patronymic": "Николаевич",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Иванов",
                    "last_name": "Иван",
                    "patronymic": "Иванович",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Робертов",
                    "last_name": "Антон",
                    "patronymic": "Максимович",
                    "email": "",
                    "phone_number": "",
                },
                {
                    "username": "",
                    "first_name": "Платонов",
                    "last_name": "Илья",
                    "patronymic": "Мемович",
                    "email": "",
                    "phone_number": "",
                },
            ]

        }
    }

    render () {
        return (
            <div>
                <Header />
                <main>
                    <h1 className="classHeadline">Класс</h1>
                    <p><a href="/userspaces" className="backToClasses">Назад</a></p>

                    <ListUsers users={this.state.users} />
                    <a href="/space" className="toBoard">Доска</a>
                </main>
            </div>
        )
    }
}

export default ClassTeacher