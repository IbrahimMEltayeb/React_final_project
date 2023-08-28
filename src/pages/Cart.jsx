import React from 'react'

const Cart = () => {

    const Cart_style ={
        borderRadius : '20px',
        width : '60%',
        height :'120px'
    }

  return <React.Fragment>
    <div class="container text-center mt-5 p-3 bg-secondary-subtle text-emphasis-secondary" style={Cart_style}>
        <p className='fs-2'>No Elements in the cart</p>
    </div>
    </React.Fragment>
}

export default Cart