import { useQuery } from "@tanstack/react-query";
import { TailSpin } from 'react-loader-spinner'
import { Error } from "../../../utils/Error";
import { ScheduleB } from "./ScheduleB";
import { ScheduleA } from "./ScheduleA";
import { useParams } from "react-router-dom";
import axios from 'axios'



function Schedule(){
  const api_url = process.env.REACT_APP_API_URL;

    let parm = useParams()

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