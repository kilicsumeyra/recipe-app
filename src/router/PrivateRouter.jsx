import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRouter = () => {
const user= sessionStorage.getItem("user");
  
  return (
    <div>
      {user ? <Outlet/> : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRouter