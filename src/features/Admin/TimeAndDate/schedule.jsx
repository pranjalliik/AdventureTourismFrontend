import { useQuery } from "@tanstack/react-query";
import { TailSpin } from 'react-loader-spinner'
import { Error } from "../../../utils/Error";
import { ScheduleB } from "./ScheduleB";
import { ScheduleA } from "./ScheduleA";
import { useParams } from "react-router-dom";
import axios from 'axios'



function Schedule(){

    let parm = useParams()

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
  
  




  if(info){
    console.log(info)
  }



 


  return (
    <>
      {loading ? (
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
      ) : err ? (
        <Error />
      ) : (
        <>
          {info.data.data.seheduleType === 'hourWise' ? (
            <ScheduleA />
          ) : (
            <ScheduleB />
          )}
        </>
      )}
    </>
  );
  

}

export {Schedule}