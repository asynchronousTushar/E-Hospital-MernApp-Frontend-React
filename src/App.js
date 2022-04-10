import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import './stylesheets/App.css';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
