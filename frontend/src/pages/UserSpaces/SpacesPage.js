import React, { useState }from "react";
import { withRouter } from "../../components/withRouter";
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

        axios.get('http://localhost:8000/space/get_user_spaces', config).then((response) => {
            this.setState({spaces: response.data})
        })

        axios.get('http://localhost:8000/users/me', config).then((response) => {
            this.setState({currentUserId: response.data.id})
        })

        this.state = {
            spaces: [],
            currentUserId: ""
        }
        
        this.addSpace = this.addSpace.bind(this)
        this.addUserToSpace = this.addUserToSpace.bind(this)
        this.deleteSpace = this.deleteSpace.bind(this)
    }

    deleteSpace(space_id) {
        this.setState({
            spaces: this.state.spaces.filter((el) => el.id !== space_id)
            } 
        )
        axios.delete('http://127.0.0.1:8000/space/space_' + space_id, config).then(response => console.log(response.data))
    }
    
    addSpace(space) {
        axios.post('http://localhost:8000/space/', space, config).then((response) => response.data)
        .then((value) => {
            this.setState({spaces: [...this.state.spaces, {...value}] })
            this.addUserToSpace(value.id)
        })
    }

    addUserToSpace(spaceId) {
        axios.post('http://localhost:8000/space/add_user', {
            "space_id": spaceId,
            "user_id": this.state.currentUserId
        }, config)
    }
    
    render () {
        return (
            <div>
                <Header />
                <main>
                    <ul className="classes-list">
                        <Spaces spaces={this.state.spaces} onDelete={this.deleteSpace}/>
                    </ul>
                </main>
                <div>
                    <AddSpace onAdd={this.addSpace}/>
                </div>
            </div>
        )
    }
}

export default withRouter(SpacesPage)