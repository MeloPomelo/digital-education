import React, { useState } from "react";
import axios from "axios"
import PropTypes from 'prop-types';
import { withRouter } from "../../components/withRouter";
import './AuthStyle.css'


async function loginUser(credentials) {
    const formData = new FormData()
    formData.append("username", credentials.username)
    formData.append("password", credentials.password)
    return axios.post('http://localhost:8000/users/login', formData).then((response) => response.data)
}


class Login extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            username: "",
            password: ""
        }
    }

    timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    handleSubmit = async e => {
        e.preventDefault();
        const username = this.state.username
        const password = this.state.password
        const token = await loginUser({
          username,
          password
        });
        await this.props.setToken(token)
        this.props.navigate('/userspaces')
      }
    render() {
        return (
            <div className="background">
                <form className="main_form" onSubmit={this.handleSubmit}>
                    <h1 className="form_title">Вход</h1>
                    <div className="form_field">
                        <input className="form_input" placeholder=" " type="text" required name="username"
                            onChange={(e) => this.state.username = e.target.value}/>
                        <label className="form_label">Логин</label>
                    </div>
                    <div className="form_field">
                        <input className="form_input" placeholder=" " type="password" required name="password"
                            onChange={(e) => this.state.password = e.target.value}/>
                        <label className="form_label">Пароль</label>
                    </div>
                    <div className="sign-in">
                        <button className="form_button" type="submit">Войти</button>
                    </div>
                    <div className="forgot_password">
                        <a href="/#">Забыли пароль?</a>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default withRouter(Login);