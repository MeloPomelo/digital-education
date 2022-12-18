import React from "react";
import Header from "../../components/Header";
import Spaces from "./Spaces";
import AddSpace from "./AddSpace";


class SpacesPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            spaces: [
                // {
                //     title: "string",
                //     description: "string",
                //     id: 1,
                //     modules: [],
                //     users: []
                // }
            ]
        }
        this.addSpace = this.addSpace.bind(this)
    }
    
    addSpace(space) {
        console.log(space)
        const id = this.state.spaces.length + 1
        this.setState({spaces: [...this.state.spaces, {id, ...space}] })
    }
    
    render () {
        return (
            <div>
                <Header />
                <main>
                    <ul className="classes-list">
                        <Spaces spaces={this.state.spaces}/>
                    </ul>
                </main>
                <aside>
                    <AddSpace onAdd={this.addSpace}/>
                </aside>
            </div>
        )
    }
}

export default SpacesPage