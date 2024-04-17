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






function NoOfPeople({selectedSlot}){
    let parm = useParams()

    const dispatch = useDispatch()
    let info = {}

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
    


    info = {
        no : currNo+1,
    }
      

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
 console.log(res)
    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    const response = await axios.post(`http://localhost:5000/book/checkoutsession/${selectedSlot}`,
    info, {
     headers: {
       'Content-Type': 'application/json',
     }
}
    )
 console.log(response.data)

    const options = {
        key:  'rzp_test_oeAvpf9MwJ4OX9' ,
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
        amount : response.data.amount/100,
        tour : response.data.tour
        }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open() 


  /*  dispatch(updateId(selectedSlot))
 dispatch(updateData(a))
 
console.log(selectedSlot+" rty "+ a)
   const stripe = await loadStripe("pk_test_51OCj1USBDBpj1eDoWncBpicaxct1qsmaE8xFPlZmwRCGZHp0IXIm9oq12aQV2Y6Ds3TUDzJ0pHVLf7nnS7vFGHYZ00znaYHYTh");
  
 console.log(response)
 const result = stripe.redirectToCheckout({
    sessionId: response.data.session.id
});

if(result.error){
    console.log(result.error);
}
*/
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
        <button className={`px-4 py-2 my-2 rounded-lg font-semibold ${proceed ? 'cursor-default' : 'cursor-not-allowed'} ${proceed ? 'bg-orange-500' : 'bg-gray-400'}`}
        onClick={()=>proceedToPay()}
        >
         Proceed to Pay { amount}
       </button>
       </div>

        
        </div>
            
  
      </>
    )
  
}

export default NoOfPeople