import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteSlot } from "../../../services/apiBook";
import { updateSlot } from "./SlotSlice";
import { useDispatch } from "react-redux";
import { getAllSlot } from "./SlotSlice";

function Editdnt({info,date}){


    const dispatch = useDispatch()


const datearr = date.split("/");

const timerr = info.time.split(':')

const [hours,setHours] = useState(timerr[0])
const [min,setMin] = useState(timerr[1])
const [capacity,setCapacity] = useState(info.capacity)
const [change,setChange] = useState()
const [whatActiontoPerform,setwhatActiontoPerform] = useState()


const delMutation = useMutation(deleteSlot)
const handleUpdate = async ()=>{
    
    if(min === timerr[1] && hours ===timerr[0] && capacity === info.capacity){
        return;
    }

    let data = {
        year: datearr[2],
        month: datearr[0] -1 ,
        day: datearr[1],
        hours: hours,
        min: min,
        capacity : capacity
    }

     dispatch(updateSlot({ newdata: data, id: info.id }))
}




const areYousure= async (event)=>{

    setChange(false)
    if(event.target.name === 'no') {
        setwhatActiontoPerform()
        return
    }

    if(whatActiontoPerform === 'update'){
       
        handleUpdate()
        return;
    }else{
     handleDelete();

    }
}

const upDelclicked =  (event)=>{
    event.preventDefault();
    if(change) return

    setwhatActiontoPerform(event.target.name) 
    setChange(true)
}

function handleChange(event){
     setChange(false)

    const { name, value } = event.target;
    if(name === 'hour'){
        setHours(value)
    }else if(name === 'min'){
        setMin(value)
    }else if(name === 'capacity'){
        setCapacity(value)
    }
   
}
const handleDelete = async ()=>{
  delMutation.mutate({id : info.id})
  //dispatch(getAllSlot({  id: info.id }))

}

    return(
        <> 
        <div className="box-border h-74 ">
        <form className="px-6 pt-4 pb-2 flex flex-col gap-y-6 ">
          
         <div className="flex gap-x-3">
            <label className="text-xl font-semibold text-white	">Date</label>
            <input defaultValue= {date} readonly="readonly "className="pl-1 ml-8 rounded-md"></input>
            </div>
            <div className="flex gap-x-3">
            <label className="text-xl font-semibold text-white	">Capacity</label>
            <input className="pl-1 rounded-md" name="capacity" defaultValue= {capacity}  onChange={handleChange} ></input>
            </div> 
            <div className="flex flex-col gap-y-1">
            <label className="text-xl font-semibold text-white ">Time</label>
           <div className="flex gap-x-3 ">
            <input placeholder="hours" defaultValue= {hours} name="hour" className="pl-1 rounded-md" onChange={handleChange}></input>
            <input placeholder="min" defaultValue= {min} name="min" className="pl-1 rounded-md h-7" onChange={handleChange}></input>
            </div>
         </div>
       
        <div className="flex gap-x-4 justify-center mt-2">
        <button onClick={ upDelclicked} name= 'delete' className="w-20 bg-red-700 p-1 rounded-md  font-semibold text-white hover:opacity-75">Delete</button>
        <button onClick={upDelclicked} name = 'update' className="w-20 bg-green-700 rounded-md   font-semibold text-white hover:opacity-75">Update</button>
        </div>
        </form>
         {
          change && (
            <div className="flex  pl-6 pr-3 pb-4 mt-2 ">
               <div  className="text-xl font-semibold text-white mr-4">Are you sure you want to {whatActiontoPerform}:</div>
                <div className="items-center flex justify-center gap-x-3 font-semibold">
                    <button name ="yes" onClick={areYousure} className="px-2 py-1 bg-gray-300 rounded-md hover:bg-green-700 hover:text-white">Confirm</button>
                    <button name= "no" onClick={areYousure} className="px-2 py-1 bg-gray-300 rounded-md  hover:bg-red-700 hover:text-white">No</button>
                    </div>  
            </div>
          )  
         }
        </div>
        </>


    )
}

export {Editdnt}