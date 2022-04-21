import React, { useEffect } from 'react';
import './stylesheets/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
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
import { checkAuthToken } from './redux/actions';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthToken: (token) => dispatch(checkAuthToken(token))
    }
}

const App = (props) => {
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        props.checkAuthToken(token)
    }, [])

    let routes = null;

    if (props.isLogedIn === undefined) {
        routes = <div className="d-flex vh-100 bg-white align-items-center justify-content-center">
            <Spinner color="danger" type="grow"></Spinner>
            <Spinner color="info" type="grow"></Spinner>
            <Spinner color="warnning" type="grow"></Spinner>
            </div>
    } else if (props.isLogedIn === false) {
        routes = (
            <Routes>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        )

    } else if (props.isLogedIn === true) {
        routes = (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/request" element={<RequestForm />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        )
    }

    console.log(props)

    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
