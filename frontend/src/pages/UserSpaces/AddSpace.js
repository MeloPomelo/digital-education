import React from "react";


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
            <form>
                <input placeholder="Название" onChange={(e) => this.setState({ title: e.target.value})}/>
                <input placeholder="Описание" onChange={(e) => this.setState({ description: e.target.value })}/>
                <button type="button" onClick={() => this.props.onAdd({
                    title: this.state.title,
                    description: this.state.description,
                })}>Добавить</button>
            </form>
        )
    }
}
  
export default AddSpace