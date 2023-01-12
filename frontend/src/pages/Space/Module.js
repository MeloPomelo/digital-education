import React from "react";
import TextMaterial from "./blocks/TextMaterial";
import VideoMaterial from "./blocks/VideoMaterial";
import TestMaterial from "./blocks/TestMaterial";


class Module extends React.Component {
    module = this.props.module
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
                </div>
            </div>
        )
    }
}

export default Module