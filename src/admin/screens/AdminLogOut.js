import { useEffect } from "react";
import { Navigate } from "react-router";
import { connect } from "react-redux";
import { adminLogOut } from "../../redux/actions";

const mapDispatchToProps = dispatch => {
    return {
        adminLogOut: () => dispatch(adminLogOut())
    }
}

const AdminLogOut = (props) => {

    useEffect(() => {
        //redux isLogedIn: false
        props.adminLogOut();
    })
    return (
        <Navigate to="/admin/login" />
    )
}

export default connect(null, mapDispatchToProps)(AdminLogOut);