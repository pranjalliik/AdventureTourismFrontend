import { useQuery } from "@tanstack/react-query";
import { getAllSlots } from "../../../services/apiBook";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
import {Model} from "../../../ui/Model"
import { useState } from "react";
import { mapdates } from "../../../services/apiBook";
import { Editdnt } from "./EditDnT";
import { Link } from "react-router-dom";
function Schedule(){

    let parm = useParams()
    const [info,setid] = useState({}) 
    const [dateKey,setDate] = useState() 

    const [modelOpen,setModel] = useState(false)
    
function modelState(){
  setModel(!modelOpen)
  
}

 function handleClick(value,key){
  setModel(true)
  setid(value)
  setDate(key)


}
    const {isLoading,data, error,} = useQuery({
        queryKey: ["Slots"],
        queryFn: () =>  getAllSlots(parm.id),
      });
      let hashMap = new Map();

 

      if(data){
       hashMap = mapdates(data)
       
        let map = hashMap[0]
   
      }
      console.log(hashMap)
    return(
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
           <div className=" ml-1 mb-2 p-2 hover:bg-black hover:text-white rounded-md" onClick={()=> handleClick(slot,key)}>
        {slot.time}
           </div>   
          )) }
        </div>
        
        </div>
      ))  
  }
     {modelOpen &&
          <Model 
          modelState={modelState}>
           <Editdnt info = {info}
               date = {dateKey}
           ></Editdnt>
          </Model>
         }
        </div>
    )
        }

export {Schedule}