
import { useQuery } from "@tanstack/react-query";
import { getAllSlots } from "../../services/apiBook";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
import NoOfPeople from "./noOfPeople";
import {Model} from "../../ui/Model"
import { useState } from "react";
import { mapdates } from "../../services/apiBook";

function BookingPage({children}){

    let parm = useParams()
     
    const [modelOpen,setModel] = useState(false)

function modelState(){
  setModel(!modelOpen)
}

    const {isLoading,data, error,} = useQuery({
        queryKey: ["Slots"],
        queryFn: () =>  getAllSlots(parm.id),
      });
      let hashMap = new Map();

 

      if(data){
       hashMap = mapdates(data)
       
        let map = hashMap[0]
      console.log(map)
      console.log(hashMap)
      }
    return(
        <>

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
        <>
        <div>{key}</div>
        <div className="flex">
          { value.map((slot )=>(
           <div className="m-2" onClick={()=>setModel(true)}>
        {slot.time}
           </div>   
          )) }
        </div>
        
        </>
      ))  
  }
     {modelOpen &&
          <Model 
          modelState={modelState}>
            {children}
          </Model>
         }
        </>
    )
}

export default BookingPage