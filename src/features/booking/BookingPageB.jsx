import {Modelt} from "../../ui/Modelt"
import { useState } from "react"
import { TailSpin } from 'react-loader-spinner'
import { useParams } from "react-router-dom";

function BookingPageB({ data, children ,setSlot}){

    const [modelOpen,setModel] = useState(false)
    let parm = useParams()
function modelState(){
  setModel(!modelOpen)
}

function handleClick(slot){
  setModel(true)
  setSlot(slot)
}

function displayDate(x){
  const formattedDate = x.toLocaleString();
  let dateData = formattedDate.split('T18:30:00.000Z')
  return dateData[0];
}



    return(
<div className="ml-20 mt-10 p-6  box-border mr-6 bg-gray-100 rounded-lg mb-10 flex  justify-around "   style={{boxShadow : "2px 2px  15px 2px  gray  "}}>


       
{
           data.length === 0? (
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
    /></div>
    ) :
    data.map((slot) => (
        
        <div className=" p-2 bg-black font-semibold  hover:opacity-70 text-white rounded-md" onClick={()=> handleClick(slot._id)}  >{displayDate(slot.date)}</div>

        
     
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

export {BookingPageB}