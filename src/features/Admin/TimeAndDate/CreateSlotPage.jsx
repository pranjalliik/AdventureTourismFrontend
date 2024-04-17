
import { SformA } from "./CreateslotFormA";
import { TourInfo } from "./tourInfoDaT";
import { Schedule } from "./Schedule";
import { useParams ,useNavigate } from "react-router-dom";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from 'react-loader-spinner'
import {SformB} from "./CreateSlotFormB"
function CreateslotPage(){


  let parm = useParams()

  const {
      isLoading,data : info,error,status
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



 return(
  <>
    {
            isLoading ? (
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
          ) : (
   <div className="grid grid-cols-2	">
    <TourInfo data={info.data.data}></TourInfo>
    { info.data.data.seheduleType === 'hourWise' ?
    <SformA/> :
   <SformB/>
}
     </div>
          )}
   <Schedule></Schedule>
    </>
 )
}
export {CreateslotPage}