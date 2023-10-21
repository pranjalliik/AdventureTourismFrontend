import { TBanner } from "./TBanner"
import Map from './Map';
import { Reviews } from "./Reviews";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from 'react-loader-spinner'
import { getTour, setA } from "../../services/apiTours";
import { useParams ,useNavigate } from "react-router-dom";
import { Model } from "../../ui/Model";
import axios from 'axios'
import { useState } from "react";
import NoOfPeople from "../booking/noOfPeople";

function Viewtour(){
    let parm = useParams()
    const [showModal,setModal] = useState(false)
  

    const modelState = () => {
        setModal(!showModal)
      }

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


       if(info){console.log(info.data)}
  
      console.log(error)
    if(info === 'Request failed with status code 401'){
     
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
        <div className="m-8 " style={showModal? {
            zIndex: 1,
            filter: "blur(8px)",
            WebkitFilter: "blur(1px)",
          } : {}}>
         
         <TBanner TourInfo = {info.data}
              modelState = {modelState}
></TBanner>
            <Map ></Map>
        </div>

    )
}

</>
    )
}


export { Viewtour}

/*

*/