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
                
                <div className="new-module">
                    <h2>Добавить компонент</h2>
                    <div className="new-component-flex">
                        <label className="new-component-label">
                            Название редактируемого модуля<br/>
                            <select className="new-component-select" onChange={this.onChangeModule}>
                                {this.props.modules.map((el) => (
                                    <ListModules key={el.id} module={el}/>
                                ))}
                            </select>
                        </label>

                        <label className="new-component-label">
                            Тип Компонента<br/>
                            <select className="new-component-select" onChange={this.onChangeType}>
                                <option>Видео</option>
                                <option>Лекция</option>
                                <option>Тестирование</option>
                            </select>
                        </label>
                    </div>

                    <input className="module-add-input" placeholder="Название компонента" onChange={(e) => this.setState({ mat_title: e.target.value})}/>
                    <input className="module-add-input" placeholder="Описание компонента" onChange={(e) => this.setState({ mat_description: e.target.value})}/>
                    <input className="module-add-input" placeholder="Ссылка на материал" onChange={(e) => this.setState({ mat_url: e.target.value})}/>
                    <button className="module-add-button" type="button" onClick={() => this.props.onAdd2({
                            mat_module: this.state.mat_module,
                            mat_type: this.state.mat_type,
                            mat_title: this.state.mat_title,
                            mat_description: this.state.mat_description,
                            mat_url: this.state.mat_url,
                    })}>Создать компонент</button>
                </div>
            
            </div>
        )
    }
}

export default AddModule