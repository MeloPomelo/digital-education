import React from "react";
import video_icon from "../img/video.svg"


class VideoMaterial extends React.Component {
    videoMaterial = this.props.videoMaterial
    render() {
        return (
            <a href={this.videoMaterial.url} className="block-link">
                <div className="elementButton">
                    <img src={video_icon} width="50px" height="50px" id="module12-lectureButton"/>
                    <h3>{this.videoMaterial.title}</h3>
                    <p className="elementButtonDescription">{this.videoMaterial.description}</p>
                </div>
            </a>
        )
    }
}

export default VideoMaterial