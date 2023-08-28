import React from 'react'

const Aboutus = () => {

    const About_style ={
        borderRadius : '20px',
        width : '50%',
        height :'250px'
    }
  return <React.Fragment>

    <div class="container text-center mt-5 p-3 bg-secondary-subtle text-emphasis-secondary" style={About_style}>
        <p className='fs-2'>About Us</p>
        <p className='fs-4'>Engineer / Abanoub Samir</p>
        <p className='fs-4'>Ibrahim Mohamed Eltayeb</p>
        <p className='fs-5'>Iti summer 2023</p>
    </div>
  </React.Fragment>
}

export default Aboutus