import React, { useEffect } from 'react'
import { useAuth } from '../storage/auth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {LogoutUser}=useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        LogoutUser()
        navigate("/login")
    },[LogoutUser,navigate])
  return null
}

export default Logout