import React, { useState }from "react";
import axios from "axios"
import PropTypes from 'prop-types';
import './AuthStyle.css'


async function loginUser(credentials) {
    const formData = new FormData()
    formData.append("username", credentials.username)
    formData.append("password", credentials.password)
    return axios.post('http://localhost:8000/users/login', formData).then((response) => response.data)
}


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    return (
        <div className="background">
            <form className="main_form" onSubmit={handleSubmit}>
                <h1 className="form_title">Вход</h1>
                <div className="form_field">
                    <input className="form_input" placeholder=" " type="text" required name="username"
                        onChange={(e) => setUserName(e.target.value)}/>
                    <label className="form_label">Логин</label>
                </div>
                <div className="form_field">
                    <input className="form_input" placeholder=" " type="password" required name="password"
                        onChange={(e) => setPassword(e.target.value)}/>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
