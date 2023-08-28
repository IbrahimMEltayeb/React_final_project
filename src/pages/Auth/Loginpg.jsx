import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import login from '../../assets/login.jpg'
import Login from '../../Auth/Login'
import Footer from '../../Layout/Footer'

const Loginpg = () => {
  
    const login_style ={
        borderRadius : '20px',
        // backgroundColor : 'whitesmoke',
    }
  
  return <React.Fragment>

<p className='fs-3 mt-5 text-center bg-body-tertiary'>Welcome Back !</p>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-7 bg-secondary-subtle text-emphasis-secondary" style={login_style}>
                <Login />

            </div>
            <div className="col-md-5">
                <img className='img-fluid w-100' src={login} height={400} alt="sign up" />
            </div>
        </div>
    </div>
  </React.Fragment>
}

export default Loginpg