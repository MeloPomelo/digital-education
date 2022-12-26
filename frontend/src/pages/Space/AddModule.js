import React from "react";


class AddModule extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            title: "",
        }
    }

    render() {
        return (
            <div className="new-module" id="new-module">
                <h2>Добавить модуль</h2>
                <input className="module-add-input" placeholder="Название модуля" onChange={(e) => this.setState({ title: e.target.value})}/>
                <button className="module-add-button" type="button"  onClick={() => this.props.onAdd({
                    title: this.state.title,
                })}>Создать модуль</button>
            </div>
        )
    }
}

export default AddModule