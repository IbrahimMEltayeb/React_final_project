import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reg from '../../assets/reg.jpg'
import Reg from '../../Auth/Reg'

const Regpg = () => {
  
    const reg_style ={
        borderRadius : '20px',
        height: '650px'
    }
  
  return <React.Fragment>

<p className='fs-3 mt-5 text-center bg-body-tertiary'>Welcome to our Store !</p>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-7 bg-secondary-subtle text-emphasis-secondary" style={reg_style}>
                <Reg/>
            </div>
            <div className="col-md-5">
                <img className='img-fluid w-100' src={reg} height={400} alt="sign up" />
            </div>
        </div>
    </div>

  </React.Fragment>
}

export default Regpg