import React from "react";
import Header from "./components/Header";
import Space from "./components/Spaces";

class App extends React.Component {
    render() {
        return ( 
        <div>
            <Header />
            <main>
                <ul class="classes-list">
                    <Space />
                </ul>
            </main>
        </div>
        )
    }
}

export default App