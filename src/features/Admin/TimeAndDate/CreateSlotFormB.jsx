import { useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { createSlot } from "./SlotSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function SformB(){

    const [year,setYear] = useState('')
    const [month,setMonth] = useState('')
    const [day,setDay] = useState('')
    const [capacity,setCapacity] = useState('')

    const dispatch = useDispatch()

    let parm = useParams()

function handleChange(event){
    const {name,value} = event.target

    switch (name) {
        case "year":
          setYear(value);
          break;
        case "month":
          setMonth(value);
          break;
        case "day":
          setDay(value);
          break;
         default:
          setCapacity(value);
          break;
        
      }
}

function handleSubmit(event){
    event.preventDefault();

    if(year === '' || month === '' || day === '' || capacity === ''){
        alert('empty')
      return;
    }
    const currentYear = new Date().getFullYear();
    if(year<currentYear){
        return;
    }

    const data = {
        year: year,
        month: month -1 ,
        day: parseInt(day)+1,
        capacity : capacity,
        seheduleType : 'dayWise',
        capacityLeft : capacity
      };
    
dispatch(createSlot({ sdata: data, id:  parm.id  }));


}


    return(
        <>
        <form className="flex mr-8 mt-8 p-4 flex-col gap-y-6 bg-gray-100 pl-6 pt-6 rounded-lg">

            <div className="flex flex-col gap-y-2">         
            <label className="text-xl font-semibold	">Year</label>
            <input type="number"
            name="year"
            value={year}
            onChange={handleChange}
            className="w-44 h-8 p-2 	"></input>
            </div>
            
            <div  className="flex flex-col gap-y-2">
            <label className="text-xl font-semibold	">Month</label>
            <input type="number"
            name="month"
            value={month}
            onChange={handleChange}
            className="w-44 h-8 p-2"
            ></input>
            </div>

            <div  className="flex flex-col gap-y-2">
            <label className="text-xl font-semibold	">Day</label>
            <input type="number"
            name="day"
            value={day}
            onChange={handleChange}
            className="w-44 h-8 p-2"
            ></input>
            </div>

            <div  className="flex flex-col gap-y-2">
             <label className="text-xl font-semibold	">Capacity</label>
            
             <input type="number" name="capacity" value={capacity}  onChange={handleChange} className="w-44 h-8 p-2"></input>
           
            
            </div>
            <button onClick={handleSubmit} className="bg-orange-600 p-4 rounded-lg text-white font-bold text-xl py-2 h-11">Create</button>
            </form>
        </>
    )
}


export {SformB}