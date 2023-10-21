
import React, { useState } from 'react';
import { signin } from '../../services/authApi';
import  {useSelector,useDispatch} from 'react-redux'
import { updateName } from '../users/userSlice';
import { updateRole } from '../users/userSlice';

const Signin = () => {
  
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
        console.log(response);

      dispatch(updateName('pranjali'))
      dispatch(updateRole('admin'))

    
    } catch (error) {
      console.error('Sign-in failed:', error);
      // Display error message or handle the failure case.
    }
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export  {Signin};



