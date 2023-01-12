import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpacesPage from "./pages/UserSpaces/SpacesPage";
import SpacePage from "./pages/Space/SpacePage";
import AuthPage from "./pages/Auth/AuthPage"
import ProfilePage from "./pages/Profile/ProfilePage";
import useToken from "./components/useToken";
import ClassTeacher from "./pages/Class/class";



function App() {
    const { token, setToken } = useToken();

    //Закомментировать для запуска через npm 

    // if(!token) {
    //     return <AuthPage setToken={setToken} />
    // }
    
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/userspaces" element={<SpacesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/space" element={<SpacePage />} />
                <Route path="/login" element={<AuthPage setToken={setToken}/>} />
                <Route path="/classTeacher" element={<ClassTeacher />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App