import React, { useEffect } from 'react';
import './stylesheets/App.css';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Home from './screens/Home';
import Inbox from './screens/Inbox';
import Doctors from './screens/Doctors';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Requests from './screens/Requests';
import RequestForm from './screens/RequestForm';
import LogOut from './screens/LogOut';
import Admin from './admin/screens/Admin';
import AdminInbox from './admin/screens/AdminInbox';
import AdminLogOut from './admin/screens/AdminLogOut';
import AdminLogIn from './admin/screens/AdminLogIn';
import AdminSignUp from './admin/screens/AdminSignUp'

import { checkAuthToken, switchMode } from './redux/actions';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthToken: (token) => dispatch(checkAuthToken(token)),
        switchMode: () => dispatch(switchMode())
    }
}


const App = (props) => {

    const route = window.location.href.toString().slice(window.location.origin.toString().length, window.location.href.toString().length);
    console.log(props)

    useEffect(() => {
        if (route.startsWith('/admin')) {
            props.switchMode()
            localStorage.removeItem('authToken')
        } else {
            const token = localStorage.getItem('authToken');
            props.checkAuthToken(token)
        }
    }, [])

    let routes = null;

    // if (props.isLoading === true) {
    //     let loader = <div className="d-flex vh-100 bg-white align-items-center justify-content-center">
    //         <Spinner color="danger" type="grow"></Spinner>
    //         <Spinner color="info" type="grow"></Spinner>
    //         <Spinner color="warnning" type="grow"></Spinner>
    //     </div>;

    //     routes = <Route path='/' element={loader} />
    // } else
    if (props.mode === 'user' && props.isLogedIn === false) {
        routes = (
            <React.Fragment>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </React.Fragment>
        )

    } else if (props.mode === 'user' && props.isLogedIn === true) {
        routes = (
            <React.Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/request" element={<RequestForm />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </React.Fragment>
        )

    } else if (props.mode === 'admin' && props.isLogedIn === false) {
        routes = (
            <React.Fragment>
                <Route path="/" element={<Navigate to="/admin" />} />
                <Route path="/admin" element={<Navigate to="/admin/login" />} />
                <Route path="/admin/login" element={<AdminLogIn />} />
                <Route path="/admin/signup" element={<AdminSignUp />} />
            </React.Fragment>
        )

    } else if (props.mode === 'admin' && props.isLogedIn === true) {
        routes = (
            <React.Fragment>
                <Route path="/" element={<Navigate to="/admin"/>} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/logout" element={<AdminLogOut />} />
                <Route path="/admin/inbox" element={<AdminInbox />} />
            </React.Fragment>
        )
    }

    return (
        <Routes>
            {routes}
        </Routes>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
