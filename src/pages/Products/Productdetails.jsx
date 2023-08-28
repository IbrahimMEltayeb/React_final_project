import React , {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";


const Productdetails = () => {
  
  const { id } = useParams();
  const [prod, SetProduct] = useState({});
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        SetProduct(data);
      } catch (err) {
        console.error("errrorrrr",err);
      }
    };
    fetch();
  }, [id]);


  return <React.Fragment>
    <div className='container bg-secondary-subtle text-emphasis-secondary mt-5'>
      <p className='fs-2 text-center'>Product Details </p>
      <p className='fs-4 text-center'>Product Name : {prod.title}</p>
      <p className='fs-4 text-center'>Product brand : {prod.brand}</p>
      <p className='fs-4 text-center'>Product description : {prod.description}</p>
      <p className='fs-4 text-center'>Product Price : {prod.price}</p>
      <div className="images d-flex gap-5 flex-wrap justify-content-center py-3">
        <img src={prod.thumbnail} alt="" />
        {/* <img src={prod.images[1]} alt="" /> */}
        {/* <img src={prod.images[2]} alt="" /> */}
      </div>
    </div>
    </React.Fragment>
}

  
export default Productdetails;