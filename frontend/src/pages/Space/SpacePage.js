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
            modules: [
                {
                  title: "string",
                  id: 1,
                  space_id: 1,
                  text_blocks: [
                    {
                      title: "string",
                      description: "string",
                      id: 1,
                      module_id: 1
                    }
                  ],
                  video_blocks: [],
                  tests: []
                },
            ]
        }

        this.addModule = this.addModule.bind(this)
        this.addMaterial = this.addMaterial.bind(this)
    }

    addModule(module) {
        axios.post('http://localhost:8000/space/space_' + space_id + '/module/', module, config).then((response) => response.data)
        .then((value) => {
            this.setState({modules: [...this.state.modules, {...value}] })
        })
    }

    addMaterial(material) {
        if(material.mat_type == "Лекция") {
            axios.post('http://localhost:8000/space/space_{space_id}/module/create_text_material?module_id=' + material.mat_module, 
            {
                title: material.mat_title,
                description: material.mat_description,
                text: material.mat_url,
            }, config)
            .then((value) => {
                this.setState({text_blocks: [...this.state.modules.text_blocks, {...value}]})
            })
        }
        else if(material.mat_type == "Видео") {
            axios.post('http://localhost:8000/space/space_{space_id}/module/create_video?module_id=' + material.mat_module, 
            {
                title: material.mat_title,
                description: material.mat_description,
                url: material.mat_url,
            }, config)
            .then((value) => {
                this.setState({video_blocks: [...this.state.modules.video_blocks, {...value}]})
            })
        }
        else {
            console.log({
                title: material.mat_title,
                description: material.mat_description,
                text: material.mat_url,
            })
        }
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