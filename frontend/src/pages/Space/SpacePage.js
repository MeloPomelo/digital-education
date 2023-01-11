import React from "react";
import Modules from "./Modules";
import Header from "../../components/Header";
import AddModule from "./AddModule";
import axios from "axios"
import "./userSpaceStyle.css"


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
            modules: [
                // {
                //   title: "Системы линейных уравнений",
                //   id: 1,
                //   space_id: 1,
                //   text_blocks: [],
                //   video_blocks: [],
                //   tests: []
                // }
            ]
        }

        this.addSpace = this.addModule.bind(this)
    }

    addModule(module) {
        console.log(module)
        const id = this.state.modules.length + 1
        this.setState({ space: [...this.state.modules, {id, ...module}] })
    }

    render(){
        return (
            <div>
                <Header />
                <Modules modules={this.state.modules}/>
                <AddModule onAdd={this.addModule}/>
            </div>
        )
    }
}

export default SpacePage