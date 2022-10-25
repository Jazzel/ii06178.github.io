import React, { Component, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Router, Route, Switch, Link, useNavigate, } from 'react-router-dom';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { UseAuth } from "../context/AuthContext";
function Log() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = UseAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(currentUser)
    if (currentUser) {
      navigate('/dashboard')
    }
  }, [currentUser])

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/dashboard")
    } catch (e) {
      console.log(e)
      setError("Failed to sign in")
    }

    setLoading(false)
  }

  return (

    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={HandleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Log In
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to="/forgot">Forgot Password?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container">


    //     <div className="row justify-content-center">

    //         <div className="col-xl-10 col-lg-12 col-md-9">

    //             <div className="card o-hidden border-0 shadow-lg my-5">
    //                 <div className="card-body p-0">

    //                     <div className="row">
    //                         <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
    //                         <div className="col-lg-6">
    //                             <div className="p-5">
    //                                 <div className="text-center">
    //                                 {error && <Alert variant="danger">{error}</Alert>}
    //                                     <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
    //                                 </div>
    //                                 <form className="user">
    //                                     <div className="form-group">
    //                                         <input type="email" className="form-control form-control-user"
    //                                             id="exampleInputEmail" aria-describedby="emailHelp"
    //                                             placeholder="Enter Email Address..." ref={emailRef} required/>
    //                                     </div>
    //                                     <div className="form-group">
    //                                         <input type="password" className="form-control form-control-user"
    //                                             id="exampleInputPassword" placeholder="Password" ref={passwordRef} required />
    //                                     </div>
    //                                     <div className="form-group">
    //                                         <div className="custom-control custom-checkbox small">
    //                                             <input type="checkbox" className="custom-control-input" id="customCheck" />
    //                                             <label className="custom-control-label" for="customCheck">Remember
    //                                                 Me</label>
    //                                         </div>
    //                                     </div>
    //                                     <hr />
    //                                     {/* <Link to="/dashboard"> */}
    //                                         <a class="btn btn-primary btn-user btn-block" onSubmit={HandleSubmit}>

    //                                             Log In

    //                                         </a>
    //                                     {/* </Link> */}
    //                                     <hr />
    //                                     <a href="index.html" className="btn btn-google btn-user btn-block">
    //                                         <i className="fab fa-google fa-fw"></i> Login with Google
    //                                     </a>
    //                                     <a href="index.html" className="btn btn-facebook btn-user btn-block">
    //                                         <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
    //                                     </a>
    //                                 </form>
    //                                 <hr />
    //                                 <div className="text-center">
    //                                 <Link to="/forgot">
    //                                     <a className="small">Forgot Password?</a>
    //                                     </Link>
    //                                 </div>
    //                                 <div className="text-center">
    //                                     <Link to="/register">
    //                                         <a >Create an Account!</a>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //     </div>

    // </div>



  )

}

export default Log;