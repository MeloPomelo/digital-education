import React from "react";
import axios from "axios"
import Header from "../../components/Header";
import "./profileStyle.css"


const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        axios.get('http://localhost:8000/users/me', config).then((response) => {
            this.setState({user: response.data})
        })

        this.state = {
            user: {
                "username": "",
                "first_name": "",
                "last_name": "",
                "patronymic": "",
                "email": "",
                "phone_number": "",
            }
        }
    }

    updateUser(user){
        console.log(user)
        axios.put('http://localhost:8000/users/update', user, config).then((response) => this.setState({user: response.data}))
    }
    
    render(){
        return (
            <div>
                <Header />
                <main>
                    <h1>Личные данные</h1>
                    <div className="main-profile-data" key={this.state.user.id}>
                        <form className="profile-form" action="profile.html" method="post">
                            <div className="profile-field">
                                <input type="text" name="Имя пользователя" className="profile-input" placeholder=" " 
                                    onChange={(e) => this.setState({ first_name: e.target.value})}/>
                                <label className="profile-label">
                                    {this.state.user.first_name}
                                </label>
                            </div>

                            <div className="profile-field">
                                <input type="text" name="Фамилия пользователя" className="profile-input" placeholder=" " 
                                    onChange={(e) => this.setState({ last_name: e.target.value})}/>
                                <label className="profile-label">
                                    {this.state.user.last_name}
                                </label>
                            </div>

                            <div className="profile-field">
                                <input type="text" name="Отчество пользователя" className="profile-input" placeholder=" " 
                                    onChange={(e) => this.setState({ patronymic: e.target.value})}/>
                                <label className="profile-label">
                                    {this.state.user.patronymic}
                                </label>
                            </div>

                            <div className="profile-field">
                                <input type="email" name="Email пользователя" className="profile-input" placeholder=" " 
                                    onChange={(e) => this.setState({ email: e.target.value})}/>
                                <label className="profile-label">
                                    {this.state.user.email}
                                </label>
                            </div>

                            <div className="profile-field">
                                <input type="tel" name="Телефон пользователя" className="profile-input" placeholder=" " 
                                    onChange={(e) => this.setState({ phone_number: e.target.value})}/>
                                <label className="profile-label">
                                    {this.state.user.phone_number}
                                </label>
                            </div>

                            <div className="profile-field">
                                <input type="password" name="Пароль" className="profile-input" placeholder=" "/>
                                <label for="Пароль" className="profile-label">
                                Пароль
                                </label>
                            </div>
                                <button className="change-password" type="submit" name="change-password">Изменить пароль</button>

                            <button className="save-data" type="submit" name="save-data" onClick={() => this.updateUser({
                                first_name: this.state.first_name,
                                last_name: this.state.last_name,
                                patronymic: this.state.patronymic,
                                email: this.state.email,
                                phone_number: this.state.phone_number,
                            })}>Сохранить</button>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default ProfilePage