import React from "react";
import ListModules from "./ListModules";


class AddMaterial extends React.Component{
    constructor (props) {
        super(props)

        this.state = {
            mat_type: "",
            mat_title: "",
            mat_description: "",
            mat_url: "",
        }

        this.onChangeType = this.onChangeType.bind(this);
    }

    onChangeType(e) {
        this.setState({
            mat_type: e.target.value
        });
    }

    render () {
        return (
            <div className="new-module">
                <h2>Добавить компонент</h2>
                <label className="new-component-label">
                    Тип Компонента<br/>
                    <select className="new-component-select" onChange={this.onChangeType}>
                        <option>Видео</option>
                        <option>Лекция</option>
                        <option>Тестирование</option>
                    </select>
                </label>

                <input className="module-add-input" placeholder="Название компонента" onChange={(e) => this.setState({ mat_title: e.target.value})}/>
                <input className="module-add-input" placeholder="Описание компонента" onChange={(e) => this.setState({ mat_description: e.target.value})}/>
                <input className="module-add-input" placeholder="Ссылка на материал" onChange={(e) => this.setState({ mat_url: e.target.value})}/>
                <button className="module-add-button" type="button" onClick={() => this.props.onAdd({
                        mat_type: this.state.mat_type,
                        mat_title: this.state.mat_title,
                        mat_description: this.state.mat_description,
                        mat_url: this.state.mat_url,
                })}>Создать компонент</button>
            </div>
        )
    }
}

export default AddMaterial
