import { useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import {loadStripe} from '@stripe/stripe-js';
import { createContext } from "react";
import  {useDispatch} from 'react-redux'
import { updateId } from "./bookingSlice";
import { updateData } from "./bookingSlice";
import { useSelector } from "react-redux";

function NoOfPeople({selectedSlot}){
    let parm = useParams()

    const dispatch = useDispatch()


const [proceed,setProceed] = useState(false);
const [arr, setArr] = useState([false,false,false,false,false]);
const [currNo,setCurrNo] = useState(0);
const[amount,setAmount] = useState('');



const {
    isLoading,data : tourdata,error,status
  } = useQuery({
    queryKey: ["Tour"],
    queryFn: async function getTour(id){
        try{
        const res = await  axios.get(`http://localhost:5000/tours/${parm.id}`) 
                 return res;
        }
    catch(err){
     
        return err.message;
    }
    },
  });

 // const id = useSelector((state)=> state.order.id)
  //const data = useSelector((state)=> state.order.data)
  //console.log(id+" bkjn "+data)

async function proceedToPay(){

    if(!proceed)return;
    


    let info = {
        no : currNo+1
    }
    let a = currNo +1


    dispatch(updateId(selectedSlot))
 dispatch(updateData(a))

console.log(selectedSlot+" rty "+ a)
   const stripe = await loadStripe("pk_test_51OCj1USBDBpj1eDoWncBpicaxct1qsmaE8xFPlZmwRCGZHp0IXIm9oq12aQV2Y6Ds3TUDzJ0pHVLf7nnS7vFGHYZ00znaYHYTh");
    const response = await axios.post(`http://localhost:5000/book/checkoutsession/${selectedSlot}`,
    info, {
     headers: {
       'Content-Type': 'application/json',
     }
}
    )
 console.log(response)
 const result = stripe.redirectToCheckout({
    sessionId: response.data.session.id
});

if(result.error){
    console.log(result.error);
}

}

function canProceed(idx){
    if(!proceed){
        setProceed(true)
    }

    
    setArr(prevArray => {
        const newArray = [...prevArray];
        newArray[currNo] = false;
        newArray[idx] = true;
        return newArray
      });
    
      setCurrNo(idx)
     
      setAmount('Rs ' + (idx+1)*tourdata.data.data.price)
}
    return(
        <div>
        <div className="flex gap-x-6 px-6 pb-4 font-bold text-lg cursor-default">
        
        {
             arr.map((val,idx) => ( 
             <div className={`px-3 py-1 rounded-md ${val? 'bg-orange-500' : 'bg-gray-400'}`} onClick={()=> canProceed(idx)}>{idx+1}</div>
             ))
        }

        </div>

       <div className="flex justify-center">
        <button className={`px-4 py-2 my-2 rounded-lg font-semibold ${proceed ? 'cursor-default' : 'cursor-not-allowed'} ${proceed ? 'bg-orange-500' : 'bg-gray-400'}`}
        onClick={()=>proceedToPay()}
        >
         Proceed to Pay { amount}
       </button>
       </div>
        </div>
    )
}

export default NoOfPeople