import { useQuery } from "@tanstack/react-query";
import { getAllSlots } from "../../../services/apiBook";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
import {Model} from "../../../ui/Model"
import { useState,useEffect } from "react";
import { mapdates } from "../../../services/apiBook";
import { Editdnt } from "./EditDnT";
import { Link } from "react-router-dom";
import  {useDispatch} from 'react-redux'
import { getAllSlot } from "./SlotSlice";
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useMemo } from 'react';

function ScheduleA(){


    let parm = useParams()
    const [info,setid] = useState({}) 
    const [dateKey,setDate] = useState() 
    const [modelOpen,setModel] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        
    dispatch(getAllSlot({id : parm.id}));
    
}, []);

let Slot = []


Slot = useSelector((state)=> state.slot.Slot);
   


console.log(Slot)

const hashMap = useMemo(() => {
  console.log('hii'); // This line will execute only when Slot changes
  return mapdates(Slot);
}, [Slot]);

console.log(hashMap)

function modelState(){
  setModel(!modelOpen)
  
}

 function handleClick(value,key){
  setModel(true)
  setid(value)
  setDate(key)


}




    return(
<div className="ml-20 mt-10 p-6  box-border mr-6  rounded-lg mb-10 bg-black" style={{boxShadow : "2px 2px  15px 2px  gray  "}}>

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
<div className="bg-gray-300 rounded-lg my-4">
<div className="	font-semibold ml-1 p-1">{key}</div>
<div className="flex gap-x-6 ">
  { value.map((slot )=>(
   <div className=" ml-1 mb-2 p-2 font-semibold bg-black hover:opacity-70 text-white rounded-md" onClick={()=> handleClick(slot,key)}>
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

export {ScheduleA}



/*


  
 */