import React, { useState }from "react";
import PropTypes from 'prop-types';
import './AuthStyle.css'


async function loginUser(credentials) {
    return fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
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
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
