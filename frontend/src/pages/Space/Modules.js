import React from "react";
import Module from "./Module";

class Modules extends React.Component {
    render() {
        return (
            <div>
                {this.props.modules.map((el) => (
                    <Module key={el.id} module={el} onDelete={this.props.onDelete}/>
                ))}
            </div>
        )
    }
}

export default Modules