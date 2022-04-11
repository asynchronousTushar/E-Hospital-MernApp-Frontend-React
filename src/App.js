import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Inbox from './screens/Inbox';
import Doctors from './screens/Doctors';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import './stylesheets/App.css';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/logout" element={<Navigate to="/login" />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
