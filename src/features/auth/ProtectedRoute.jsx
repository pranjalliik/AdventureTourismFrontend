import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user.username);
    let location = useLocation();
 console.log(location)
    if(!user) {
        return <Navigate to="/signin" replace state={{ from: location}}  />
    }
 return children

};

export default ProtectedRoute;