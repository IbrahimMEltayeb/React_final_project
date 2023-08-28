import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { get_products } from '../../Services/product.service';
// import Productdetails from './Productdetails'

const ProductList = () => {

  const [Products, setProducts] = useState([]);

const getData = async () => {
let data = await get_products()
const {products } = data 
setProducts(products)
}

useEffect(()=>{
getData()
} , [])

//   useEffect(()=>{
//   axios.get('https://dummyjson.com/products')
//   .then((response) =>setProducts(response.data))
//   .catch((error) => console.log('error',error))
// } , [])

  // const products = Products.products;
  console.log(Products)

return  <>
    <p className='text-center m-5 fs-2 bg-body-tertiary'>Products List</p>
    <div className="d-flex gap-5 flex-wrap justify-content-center py-3">
      {
        Products.map((product) => 
          <div className="card bg-secondary-subtle text-emphasis-secondary" style={{width : "18em"}}>
            <img src={product.thumbnail} style={{height : "17em"}} className="card-img-top" alt={product.title}/>
            <div className="card-body ">
              <h5 className="card-title">Name : {product.title}</h5>
              <p className="card-text">Rating : {product.rating}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Brand : {product.brand}</li>
              <li className="list-group-item">Discount : {product.discountPercentage+" %"}</li>
              <li className="list-group-item text-danger">Price : {product.price+" $"}</li>
            </ul>
            <div className="card-body">
              <button className="card-link">Add to Cart</button>
              <button className="card-link">Details</button>
            </div>
          </div>
        )
      }
      
    </div>

    {/* {Products.map(p => <Productdetails prod={p} getDataFromChild={getDataFromChild} />)} */}
  </>


};

export default ProductList;