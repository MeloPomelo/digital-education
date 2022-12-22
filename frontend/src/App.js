import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import SpacesPage from "./pages/UserSpaces/SpacesPage";
import AuthPage from "./pages/Auth/AuthPage"



function App() {
    const { token, setToken } = useToken();
    
    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }

    if(!token) {
        return <AuthPage setToken={setToken} />
    }
    
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