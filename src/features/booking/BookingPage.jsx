
import { useQuery } from "@tanstack/react-query";
import { getAllSlots } from "../../services/apiBook";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
import {Modelt} from "../../ui/Modelt"
import { useState } from "react";
import { mapdates } from "../../services/apiBook";
import { set } from "mongoose";
import { Schedule } from "../Admin/TimeAndDate/schedule";

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
        <>
 <div className="ml-20 mt-10 p-6  box-border mr-6 bg-gray-100 rounded-lg mb-10">
        {
            hashMap.size === 0? (
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
    ) :

        Array.from(hashMap.entries()).map(([key, value]) => (
        <div className="bg-white my-4">
        <div className="text-lg	font-semibold ml-1 p-1">{key}</div>
        <div className="flex gap-x-6 ">
          { value.map((slot )=>(
           <div className=" ml-1 mb-2 p-2 hover:bg-black hover:text-white rounded-md"  onClick={()=>handleClick(slot.id)}>
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
        </>
    )
}

export default BookingPage