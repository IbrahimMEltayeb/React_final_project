import React from 'react'
import Footer from '../../Layout/Footer'

const Guide = () => {

  const guide_style ={
    borderRadius : '20px',
    width : '50%',
    height :'250px'
}

  return <React.Fragment>
    <div className="container mt-5 bg-secondary-subtle text-emphasis-secondary" style={guide_style}>
        <p className='fs-3 text-center'>Please Use the url to reach : product details/id & user details/id</p>
        <p className='fs-4 text-center'>product details pages : productdet/:id</p>
        <p className='fs-4 text-center'>user details pages : userdet/:id</p>
        <p className='fs-5 text-center'>Thanks for your cooperation</p>
    </div>
    </React.Fragment>
}

export default Guide