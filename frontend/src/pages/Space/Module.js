import React from "react";
import video_icon from "./img/video.svg"
import comments_icon from "./img/file.svg"
import test_icon from "./img/search.svg"


class Module extends React.Component {
    module = this.props.module
    render() {
        return (
            <div className="module12">
                <h2 className="module-title" id="module12-start">{this.module.title}</h2>
                <div className="elementButtons">
                    
                    {this.props.module.text_blocks.map((el) => (
                        <TextMaterial key={el.id} textMarerial={el}/>
                    ))}
                    
                    {this.props.module.video_blocks.map((el) => (
                        <VideoMaterial key={el.id} videoMaterial={el}/>
                    ))}     

                    {this.props.module.video_blocks.map((el) => (
                        <TestMaterial key={el.id} testMaterial={el}/>
                    ))}                
                    
                    {/* <TextMaterial />
                    <VideoMaterial />
                    <TestMaterial /> */}

                </div>
            </div>
        )
    }
}

export default Module