import React from "react";
import { AiOutlineUser } from "react-icons/ai"
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
            user: []
        }
    }
    
    render() {
        return (
                <div className="main-profile" key={this.state.user.id}>
                    <a href="/#" className="profile-link">
                    <img width="50px" height="50px" src={user}></img>
                    </a>
                    <p className="name-subject">
                        <a href="/#" className="profile-link">{this.state.user.first_name} {this.state.user.last_name}</a>
                    </p>
                </div>
        )
  }
}

export default Profile