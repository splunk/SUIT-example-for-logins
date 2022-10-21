import React, { StrictMode, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Success from './Components/Success';
import LoginComponent from './Components/LoginComponent';
import LoginContext from './Components/LoginContext';

// we use React Router and React Context to control the navigation depending on the authentication

function App() {
    const authStatus = useState(false); // initalize our context with a state hook
    console.log(authStatus);

    return (
        <StrictMode>
            <LoginContext.Provider
                value={
                    authStatus // pass authStatus into the Context Provider
                }
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/success" element={<Success />} />
                    </Routes>
                </BrowserRouter>
            </LoginContext.Provider>
        </StrictMode>
    );
}

export default App;
