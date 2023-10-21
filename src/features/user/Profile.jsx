import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function Profile(){

    return(
        <>
        <div className="flex justify-start pl-40 gap-x-20 p-10 pb-6  font-bold text-xl bg-gray-100 " >
          <Link to= "/profile"><div className="hover:text-orange-700 ">Edit</div></Link>
          <Link to= "/profile/userbookings"><div className="hover:text-orange-700">Bookings</div></Link>
          <Link to= "/profile/changepassword"><div className="hover:text-orange-700">Change Password</div></Link>
        </div>
        <Outlet/>
        </>
    )
}

export {Profile}