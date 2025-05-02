import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <progress className="progress w-full"></progress>
    }

    if(user) {
        return children
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;