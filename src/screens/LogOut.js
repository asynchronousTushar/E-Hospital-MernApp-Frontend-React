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
        const token = localStorage.getItem('authToken');
        
        fetch('http://127.0.0.1:3006/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((res) => {
                if (res.status !== 200) {
                    return;
                }
                props.logOut();
                localStorage.removeItem('authToken')
            })
            .catch(e => {

            })
    }, [])


    return (<Navigate to='/login' />);
}

export default connect(null, mapDispatchToProps)(LogOut);