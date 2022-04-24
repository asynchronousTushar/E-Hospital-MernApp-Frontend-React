import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Admin from './screens/Admin';
import AdminInbox from './screens/AdminInbox';
import AdminLogIn from './screens/AdminLogIn';
import AdminLogOut from './screens/AdminLogOut';
import AdminSignUp from './screens/AdminSignUp';
import { connect } from 'react-redux';
import { switchAdmin } from '../redux/actions';


const mapDispatchToProps = {
    switchAdmin
}

const mapStateToProps = state => {
    return state;
}

const Main = (props) => {

    useEffect(() => {
        props.switchAdmin();
        localStorage.removeItem('authToken')
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/login" element={<AdminLogIn />} />
                <Route path="/signup" element={<AdminSignUp />} />
                <Route path="/logout" element={<AdminLogOut />} />
                <Route path="/inbox" element={<AdminInbox />} />
            </Routes>
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);