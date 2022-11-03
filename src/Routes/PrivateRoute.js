import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../Context/AuthProvider/AuthProvider'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(userContext);
    const location = useLocation();
    if(loading){
      return <p>Loading...</p>
    }
    if(user){
      return children;
    }
  return <Navigate to= '/login'state={{from:location}} replace></Navigate>
}

export default PrivateRoute