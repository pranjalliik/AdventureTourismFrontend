

import { TailSpin } from 'react-loader-spinner'
import {Modelt} from "../../ui/Modelt"
import { useState } from "react";


function BookingPage({ hashMap, children ,setSlot}){

   
     
    const [modelOpen,setModel] = useState(false)

function modelState(){
  setModel(!modelOpen)
}

function handleClick(slot){
  setModel(true)
  setSlot(slot)
}
    
    return(
        
 <div className="ml-20 mt-10 p-6 bg-gray-300 box-border mr-6 rounded-lg shadow-lg" style={{boxShadow : "2px 2px  15px 2px  gray  "}}  >
        {
            hashMap.size === 0? (
              <div className="flex justify-center">
      <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
    ) :

        Array.from(hashMap.entries()).map(([key, value]) => (
        <div className="bg-white rounded-lg my-4 ">
        <div className="text-lg	font-semibold ml-4 p-1">{key}</div>
        <div className="flex gap-x-6 ">
          { value.map((slot )=>(
           <div className=" ml-4 mb-2 p-2 bg-black text-white rounded-md hover:opacity-70 cursor-default "  onClick={()=>handleClick(slot.id)}>
        {slot.time}
           </div>   
          )) }
        </div>
        
        </div>
      ))  
  }
     {modelOpen &&
          <Modelt 
          modelState={modelState}>
            {children}
          </Modelt>
         }
         </div>
      
    )
}

export default BookingPage