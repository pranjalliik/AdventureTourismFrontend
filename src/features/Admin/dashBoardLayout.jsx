import { SideBar } from "./SideBar"
import { LineChart } from "./LineChart"

function DashBoardLayout({children}){

    return(
        <>
       <div className="w-full flex">
        <SideBar></SideBar>

  
        <div className="w-full">
           
            {children}</div>
        </div>
      
           </>
    )
}
export {DashBoardLayout}