import React from "react";

class Space extends React.Component {
    space = this.props.space
    
    // handleClick = (e) => {
    //     e.preventDefault();
    //     sessionStorage.setItem('space_id', this.space.id)
    // }

    render() {
        return (
            <li className="classes-list-item">
                <div>
                    <h2>{this.space.title}</h2>
                    <p className="subject-description">{this.space.description}</p>
                    <div className="open-button"><a href="/space">Открыть</a></div>
                    <div className="open-button"><a href="#">Список участников</a></div>
                </div>
            </li>
        )
    }
}

export default Space