import {Link} from "react-router-dom"
import SearchBooking from "../features/booking/SearchBooking"
import { useLocation } from "react-router-dom";
import logo from "../images/logo4.png"
import { useSelector,useDispatch } from "react-redux";
import { Signout } from "../features/auth/Signout";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signout } from "../services/authApi";
import { updateName } from '../features/users/userSlice';
import { updateRole } from '../features/users/userSlice';
function Header(){

   const dispatch = useDispatch()
      const mutation = useMutation(signout);
  
     async function signoutfun(){
         console.log('funcalled')
         try {
            await mutation.mutateAsync({}); // Wait for mutation to complete
            console.log(mutation.data);
            dispatch(updateName(''));
            dispatch(updateRole(''));
          } catch (error) {
            console.log(error);
          }

      }    
      


     const username = useSelector((state)=> state.user.username)
     const role = useSelector((state)=> state.user.role)
     const [profileDropdown, setprofileDropdown] = useState()
     console.log(role)  
     const location = useLocation();
     const currentRoute = location.pathname;
     console.log(currentRoute)
    
        return(
            
            <div className="flex h-20 sticky  top-0 bg-black pb-3 pt-2 z-10 ">
                 <div className="flex w-1/3 pl-8">
                 <img  src={logo}></img>
                 </div>
                 <div className="flex w-2/3 justify-end pr-14 gap-x-4 pt-2">
                    {
                      currentRoute   === '/' ?
                      <Link to="tours" className="text-orange-500 font-bold text-xl pl-14 py-2 hover:text-orange-700">TOURS</Link>
               :
                  <>
               <Link to="/"  className=" text-orange-500 font-bold text-xl pl-14 py-2 hover:text-orange-700">HOME</Link>   
               {currentRoute   !== '/tours' &&
               
               <Link to="tours" className="bg-orange-600 p-4 rounded-lg text-white font-bold text-xl py-2 h-11 ml-10">FIND A TOUR</Link> 

              }
               </>
               
            }


               
                  
                  
                     
                     
                   
                    {    !username &&
                     <Link to="/signin"  className=" text-orange-500 font-bold text-xl pl-14 py-2 hover:text-orange-700">LOGIN</Link>
                    }
                    
               

                        <span className="text-orange-500 material-symbols-outlined pl-8 pb-2 cursor-pointer mr-8 pt-3 hover:text-orange-700"  >
                     <Link to="/cart">
                          shopping_cart
                        </Link>
                             </span>
                             <div className="relative">
                           {
                              username &&
                              <>
                             <span className="text-orange-900 material-symbols-outlined pb-2 cursor-pointer mr-8 pt-3 hover:text-orange-700" onClick={ ()=> setprofileDropdown(!profileDropdown)} >
                             account_circle
                             </span>
                              
                              {profileDropdown && 
                              <div className="absolute top-9 left-2 p-3 pr-6 bg-orange-800 font-semibold rounded-md text-white ">
                                 <Link to="/profile"><div className="cursor-default	 pb-2  hover:text-black"  onClick={ ()=> setprofileDropdown(!profileDropdown)}>Profile</div></Link>
                                 <div onClick={signoutfun} className="cursor-default	 hover:text-black pb-2">Logout</div>
                              </div>
                                }
                             </>
                            }
                            </div>
                    </div>
            </div>
            
       
        )
}

export {Header}

   /*                       {      username &&
                       (
                        <>
                   <Signout></Signout>
                   {
                      role === 'admin' &&
                      <div>create</div>
                   }
                   </>
                       )
                       }
                      */ 