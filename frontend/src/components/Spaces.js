import React from "react";

class Space extends React.Component {
    spaces = [
        {
            "title": "Математика",
            "description": "7Б класс",
            "id": 1,
            "modules": [],
            "users": []
        },
        {
            "title": "Русский язык",
            "description": "7Б класс",
            "id": 2,
            "modules": [],
            "users": []
        },
    ]

    render() {
        return (
            <div>
                {this.spaces.map((el) => (<li className="classes-list-item" key={el.id}>
                    <div>
                        <h2>{el.title}</h2>
                        <p className="subject-description">{el.description}</p>
                    </div>
                </li>))}
            </div>
        )
  }
}

export default Space