import { Navigate } from "react-router";
import { connect } from 'react-redux';
import { logOut } from "../redux/actions";
import { useEffect } from "react";

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

const LogOut = (props) => {
    useEffect(() => {
        props.logOut()
    }, [])


    return (<Navigate to='/login' />);
}

export default connect(null, mapDispatchToProps)(LogOut);