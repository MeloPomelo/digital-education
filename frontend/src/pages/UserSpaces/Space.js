import React from "react";
import { withRouter } from "../../components/withRouter";
import delete_icon from "./img/delete.svg";
import edit_icon from "./img/edit-icon.svg";
class Space extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);

        this.state = {
            space: this.props.space
        }
    }

    handleClick () {
        sessionStorage.setItem('space_id', this.state.space.id)
        this.props.navigate('/classTeacher')
    }

    handleClick1 () {
        sessionStorage.setItem('space_id', this.state.space.id)
        this.props.navigate('/space')
    }

    render() {
        return (
            <li className="classes-list-item">
                <div>
                    <div className="edit-delete-grid">
                        <h2>{this.state.space.title}</h2>
                        <div>
                            <button className="edit-delete-button"><img src={edit_icon} width="25px" height="25px"/></button>
                            <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="25px" height="25px"/></button>
                        </div>
                    </div>
                    <p className="subject-description">{this.state.space.description}</p>
                    <div className="open-button"><a onClick={this.handleClick1}>Открыть</a></div>
                    <div className="open-button"><a onClick={this.handleClick}>Список участников</a></div>
                </div>
            </li>
        )
    }
}

export default withRouter(Space);