import React from "react";
import Header from "../../components/Header";
import Spaces from "./Spaces";
import axios from "axios"
import AddSpace from "./AddSpace";
import "./classesStyle.css"

const token = sessionStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

class SpacesPage extends React.Component {
    constructor (props) {
        super(props)

        axios.get('http://localhost:8000/space/?skip=0&limit=100', config).then((response) => {
            this.setState({spaces: response.data})
        })

        this.state = {
            spaces: []
        }
        this.addSpace = this.addSpace.bind(this)
    }
    
    addSpace(space) {
        console.log(space)
        axios.post('http://localhost:8000/space/', space, config).then((response) => {
            this.setState({spaces: response.data})
            console.log(response.data)
        })
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
                <div>
                    <AddSpace onAdd={this.addSpace}/>
                </div>
            </div>
        )
    }
}

export default SpacesPage