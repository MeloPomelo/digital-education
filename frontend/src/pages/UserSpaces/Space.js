import React from "react";

class Space extends React.Component {
    space = this.props.space
    render() {
        return (
            <li className="classes-list-item">
                <div>
                    <h2>{this.space.title}</h2>
                    <p className="subject-description">{this.space.description}</p>
                    <div className="open-button"><a href="#">Открыть</a></div>
                </div>
            </li>
        )
    }
}

export default Space