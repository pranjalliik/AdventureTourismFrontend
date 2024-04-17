import { useQuery } from "@tanstack/react-query";
import { getAdminTours } from "../../../services/apiTours";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { getTours } from "./../../../services/apiTours"
import {useState,useEffect} from 'react'
import axios from 'axios'
function SetTourHomeLayoutContent(){

  const[Tours,setTours] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/tours');
            console.log(res);
            setTours(res.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error, if needed
        }
    };

    fetchData();
}, []);
    


    return(
       
        <div className="grid-rows-2 h-screen  w-full">
            <div className="h-12 flex justify-end mb-8 bg-gray-700"  style={{backgroundColor : "#151518"}}>
                <div className="flex bg-stone-300 h-10 p-2 rounded-2xl mt-4 mr-4">
                <span class="material-symbols-outlined ">
                     search
                </span>
                <div className="">
                    <input className="w-36 outline-none  rounded-lg"/>
                </div>
            </div>
            </div>
            
         {   Tours.length === 0 ? (
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
    
    <div className="grid grid-cols-2 p-6 box-border ">
         {  Tours.map((tour)=>(
      <div className="col-span-1 flex bg-gray-300 m-2 p-2 gap-x-20	items-center rounded-lg">
        <div style={{ backgroundImage: `url(${require(`../../../images/${tour.photo}`)})` }}
      alt="" className="h-24 w-32 bg-contain bg-no-repeat mt-2 ml-2"></div>
      <div className="w-20">{tour.name}</div>
      <Link to={`/addslot/${tour._id}`}>
      <button className="px-6 py-1 bg-orange-700 text-white rounded-lg  font-semibold hover:bg-orange-600">View</button>
      </Link>
      </div>
         ))}
       </div>
    
    }
   </div>
      
       
    )
}

export {SetTourHomeLayoutContent}


