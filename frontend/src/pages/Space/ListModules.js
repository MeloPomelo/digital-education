import React from "react";


class ListModules extends React.Component {
    module = this.props.module

    render() {
        return (
            <option>{this.props.module.id}</option>
        )
    }
}

export default ListModules