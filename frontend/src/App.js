import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpacesPage from "./pages/UserSpaces/SpacesPage";
import AuthPage from "./pages/Auth/AuthPage"
import useToken from "./components/useToken";



function App() {
    const { token, setToken } = useToken();

    if(!token) {
        return <AuthPage setToken={setToken} />
    }
    
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/userspaces" element={<SpacesPage />} />
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App