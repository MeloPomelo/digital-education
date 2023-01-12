import React from "react";
import video_icon from "../img/video.svg"
import delete_icon from "../img/delete.svg";
import edit_icon from "../img/edit-icon.svg";


class VideoMaterial extends React.Component {
    videoMaterial = this.props.videoMaterial
    render() {
        return (
            <a href={this.videoMaterial.url} className="block-link">
                <div className="elementButton">
                    <div>
                        <button className="edit-delete-button"><img src={edit_icon} width="25px" height="25px"/></button>
                        <button className="edit-delete-button"><img className="edit-delete-button" src={delete_icon} width="25px" height="25px"/></button>
                    </div>
                    <img src={video_icon} width="50px" height="50px" id="module12-lectureButton"/>
                    <h3>{this.videoMaterial.title}</h3>
                    <p className="elementButtonDescription">{this.videoMaterial.description}</p>
                </div>
            </a>
        )
    }
}

export default VideoMaterial