import React, { useContext, useEffect, useState } from 'react'
import 'firebase/auth'
import { auth, methods } from '../firebase'

const AuthContext= React.createContext()
export function UseAuth()
{
    return useContext(AuthContext)
}
export function AuthProvider({children})
{
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)

    function login(email,password)
    {
        
        return methods.signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
        setLoading(false)   
        
        })
    },[])
    
    const value= {
        currentUser,
        login
    }
    
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}