import { useQuery } from "@tanstack/react-query";
import { TailSpin } from 'react-loader-spinner'
import { getTour } from "../../../services/apiTours";
import { useParams ,useNavigate } from "react-router-dom";
import axios from 'axios'

function TourInfo(){
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
      if(info){console.log(info.data)
        console.log(info.data.data.photo)
    }

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
        <div className="grid grid-rows-2 mt-8 grid-cols-1 box-border">
         <div  style={{ backgroundImage: `url(${require(`../../../images/${info.data.data.photo}`)})` }} alt='pic' className="col-span-3  w-80 h-56 bg-cover ml-20 bg-no-repeat rounded-md "></div>
        <div className="flex flex-col ml-20 mt-8 pt-3 pb-1 gap-y-1 text-white bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 mr-44 p-6 mb-12 rounded-lg  font-medium ">
          <div>{info.data.data.name}</div>
          <div>{info.data.data.price}</div>
          <div>Rating : {info.data.data.ratingAverage}</div>
          <div>{info.data.data.Location}</div>
          
          

        </div>
        </div>

          )
        }
      </>
    )
}

export {TourInfo}