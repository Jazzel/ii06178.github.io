import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UseAuth } from '../context/AuthContext'

const ProtectedRoute = () => {

    const { currentUser } = UseAuth()
    const navigate = useNavigate()
    console.log(!currentUser)

    useEffect(() => {
        if(!currentUser) {
            navigate('/login', {replace: true})
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute