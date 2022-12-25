import React, { useState }from "react";
import Header from "../../components/Header";
import axios from "axios"
import "./classTeacherStyle.css"

const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

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
        <div>
            <Header />
            <main>
                <h1 class="classHeadline">Класс</h1>
            </main>
        </div>
    }
}