
import React, { useState ,useEffect} from 'react';
import { signin } from '../../services/authApi';
import  {useSelector,useDispatch} from 'react-redux'
import { updateName } from '../users/userSlice';
import { updateRole } from '../users/userSlice';
import { updateEmail } from '../users/userSlice';
import {Link} from "react-router-dom"
import loginImg from '../../images/loginImg.jpg';
import { useLocation,useNavigate } from 'react-router-dom';





const Signin = () => {

  const location = useLocation()
const navigate = useNavigate()

const dispatch = useDispatch()





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
      const response = await signin(credentials);
      console.log('Sign-in successful. Token:', response);
      // Perform further actions or redirect to another page.
        console.log();

      dispatch(updateName(response.user.name))
      dispatch(updateRole(response.user.role))
      dispatch(updateEmail(response.user.email))

      if(location.state?.from){
           navigate(location.state.from)
      }
    
    } catch (error) {
      console.error('Sign-in failed:', error);
      // Display error message or handle the failure case.
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
        />
      </div>
      <div className='flex gap-x-10'>
        <label className='text-lg font-semibold'>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className='text-black'
        />
      </div>
      <div className='flex flex-col gap-y-3 mt-2'>
           <button type="submit" className=' bg-orange-700 px-4 py-2 rounded-lg'>Sign In</button>
           <div className='text-center'>Dont have an account? <Link to="/signup" className='text-blue-400	underline-offset-2	'>Signup</Link></div>
      </div>
      

    </form>

    </div>

  );
};

export  {Signin};



