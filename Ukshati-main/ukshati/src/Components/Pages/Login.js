import React, { useEffect } from 'react'
import { useState } from 'react';
import Layout from '../Layouts/Layout'
import "../Styles/Login.css"
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const navigate  = useNavigate()

    

    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/login', { email, password });
      
            if (response.data.message === 'Login successful') {
              // Redirect to the desired page after successful login
              navigate('/product'); 
            } else {
              console.log(response.data.message);
            }
          } catch (error) {
            console.log(error)
          }

    }
  return (
    <Layout>
        <div className="form-bg" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6" id="container">
                    <div className="form-container" id="form-container">
                    <h3 className="title">Sign In</h3>
                    <ul className="social-links">
                        {/* <li><FaFacebook className='facebook-icon' id="facebook-icon"/></li>
                        <li><FaTwitter className='twitter-icon' id="Twitter-icon"/></li> */}
                        <li><FaGoogle className='google-icon' id="google-icon"/></li>
                    </ul>
                    <span className="description">or use you email for registration:</span>
                    <form className="form-horizontal">
                        {/* <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                        </div> */}
                        <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                        </div>
                        <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                        </div>
                        <div className="form-group">
                        <input type="checkbox" className="checkbox" />
                        <span className="check-label">I agree to the <a href>Terms</a> and <a href>Privacy Policy.</a></span>
                        </div>
                        <button className="btn signup">Sign up</button>
                        <button className="btn signin-login">Sign in</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </Layout>
    
  )
}

export default Login
