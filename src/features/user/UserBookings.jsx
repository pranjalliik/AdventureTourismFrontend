import { useQuery } from "@tanstack/react-query";
import { getUserBookings } from "../../services/apiBook";
import { TailSpin } from 'react-loader-spinner'
import { useEffect ,useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
function UserBookings(){

    const {isLoading,data: bookings, error,} = useQuery({
        queryKey: ["userBookings"],
        queryFn: getUserBookings,
      });

  const api_url = process.env.REACT_APP_API_URL;


  const[data,setData] = useState()
 
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`${api_url}/book/getreviewbooking`);
            setData(res.data.data);
        } catch (error) {

        }
    };

    fetchData();
}, []);



    return(
        <>
       { isLoading? (
        <div className="flex justify-center">
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
    ) : 
     <div className="flex w-full h-full">
      <div className="w-7/12 flex justify-center bg\-black">
        <div className="flex flex-col justify-center gap-y-6 p-6 pt-10 w-4/5  ">

            {bookings.length !== 0?
             <>
           {bookings.map((booking)=>(     <div key={booking._id} className="p-4  rounded-lg w-full bg-gray-100 flex shadow-md">
           
           <div className=" flex justify-center items-center pr-3">
          <p className="text-center font-semibold text-lg text-center">{booking.tour.name}</p>
               </div>
            <div className="flex flex-col gap-y-2 w-2/5" style={{width : '42%'}}>
            <div className="pl-4 p-2">26/08/23</div>
              <div className="pl-4 p-2">4:30 PM</div>
              <div className="pl-4 p-2">Number of Reservations: 2</div>
   
                    </div>
                    <div style={{ backgroundImage: `url(${require(`./../../images/${booking.tour.photo}`)})` }}
      alt="" className="w-2/5 ml-4 rounded-lg  bg-contain bg-no-repeat mt-2 "></div>
                    </div>
                   ))}

                   </>

             :
             <div className="flex justify-center mt-20">
             <div className="text-xl font-semibold">NO BOOKINGS</div>
             </div>
             }

            
   
        </div>
        </div>

  {
      !data?
      (
      
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
         data.length !== 0?  (
            <div className="flex h-full flex-row bg-lack justify-between	 w-5/12">
          {data.map((rb)=>(    

        <div key={rb._id} className="mt-6 h-full mt-10 rounded-lg border bg-white p-6 shadow-md  w-2/5">
          


      <div className="mb-2 flex flex-col gap-x-20 ">
        <div className="flex text-lg font-semibold justify-center">        
          <div>{rb.tour[0].name}</div>
        </div>

      <div style={{ backgroundImage: `url(${require(`./../../images/user-64978ab6f94083a207a0f340-1687741042050.jpeg`)})` }}
      alt="" className="w-32 h-32 ml-4 rounded-lg  bg-cover bg-no-repeat mt-2 bg-black "></div>
      
      </div>
   

      <hr className="my-4" />
      <Link to={`/review/${rb.tour[0]._id}`}>
      <button className="mt-2 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
      
        Review
      </button>
      </Link>

        </div>

        
          ))}
        </div>
        ) : (
        <div></div>
    )
   }
          </div>
         }

         
        </>
    )
}

export {UserBookings}