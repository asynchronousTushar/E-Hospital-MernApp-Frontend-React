import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Inbox from './screens/Inbox';
import Doctors from './screens/Doctors';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import './stylesheets/App.css';
import Requests from './screens/Requests';
import RequestForm from './screens/RequestForm';
import { connect } from 'react-redux';
import LogOut from './screens/LogOut';

const mapStateToProps = (state) => {
    return state;
}

function App(props) {
    return (
        <React.Fragment>
            {!props.user ?
                <Routes>
                    <Route path="/" element={<Navigate to='/login' />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
                :
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/requests" element={<Requests />} />
                    <Route path="/request" element={<RequestForm />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            }
        </React.Fragment>
    );
}

export default connect(mapStateToProps, null)(App);
