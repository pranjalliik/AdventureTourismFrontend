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

  const api_url = process.env.REACT_APP_API_URL;

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
            const res = await  axios.get(`${api_url}/tours/${parm.id}`) 
                     return res;
            }
        catch(err){
         
            return err.message;
        }
        },
      });

      let hashMap = new Map();


      if(data){
       hashMap = mapdates(data)
       
        let map = hashMap[0]
     
      }


return(
    <>
     <div className=" pb-10" >
      
       {
        loading ? (
          <div className="flex justify-center flex justify-center mt-10">

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
        ) : err? (
            <Error/>
        ): <>
        {
        info.data.data.seheduleType === 'hourWise' ?
         <BookingPage hashMap = {hashMap}
         setSlot = {setSlot}
         >
             <NoOfPeople maxBooking={info.data.data.maxBooking} selectedSlot={selectedSlot}></NoOfPeople>
         </BookingPage>
          : 
            <BookingPageB  data={data} setSlot = {setSlot}>
                <NoOfPeople   maxBooking={info.data.data.maxBooking} selectedSlot={selectedSlot}></NoOfPeople>
            </BookingPageB>

        }
        
        </>
       }
       </div>
    </>
)
}

export {BookingLayout}

/* 
   
*/