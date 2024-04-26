import React, { useState } from 'react';
import { useErrorBoundary } from "react-error-boundary";
import  {useSelector,useDispatch} from 'react-redux'
import { updateName } from '../users/userSlice';
import { updateRole } from '../users/userSlice';
import { updateEmail } from '../users/userSlice';
import { useLocation,useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import {signup} from '../users/userSlice';


const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 const { showBoundary } = useErrorBoundary()
 const dispatch = useDispatch()
 const location = useLocation()
 const navigate = useNavigate()


 let status = useSelector((state)=> state.user.status);
 let error = useSelector((state)=> state.user.error);
 
  async function handleSubmit  (e)  {


    e.preventDefault();
   
      


dispatch(signup({name, email,password,confirmPassword}))



if(location.state?.from){
  navigate(location.state.from)
}


  };

  return (
    <div className='box-border  h-screen flex justify-center 	bg-no-repeat bg-cover text-white'  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://cdn.pixabay.com/photo/2022/05/04/13/20/view-7173963__480.jpg")'}}>
    <form   className='w-1/3 opacity-70 p-8  pl-14 mt-16 rounded-lg bg-black flex flex-col gap-y-7 shadow-orange-600' style={{height : '65%' }} onSubmit={handleSubmit}>
      <div className='flex gap-x-14  '>
        <label htmlFor="name" className='text-lg font-semibold'>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='text-black ml-2' required/>
      </div>
      <div  className='flex gap-x-16 '> 
        <label className='text-lg font-semibold' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='text-black ml-2'  required/>
      </div>
      <div className='flex gap-x-8 '>
        <label className='text-lg font-semibold' htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='text-black ml-2'  required/>
      </div>
      <div className='flex gap-x-8' >
        <label className='text-lg font-semibold' htmlFor="confirmPassword">Confirm <br/>Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='text-black h-7 ml-2' required/>
      </div>
      <button type="submit" className=' bg-orange-700 px-4 py-2 rounded-lg'>Sign Up</button>
      {status === 'loading' ?
      <div  className="ml-32">
      <ThreeDots
      
       // Change type of loader (options: Audio, BallTriangle, Bars, Circles, Grid, Hearts, Oval, Puff, Rings, TailSpin, ThreeDots, Watch)
        color="#D3D3D3" // Change color of loader
        height={10} // Set height of loader
        width={100} // Set width of loader
      />
      </div> :
      status === 'failed' ?
      <div className='relative pt-1'>
      <div className='text-red-500 font-semibold absolute bottom-1 ml-20'>{error}</div>
      </div>
      :<></>
      }
    </form>
    </div>
  );
};

export default SignupForm;
