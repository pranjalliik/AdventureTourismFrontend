import { SideBar } from "./SideBar"

function DashBoardLayout({children}){

    return(
       <div className="w-full flex">
        <SideBar></SideBar>
        <div className="w-full">{children}</div>
        </div>
     
    )
}
export {DashBoardLayout}