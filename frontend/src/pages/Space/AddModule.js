import React from "react";


class AddModule extends React.Component {
  render() {
    return (
        <div className="new-module" id="new-module">
            <h2>Добавить модуль</h2>
            <input className="module-add-input" placeholder="Название модуля"/>
            <input className="module-add-input" placeholder="Описание модуля"/>
            <button className="module-add-button" type="button">Создать модуль</button>
        </div>
    )
  }
}

export default AddModule