import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SpacesPage from "./pages/UserSpaces/SpacesPage";
import SpacePage from "./pages/Space/SpacePage"


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

    // if(!token) {
    //     return <AuthPage setToken={setToken} />
    // }
    
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/userspaces" element={<SpacesPage />} />
                <Route path="/space" element={<SpacePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App