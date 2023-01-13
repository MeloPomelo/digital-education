import React from "react";
import ListModules from "./ListModules";


class AddModule extends React.Component{
    constructor (props) {
        super(props)

        this.state = {
            module_title: "",
            mat_module: "",
            mat_type: "",
            mat_title: "",
            mat_description: "",
            mat_url: "",
        }

        this.onChangeModule = this.onChangeModule.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
    }

    onChangeModule(e) {
        this.setState({
            mat_module: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            mat_type: e.target.value
        });
    }

    render() {
        return (
            <div className="add-module-component" id="new-module">
                
                <div className="new-module">
                    <h2>Добавить модуль</h2>
                    <input className="module-add-input" placeholder="Название модуля" onChange={(e) => this.setState({ module_title
                        : e.target.value})}/>
                    <button className="module-add-button" type="button"  onClick={() => this.props.onAdd({
                        title: this.state.module_title,
                    })}>Создать модуль</button>
                </div>            
            </div>
        )
    }
}

export default AddModule