import { useQuery } from "@tanstack/react-query";
import { getTours} from "../../services/apiTours";
import { TailSpin } from "react-loader-spinner";
import { TourTableRow } from "./TourTableRow";
import { Chart } from "./Chart";
import{useState,useEffect} from 'react';
import axios from 'axios'

function AdminToursTable({modelState,setCurrDetails,setCurrSlot}){

  const[data,setData] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/tours');
            console.log(res);
            setData(res.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error, if needed
        }
    };

    fetchData();
}, []);





function handleOnAdd(tour){

}

    return(
        <>
    <div className="flex-grow flex-row box-border border-white ml-20">
       <Chart/>
           {
      data.length === 0 ? (
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
    ) :
          

           
            
            <div className="flex w-full 		">
          <div className="w-1/2 ">
  <div className="font-semibold	text-2xl m-6">Tours</div>
  <table className="border-collapse border border-slate-500 w-full mb-12 ">
    <tbody>
 
      <tr>
        <th className="border border-slate-600 w-1/2 ">Name</th>
        <th className="border border-slate-600 ">Price</th>
        <th className="border border-slate-600 ">Edit</th>
      </tr>
    

    </tbody>
    <tbody>
    {  data.map((tour)=>(
      <tr >
    <td className="border border-slate-700 flex"  >
      <div style={{ backgroundImage: `url(${require(`./../../images/${tour.photo}`)})` }}
      alt="" className="h-24 w-32 bg-contain bg-no-repeat mt-2 ml-2"></div>
    <div className="flex flex-col justify-center pl-3">
      {tour.name} </div></td>
    <td className="border border-slate-700 text-center">Rs{` ${tour.price}`}</td>
    <td className="border border-slate-700 ">
     <div className="flex justify-center gap-x-9">
      
      <div onClick={() =>{modelState()
      setCurrDetails(tour)
      }
      }>

     <span className="material-symbols-outlined">
           edit
                   </span>
               
                   </div>



      

                     
                    </div> </td>
                   </tr>
      ))}
    </tbody>
  </table>
  </div>
            </div>

}
</div>

        </>
    )
}

export {AdminToursTable}

