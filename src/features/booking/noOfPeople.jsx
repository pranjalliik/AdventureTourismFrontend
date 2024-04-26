import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import {loadStripe} from '@stripe/stripe-js';
import { createContext } from "react";
import  {useDispatch} from 'react-redux'
import { updateId } from "./bookingSlice";
import { updateData } from "./bookingSlice";
import { useSelector } from "react-redux";
import { Payment } from "./Payment";


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}






function NoOfPeople({selectedSlot,maxBooking}){

  const api_url = process.env.REACT_APP_API_URL;
   let capacityToReduce = 0;
    let parm = useParams()
    const dispatch = useDispatch()
    let info = {}

const [proceed,setProceed] = useState(false);
const [currNo,setCurrNo] = useState(0);
const[amount,setAmount] = useState('');
const[housefull,setHouseFull] = useState('');

const [arr, setArr] = useState([]);

const initializeArray = (length, defaultValue) => {
  return Array.from({ length }, () => defaultValue);
};


useEffect(() => {
  setArr(initializeArray(maxBooking, false));
}, [maxBooking]);





const {
    isLoading,data : tourdata,error,status
  } = useQuery({
    queryKey: ["Tour"],
    queryFn: async function getTour(id){
        try{
        const res = await  axios.get(`${api_url}/tours/${parm.id}`) 
                 return res;
        }
    catch(err){
     
        return err.message;
    }
    },
  });



async function loadPaymentPage(response){
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
     if (!res) {
         alert('Razorpay SDK failed to load. Are you online?')
         return
     }
  
     const options = {
         key:  process.env.REACT_APP_KEY ,
         currency: response.data.currency,
         amount: response.data.amount.toString(),
         order_id: response.data.id,
         name: response.data.name,
         description: 'Thank you . Please give us some money',
         image: 'https://yandex-images.clstorage.net/9GIx83k50/d12552JWbx/hHGAiJ9sD-07WAKTOPwVuDx7O0qQVua_NBwBDAWP7wtJCfW2HAnOsavShIK-oI0DNW303cMiEUONyt5_hX0jvcA7g5CENE3udghG2XT3Eql0YT8VwAr7qWtIQgwvtfNDUx7vozV7_4KG6b6zg5TreHo_qI-WbhASg5exEJUmVf29ZsLj6UEK_h14KplF5jyPfUUjUoVLzcIvFQFqCqfOYHYM5a8jaNqBi-W6jpqL-FhQJIOTmWNMGKOqlyzgO1bErlT16OVkGtk6cimGYPI_qlhyF3SEedPCHigjdDai_XJOGuCjO1TsjK7ZppGeu8R0cxuCvoJuWge6oIoa8DtR0KxF9tDmRQrJLHgEhlfwP4h9dDVhmnDy4QIYN2UtrsJveSjrjjNq1pCh7L6Yv4X1X3AMs7m2fFIhjZyPOPsFQ8yDQcrt9EcS3g1jKpRh5BqyVXE5QZZF5-ErDjB7M77fSXIR0IUERuaWsuSVqIu31UJGE76OgHtNJaSOoSzCKVHsvVrJ7MJEEP86WwaQQv4Ym2RTA06gWe3fDxY0UQCv_3BrEMmQAXH1jK33gYSPn8FwZhqNo5dvVhOik7cf2jdT3ZZD1tbbaQj9I08-g27JJJ13VD19t17r4D0MP284uu9_fA_xmDpm5q2C3Zm4i6vYR08ciYencHQcnYmiDsAIcd2VV9738ng83CFuB6le1RuKfEY3Y4Bxx9krPhxmGJL1UFYw0aU_dPCJvvWdo7KkxkVOGYy8lVpzHIiMmSbRK3bGjkXe8vlnOt4sdgORfOQmg1VmHki7Xs_3IAM8WRqa3WduC8C1G3LyiJD3t62OpOVYZimOp4BzcBeOv5oG7Txx4INr0MLUaiH0JU8Fo3XEBa1XVi9FklfO6wozD1oUhPlSchvfviFF_JmexaOvhJ3hVEsMkZ2fWG0fgaCIPs8HR9GuZ9zW00c0-SBjBIFixh-dZmYqSKJg0MYZExB5Mr8',
         handler: function (resp) {
            
         },
         prefill: {
             user : '',
             email: 'sdfdsjfh2@ndsfdf.com',
             phone_number: '9899999999',
         },     
        notes: {
         user : response.data.user,
         slot : selectedSlot,
         no : info.no,
         capacityToReduce : response.data.capacityToReduce,
         amount : response.data.amount/100,
         tour : response.data.tour,
         date : response.data.date
         }
     }
     const paymentObject = new window.Razorpay(options)
     paymentObject.open() 
 
}

  

async function proceedToPay(){

  if(tourdata.data.data.capacityType === 'slotWise'){
    capacityToReduce = 1;
  }else{
    capacityToReduce = currNo+1
  }

    if(!proceed)return;
    
   
      
    const myPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          
          `${api_url}/book/checkoutsession/${selectedSlot}`,
          {no : currNo+1 ,capacityToReduce},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        resolve(response); // Resolve with the response data
      } catch (error) {
        reject(error); // Reject with the error
      }
    });
    
    myPromise.then((result) => {
     loadPaymentPage(result)
    }).catch((error) => {

      if(error.response.data.message === 'housefull'){
             setHouseFull('Apologies, all reservations for this time have been filled')
      }
    });


   


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
  <>
     

        <div>
        <div className="flex gap-x-6 px-6 pb-4 font-bold text-lg cursor-default">
        
        {
             arr.map((val,idx) => ( 
             <div className={`px-3 py-1 rounded-md ${val? 'bg-orange-500' : 'bg-gray-400'}`} onClick={()=> canProceed(idx)}>{idx+1}</div>
             ))
        }

        </div>

       <div className="flex justify-center">
        <button className={`px-4 py-2 my-2 rounded-lg font-semibold hover:opacity-70 ${proceed ? 'cursor-default' : 'cursor-not-allowed'} ${proceed ? 'bg-orange-500' : 'bg-gray-400'}`}
        onClick={()=>proceedToPay()}
        >
         Proceed to Pay { amount}
       </button>
       </div>
       <div className="flex justify-center px-3 mt-2 pb-2 pl-3">
       <div className="text-white ">{housefull}</div>
       </div>

        
        </div>
            
  
      </>
    )
  
}

export default NoOfPeople