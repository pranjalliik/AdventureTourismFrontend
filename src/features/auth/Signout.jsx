import { useState } from "react";
import { signout } from "../../services/authApi";
import  {useSelector,useDispatch} from 'react-redux'
import { updateName } from '../users/userSlice';

function Signout() {
    const dispatch = useDispatch()

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await signout();
      // Perform further actions or redirect to another page.
      dispatch(updateName(''))
    } catch (error) {

    }
  };

  return (
    <div onClick={handleClick} className="cursor-default ml-20">
      Logout
    </div>
  );
}

export { Signout };

