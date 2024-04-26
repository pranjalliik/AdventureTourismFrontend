
import { useState } from "react"
import {Link} from "react-router-dom"

function SideBar(){

    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <>
        {
            !isExpanded &&
            <div className="h-screen bg-orange-600 px-2 pt-2  text-white pt-4" style={{backgroundColor : "#302e39"}}>
            <span className="material-symbols-outlined" onClick={() => setIsExpanded(!isExpanded)}>
             menu
              </span>
              </div>
              }
              {
                
                    isExpanded &&
                    <div className="w-2/12 h-screen bg-orange-600 pt-4 box-border pl-4 " style={{backgroundColor : "#302e39"}}>
          <span className ="material-symbols-outlined text-white  " onClick={() => setIsExpanded(!isExpanded)}>
             menu

              </span>

              <div className="flex flex-col pl-6 text-white space-y-4 pt-4" >
              <Link to='/tours' className="hover:text-black">Menu</Link>
              <Link to='/add' className="hover:text-black"  onClick={() => setIsExpanded(!isExpanded)}>Add</Link>
              <Link to='/users' className="hover:text-black" >Users</Link>
              </div>
        </div>
        }
        </>
    )
}

export {SideBar}



