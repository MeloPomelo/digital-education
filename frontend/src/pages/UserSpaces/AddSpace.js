import React from "react";
import "./classesStyle.css"


class AddSpace extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "",
            description: "",
        }
    }

    render () {
        return(
            <form className="class-add-form">
                <h2>Добавить класс</h2>
                <input className="class-add-input" placeholder="Название предмета" onChange={(e) => this.setState({ title: e.target.value})}/>
                <input className="class-add-input" placeholder="Описание предмета" onChange={(e) => this.setState({ description: e.target.value })}/>
                <button className="class-add-button" type="button" onClick={() => this.props.onAdd({
                    title: this.state.title,
                    description: this.state.description,
                })}>Добавить</button>
            </form>
        )
    }
}
  
export default AddSpace