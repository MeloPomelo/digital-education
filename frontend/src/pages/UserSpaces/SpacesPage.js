import React, { useState }from "react";
import Header from "../../components/Header";
import Spaces from "./Spaces";
import axios from "axios"
import AddSpace from "./AddSpace";
import "./classesStyle.css"

const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

class SpacesPage extends React.Component {
    constructor (props) {
        super(props)

        axios.get('http://localhost:8000/space/get_user_spaces', config).then((response) => {
            this.setState({spaces: response.data})
        })

        this.state = {
            spaces: []
        }
        this.addSpace = this.addSpace.bind(this)
    }
    /** пытался запусть вместе добавлением пространства с добавлением юзера в это пространство, но там промисы вылезают,
     * а если к примеру написать в .then console.log(response.data) то все нормально выводит, сидел часа 2 с этой по****й,
     * поэтому просто закомментировал, хз что там делать, ну подгрузка пространств у отдельного пользователя работает, 
     * добавлять через свагер, на этом мои силы иссякли... Может получится разобраться с axios и как нормально данные вернуть.
     * Оставил файл практически без изменений. Ну и все работает при перезагрузке страницы только, пока не знаю как фиксить.
     */
    addSpace(space) {
        /** const newSpace =*/axios.post('http://localhost:8000/space/', space, config).then((response) => this.setState({spaces: response.data}))
        // this.setState({spaces: newSpace})
        // const user = axios.get('http://localhost:8000/users/me', config).then((response) => response.data)
        // console.log(newSpace)
        // console.log(user)
        // axios.post('http://localhost:8000/space/add_user', {
        //     space_id: newSpace.id,
        //     user_id: user.id
        // }, config)
    }
    
    render () {
        return (
            <div>
                <Header />
                <main>
                    <ul className="classes-list">
                        <Spaces spaces={this.state.spaces}/>
                    </ul>
                </main>
                <div>
                    <AddSpace onAdd={this.addSpace}/>
                </div>
            </div>
        )
    }
}

export default SpacesPage