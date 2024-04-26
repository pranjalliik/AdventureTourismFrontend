
import React, { useState ,useEffect} from 'react';
import  {useSelector,useDispatch} from 'react-redux'
import { signin } from '../users/userSlice';
import {Link} from "react-router-dom"
import { useLocation,useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';




const Signin = () => {

  const location = useLocation()
const navigate = useNavigate()

const dispatch = useDispatch()

let status = useSelector((state)=> state.user.status);
let error = useSelector((state)=> state.user.error);



  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });



  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
   dispatch(signin({email : credentials.email , password : credentials.password}))
   


      if(location.state?.from){
           navigate(location.state.from)
      }
    
    } catch (error) {
    }
  };

 

  return (
    <div className='box-border  h-screen flex justify-center 	bg-no-repeat bg-cover text-white'  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://cdn.pixabay.com/photo/2022/05/04/13/20/view-7173963__480.jpg")'}}> 
       <form className=' w-1/3 opacity-70 p-8  mt-20 rounded-lg bg-black flex flex-col gap-y-8 shadow-orange-600	' style={{height : '60%' }} onSubmit={handleSubmit}>
      <div className='flex gap-x-16 mt-10'>
        <label className='text-lg font-semibold'>Email:</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className='text-black ml-2'
       required />
      </div>
      <div className='flex gap-x-10'>
        <label className='text-lg font-semibold'>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className='text-black'
       required />
      </div>
      <div className='flex flex-col gap-y-3 mt-2'>
           <button type="submit" className=' bg-orange-700 px-4 py-2 rounded-lg'>Sign In</button>
           <div className='text-center'>Dont have an account? <Link to="/signup" className='text-blue-400	underline-offset-2	'>Signup</Link></div>
      </div>
      {status === 'loading' ?
      <div  className="ml-32">
      <ThreeDots
      
        color="#D3D3D3" // Change color of loader
        height={10} // Set height of loader
        width={100} // Set width of loader
      />
      </div> :
      status === 'failed' ?
      <div className='relative pt-1'>
      <div className='text-red-500 font-semibold absolute bottom-1 ml-28'>{error}</div>
      </div>
      :<></>
      }

    </form>

    </div>

  );
};

export  {Signin};



