import React from "react";
import axios from "axios"
import user from "../img/user.png"

const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

class Profile extends React.Component {
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
    
    render() {
        return (
                <div className="main-profile" key={this.state.user.id}>
                    <a href="/profile" className="profile-link">
                    <img width="50px" height="50px" src={user}></img>
                    </a>
                    <p className="name-subject">
                        <a href="/profile" className="profile-link">{this.state.user.first_name} {this.state.user.last_name}</a>
                    </p>
                </div>
        )
  }
}

export default Profile