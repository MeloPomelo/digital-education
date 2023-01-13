import React from "react";
import Modules from "./Modules";
import Header from "../../components/Header";
import AddModule from "./AddModule";
import axios from "axios"
import "./userSpaceStyle.css"
import { json } from "react-router-dom";


const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

const space_id = sessionStorage.getItem('space_id')

class SpacePage extends React.Component {
    constructor (props) {
        super(props)

        axios.get('http://localhost:8000/space/space_' + space_id, config).then((response) => {
            this.setState({modules: response.data.modules})
        })

        this.state = {
            modules: []
        }

        this.addModule = this.addModule.bind(this)
    }

    addModule(module) {
        axios.post('http://localhost:8000/space/space_' + space_id + '/module/', module, config).then((response) => response.data)
        .then((value) => {
            this.setState({modules: [...this.state.modules, {...value}] })
        })
    }

    render(){
        return (
            <div>
                <Header />
                <Modules modules={this.state.modules}/>
                <AddModule modules={this.state.modules} onAdd={this.addModule} onAdd2={this.addMaterial}/>
            </div>
        )
    }
}

export default SpacePage