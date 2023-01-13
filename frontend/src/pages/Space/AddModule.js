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
            <div className="add-module-component" id="new-module">
                <div className="new-module">
                    <h2>Добавить модуль</h2>
                    <input className="module-add-input" placeholder="Название модуля" onChange={(e) => this.setState({ title: e.target.value})}/>
                    <input className="module-add-input" placeholder="Описание модуля"/>
                    <button className="module-add-button" type="button"  onClick={() => this.props.onAdd({
                        title: this.state.title,
                    })}>Создать модуль</button>
                </div>
                <div className="new-module">
                    <h2>Добавить компонент</h2>

                    <label className="new-component-label">
                        Тип Компонента<br/>
                        <select className="new-component-select">
                            <option>Видео</option>
                            <option>Лекция</option>
                            <option>Тестирование</option>
                        </select>
                    </label>

                    <input className="module-add-input" placeholder="Название компонента"/>
                    <input className="module-add-input" placeholder="Описание компонента"/>
                    <input className="module-add-input" placeholder="Ссылка на материал"/>
                    <button className="module-add-button" type="button">Создать компонент</button>
                </div>
            </div>
        )
    }
}

export default AddModule