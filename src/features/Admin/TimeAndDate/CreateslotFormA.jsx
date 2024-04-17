import { useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { createShow } from "../../../services/apiBook";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSlot} from "./SlotSlice";

function SformA(){

    const [year,setYear] = useState('')
    const [month,setMonth] = useState('')
    const [day,setDay] = useState('')
    const [hours,setHours] = useState('')
    const [min,setMin] = useState('')
    const [capacity,setCapacity] = useState('')

    const mutation = useMutation(createShow);
    let parm = useParams()
    const dispatch = useDispatch()

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
        case "hours":
          setHours(value);
          break;
         case "capacity":
         setCapacity(value) 
        default:
          setMin(value);
          break;
      }
}

function handleSubmit(event){
    event.preventDefault();

    if(year === '' || month === '' || day === '' || hours === '' || min === '' || capacity === ''){
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
        day: day,
        hours: hours,
        min: min,
        capacity : capacity
      };
console.log(data);
console.log(parm.id)
    
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
             <label className="text-xl font-semibold	">Date</label>
             <div className="flex gap-x-4">
             <input type="number"
            name="month"
            placeholder="month"
            value={month}
            onChange={handleChange}
            className="w-44 h-8 p-2"
            ></input>

             <input type="number"
            name="day"
            placeholder="date"
            value={day}
            onChange={handleChange}
            className="w-44 h-8 p-2"
            ></input>
            </div>
            </div>



            <div  className="flex flex-col gap-y-2">
             <label className="text-xl font-semibold	">Time</label>
             <div className="flex gap-x-4">
             <input type="number" placeholder="hour" name="hours" value={hours}  onChange={handleChange} className="w-44 h-8 p-2"></input>
            <input type="number" placeholder="min" name="min" value={min} onChange={handleChange} className="w-44 h-8 p-2"></input>
            </div>
            </div>


            <div  className="flex flex-col gap-y-2">
            <label className="text-xl font-semibold	">Capacity</label>
            <input type="number"
            name="capacity"
            value={capacity}
            onChange={handleChange}
            className="w-44 h-8 p-2"
            ></input>
            </div>
            <button onClick={handleSubmit} className="bg-orange-600 p-4 rounded-lg text-white font-bold text-xl py-2 h-11">Create</button>
            </form>
        </>
    )
}

export {SformA}