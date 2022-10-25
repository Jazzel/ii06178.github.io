import React, { Component, useRef, useState } from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { UseAuth } from '../context/AuthContext';
function Forgot() {
    const emailRef = useRef()
    const { resetPassword } = UseAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
        }
    
        setLoading(false)
      }

    return (


<div class="container">


    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                    <p class="mb-4">We get it, stuff happens. Just enter your email address below
                                        and we'll send you a link to reset your password!</p>
                                        {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
                                </div>

                                <form class="user">
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..." ref={emailRef} required  />
                                    </div>
                                    <Link to="/login">
                                    <a class="btn btn-primary btn-user btn-block" onClick={handleSubmit}>
                                        Reset Password
                                    </a>
                                    </Link>
                                </form>
                                <hr/>
                                {/* <div class="text-center">
                                <Link to="/register">
                                    <a class="small" href="register.html">Create an Account!</a>
                                    </Link>
                                </div> */}
                                <div class="text-center">
                                <Link to="/login">
                                    <a class="small" href="login.html">Already have an account? Login!</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>


    )

}

export default Forgot;