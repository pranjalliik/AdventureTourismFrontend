import { useQuery } from "@tanstack/react-query";
import { getAllSlot } from "./SlotSlice"; 
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
import {Model} from "../../../ui/Model"
import { useState ,useEffect} from "react";
import { mapdates } from "../../../services/apiBook";
import { EditdntB } from "./EditDntB";
import { useSelector } from "react-redux/es/hooks/useSelector"
import  {useDispatch} from 'react-redux'


function ScheduleB(){

    let parm = useParams()
    const [info,setid] = useState({}) 
    const [dateKey,setDate] = useState() 
    const [modelOpen,setModel] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        
      dispatch(getAllSlot({id : parm.id}));
      
  }, []);

    let data = []


    data = useSelector((state)=> state.slot.Slot);
    console.log(data)    
  
function modelState(){
  setModel(!modelOpen)
  
}

 function handleClick(slot){
  setModel(true)
  setid(slot)
  setDate(displayDate(slot.date))
  

}

function displayDate(x){
  const formattedDate = x.toLocaleString();
  let dateData = formattedDate.split('T18:30:00.000Z')
  console.log(formattedDate)
  return dateData[0];
}



    return(
        <div className="ml-20 mt-10 p-6  box-border mr-6  rounded-lg mb-10 bg-black flex justify-around" style={{boxShadow : "2px 2px  15px 2px  gray  "}}>

        {
           data.length === 0? (
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
    data.map((slot) => (
        
        <div className=" p-2 bg-orange-700 font-semibold  hover:opacity-70 text-white rounded-md" onClick={()=> handleClick(slot)}  >{displayDate(slot.date)}</div>

        
     
      ))  
  }
     {modelOpen &&
          <Model 
          modelState={modelState}>
           <EditdntB info = {info}
               date = {dateKey}
           ></EditdntB>
          </Model>
         }
        </div>
    )
}

export {ScheduleB}