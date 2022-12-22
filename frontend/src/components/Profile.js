import React from "react";
import { AiOutlineUser } from "react-icons/ai"
import user from "../img/user.png"

class Profile extends React.Component {
    user = [
        {
            "username": "nikrom",
            "first_name": "Роман",
            "last_name": "Никифоров",
            "role": "Admin",
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "hashed_password": "string",
            "spaces": []
        }
    ]

    render() {
        return (
            <div>
                {this.user.map((el) => (
                    <div className="main-profile" key={el.id}>
                        <a href="/#" className="profile-link">
                        <img width="50px" height="50px" src={user}></img>
                        </a>
                        <p className="name-subject">
                            <a href="/#" className="profile-link">{el.first_name} {el.last_name}</a>
                        </p>
                    </div>
                ))}
            </div>
        )
  }
}

export default Profile