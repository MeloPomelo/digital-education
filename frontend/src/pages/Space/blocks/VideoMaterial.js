import React from "react";
import video_icon from "../img/video.svg"


class VideoMaterial extends React.Component {
    videoMaterial = this.props.videoMaterial
    render() {
        return (
            <a href={this.videoMaterial.url} className="block-link">
                <div className="elementButton">
                    <div className="edit-delete-grid">
                        <img src={video_icon} width="50px" height="50px" id="module12-lectureButton"/>
                        <div>
                            <button className="edit-delete-button"><img src={edit_icon} width="27px" height="27px" alt="Изменить компонент"/></button>
                            <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="27px" height="27px" alt="Удалить компонент"/></button>
                        </div>
                    </div>
                    <h3>{this.videoMaterial.title}</h3>
                    <p className="elementButtonDescription">{this.videoMaterial.description}</p>
                </div>
            </a>
        )
    }
}

export default VideoMaterial