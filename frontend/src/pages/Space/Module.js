import React from "react";
import TextMaterial from "./blocks/TextMaterial";
import VideoMaterial from "./blocks/VideoMaterial";
import TestMaterial from "./blocks/TestMaterial";
import AddMaterial from "./AddMaterial";
import axios from "axios"
import delete_icon from "./img/delete.svg";


const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}


class Module extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            module_id: this.props.module.id,
            module_title: this.props.module.title,
            text_blocks: this.props.module.text_blocks,
            video_blocks: this.props.module.video_blocks,
            tests: this.props.module.tests,
        }

        this.addMaterial = this.addMaterial.bind(this)
        this.deleteTextBlock = this.deleteTextBlock.bind(this)
        this.deleteVideoBlock = this.deleteVideoBlock.bind(this)
    }

    deleteTextBlock(block_id) {
        this.setState({
            text_blocks: this.state.text_blocks.filter((el) => el.id !== block_id)
            } 
        )
        axios.delete('http://127.0.0.1:8000/space/space_{space_id}/module/text_' + block_id, config)
    }

    deleteVideoBlock(block_id) {
        this.setState({
            video_blocks: this.state.video_blocks.filter((el) => el.id !== block_id)
            } 
        )
        axios.delete('http://127.0.0.1:8000/space/space_{space_id}/module/video_' + block_id, config)
    }

    addMaterial(material) {
        if(material.mat_type == "Лекция") {
            console.log(this.state.module_id)
            axios.post('http://localhost:8000/space/space_{space_id}/module/create_text_material?module_id=' + String(this.state.module_id), 
            {
                title: material.mat_title,
                description: material.mat_description,
                text: material.mat_url,
            }, config)
            .then((value) => {
                this.setState({text_blocks: [...this.state.text_blocks, {...value.data}]})
            })
        }
        else if(material.mat_type == "Видео") {
            axios.post('http://localhost:8000/space/space_{space_id}/module/create_video?module_id=' + String(this.state.module_id), 
            {
                title: material.mat_title,
                description: material.mat_description,
                url: material.mat_url,
            }, config)
            .then((value) => {
                this.setState({video_blocks: [...this.state.video_blocks, {...value.data}]})
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

    render() {
        return (
            <div class="space-grid">
                <div className="module12">
                    <div className="edit-delete-grid">
                        <div>
                            <h2 className="module-title" id="module12-start">{this.state.module_title}</h2>
                            <button className="edit-delete-button">
                                <img className="edit-delete-button" src={delete_icon} width="27px" height="27px" alt="Удалить компонент" onClick={() => this.props.onDelete(this.state.module_id)}/>
                            </button>
                        </div>
                    </div>
                    <div className="elementButtons">
                        {this.state.text_blocks.map((el) => (
                            <TextMaterial key={el.id} textMaterial={el} onDelete={this.deleteTextBlock}/>
                        ))}
                        {this.state.video_blocks.map((el) => (
                            <VideoMaterial key={el.id} videoMaterial={el} onDelete={this.deleteVideoBlock}/>
                        ))}    
                        {this.state.tests.map((el) => (
                            <TestMaterial key={el.id} testMaterial={el}/>
                        ))} 
                    </div>
                    <AddMaterial onAdd={this.addMaterial}/>
                </div>
            </div>
        )
    }
}

export default Module