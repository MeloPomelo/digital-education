import React from "react";
import TextMaterial from "./blocks/TextMaterial";
import VideoMaterial from "./blocks/VideoMaterial";
import TestMaterial from "./blocks/TestMaterial";
import AddMaterial from "./AddMaterial";
import axios from "axios"


const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}


class Module extends React.Component {
    module = this.props.module

    addMaterial(material) {
        if(material.mat_type == "Лекция") {
            axios.post('http://localhost:8000/space/space_{space_id}/module/create_text_material?module_id=' + this.props.module.id, 
            {
                title: material.mat_title,
                description: material.mat_description,
                text: material.mat_url,
            }, config)
            .then((value) => {
                this.setState({text_blocks: [...this.props.module.text_blocks, {...value}]})
            })
        }
        else if(material.mat_type == "Видео") {
            axios.post('http://localhost:8000/space/space_{space_id}/module/create_video?module_id=' + this.props.module.id, 
            {
                title: material.mat_title,
                description: material.mat_description,
                url: material.mat_url,
            }, config)
            .then((value) => {
                this.setState({video_blocks: [...this.props.module.video_blocks, {...value}]})
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
                    <h2 className="module-title" id="module12-start">{this.module.title}</h2>
                    <div className="elementButtons">
                        {this.props.module.text_blocks.map((el) => (
                            <TextMaterial key={el.id} textMarerial={el}/>
                        ))}
                        {this.props.module.video_blocks.map((el) => (
                            <VideoMaterial key={el.id} videoMaterial={el}/>
                        ))}     

                        {this.props.module.tests.map((el) => (
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