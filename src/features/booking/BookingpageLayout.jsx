import NoOfPeople from "./noOfPeople"
import BookingPage from "./BookingPage"
import { useQuery } from "@tanstack/react-query";
import { getAllSlots } from "../../services/apiBook";
import { useState } from "react";
import { mapdates } from "../../services/apiBook";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { BookingPageB } from "./BookingPageB";
import { TailSpin } from 'react-loader-spinner'
import { Error } from "../../utils/Error";
function BookingLayout(){

    let parm = useParams()
    const [selectedSlot,setSelectSlot] = useState()

    function setSlot(id){
        setSelectSlot(id)
    }


    const {isLoading,data, error,} = useQuery({
        queryKey: ["Slots"],
        queryFn: () =>  getAllSlots(parm.id),
      });


      const {
        isLoading : loading,data : info,error:err,status
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

      let hashMap = new Map();

 if(info){
    console.log(info)
 }

      if(data){
        console.log(data)
       hashMap = mapdates(data)
       
        let map = hashMap[0]
      console.log(map)
      console.log(hashMap)
      }


return(
    <>
    <div className="w-full h-36 bg-ptn"></div>
    <div className="border-black w-full h-8 bg-orange-600"></div>
       
       {
        loading ? (
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
        ) : err? (
            <Error/>
        ): <>
        {
        info.data.data.seheduleType === 'hourWise' ?
         <BookingPage hashMap = {hashMap}
         setSlot = {setSlot}
         >
             <NoOfPeople selectedSlot={selectedSlot}></NoOfPeople>
         </BookingPage>
          : 
            <BookingPageB   setSlot = {setSlot}>
                <NoOfPeople selectedSlot={selectedSlot}></NoOfPeople>
            </BookingPageB>

        }
        
        </>
       }
    </>
)
}

export {BookingLayout}

/* 
   
*/