import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SpacesPage from "./pages/UserSpaces/SpacesPage";
import AuthPage from "./pages/Auth/AuthPage"


// class App extends React.Component {
//     render() {
//         return ( 
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/user-spaces" element={<SpacesPage />} />
//                     <Route path="/login" element={<AuthPage />} /> 
//                 </Routes>
//             </BrowserRouter>
//         )
//     }
// }

function App() {
    function setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
    }
    
    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }

    const token = getToken()

    if(!token) {
        return <AuthPage setToken={setToken} />
    }
    
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/user-spaces" element={<SpacesPage />} />
                <Route path="/login" element={<AuthPage />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App