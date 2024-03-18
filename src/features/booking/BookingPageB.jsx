import {Modelt} from "../../ui/Modelt"
import { useState } from "react"

function BookingPageB({  children ,setSlot}){

    const [modelOpen,setModel] = useState(false)

function modelState(){
  setModel(!modelOpen)
}

function handleClick(slot){
  setModel(true)
  setSlot(slot)
}


    return(
<div className="ml-20 mt-10 p-6  box-border mr-6 bg-gray-100 rounded-lg mb-10">


       
        <div className="bg-white my-4">
        <div className="text-lg	font-semibold ml-1 p-1">gfjnlkm;</div>
        <div className="flex gap-x-6 ">
      
           <div className=" ml-1 mb-2 p-2 hover:bg-black hover:text-white rounded-md"  onClick={()=>handleClick()}>
           key
           </div>   
        
        </div>
        
        </div>

     {modelOpen &&
          <Modelt 
          modelState={modelState}>
            {children}
          </Modelt>
         }
         </div>
    )
}

export {BookingPageB}