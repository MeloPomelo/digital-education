import React from "react";
import Space from "./Space";


class Spaces extends React.Component {
    render() {
        if (this.props.spaces.length > 0)
            return (
                <div>
                    {this.props.spaces.map((el) => (
                        <Space onDelete={this.props.onDelete} key={el.id} space={el}/>
                    ))}
                </div> 
            )
        else
            return (
                <li className="classes-list-item">
                    <div>
                        <h2>Список классов пуст</h2>
                    </div>
                </li>
            )
    }
}

export default Spaces