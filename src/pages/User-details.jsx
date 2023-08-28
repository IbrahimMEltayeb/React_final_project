import React , {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";


const Userdetails = () => {
  
  const { id } = useParams();
  const [user, SetUser] = useState({});
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
        SetUser(data);
      } catch (err) {
        console.log("errorrrr !",err);
      }
    };
    fetch();
  }, []);


  return <React.Fragment>
    <div className='container bg-secondary-subtle text-emphasis-secondary mt-5'>
      <p className='fs-2 text-center'>User Details </p>
      <p className='fs-4 text-center'>User Full Name : {user.firstName +" "+ user.lastName}</p>
      <p className='fs-4 text-center'>Product age : {user.age}</p>
      <p className='fs-4 text-center'>Product email : {user.email}</p>
      <p className='fs-4 text-center'>Product password : {user.password}</p>
      <div className="images d-flex gap-5 flex-wrap justify-content-center py-3">
        <img src={user.image} alt="" />
        {/* <img src={user.images[1]} alt="" /> */}
        {/* <img src={user.images[2]} alt="" /> */}
      </div>
    </div>
    </React.Fragment>
}

  
export default Userdetails;