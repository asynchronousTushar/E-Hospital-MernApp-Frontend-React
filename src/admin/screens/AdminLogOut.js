import { useEffect } from "react";
import { Navigate } from "react-router";

const AdminLogOut = (props) => {

    useEffect(() => {
        //redux isLogedIn: false
    })
    return (
        <Navigate to="/admin/login" />
    )
}

export default AdminLogOut;