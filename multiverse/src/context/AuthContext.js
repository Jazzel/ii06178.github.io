import React, { createContext, useContext, useEffect, useState } from 'react'
// import 'firebase/auth'
import { auth, methods } from '../firebase'

const AuthContext = createContext()

export function UseAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return methods.createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return methods.signInWithEmailAndPassword(auth, email, password).then((response) => {
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          })

    }

    function signout() {
        sessionStorage.removeItem('Auth Token');
        return methods.signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
