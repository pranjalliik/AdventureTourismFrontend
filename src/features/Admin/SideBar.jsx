
import { useState } from "react"
import {Link} from "react-router-dom"

function SideBar(){

    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <>
        {
            !isExpanded &&
            <div className="h-screen bg-orange-600 px-2 pt-2  text-white pt-4" style={{backgroundColor : "#302e39"}}>
            <span class="material-symbols-outlined" onClick={() => setIsExpanded(!isExpanded)}>
             menu
              </span>
              </div>
              }
              {
                
                    isExpanded &&
                    <div class="w-2/12 h-screen bg-orange-600 pt-4 box-border pl-4 " style={{backgroundColor : "#302e39"}}>
          <span class="material-symbols-outlined text-white  " onClick={() => setIsExpanded(!isExpanded)}>
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





/*

<!DOCTYPE html>
<html>
<head>
  <title>Another simple example</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="flex ">
    <div class="bg-slate-300 w-3/12">sisebar</div>
    <div class="bg-red-100 flex-grow">
        <div class ="font-semibold	text-2xl m-6">Product</div>
        <table class="border-collapse border border-slate-500 w-full  ">
               <tr>
      <th class="border border-slate-600 ...">Tour Name</th>
      <th class="border border-slate-600 ...">Pricing</th>
      <th class="border border-slate-600 ...">Rating</th>
      <th class="border border-slate-600 ...">edit/del</th>
    </tr>
  </thead>
           <tbody>
    <tr>
      <td class="border border-slate-700 ...">Indiana</td>
      <td class="border border-slate-700 ...">Indianapolis</td>
    </tr>
               </tbody>

            </table>
    </div>
</div>

</body>
</html>

*/