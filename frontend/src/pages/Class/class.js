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
            users: []

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