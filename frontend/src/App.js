import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SpacesPage from "./pages/UserSpaces/SpacesPage";


class App extends React.Component {
    render() {
        return ( 
            <BrowserRouter>
                <Routes>
                    <Route path="/user-spaces" element={<SpacesPage />} /> 
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App