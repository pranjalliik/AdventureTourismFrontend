import { useQuery } from "@tanstack/react-query";
import { getUserBookings } from "../../services/apiBook";
import { TailSpin } from 'react-loader-spinner'

function UserBookings(){

    const {isLoading,data: bookings, error,} = useQuery({
        queryKey: ["userBookings"],
        queryFn: getUserBookings,
      });
  if(bookings)console.log(bookings)
    return(
        <>
       { !bookings? (
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
     
        <div className="flex flex-col gap-y-6 p-6 pl-36 pt-10 ">
            {bookings.map((bookings)=>(     <div className="flex gap-x-16">
            <div className="font-semibold text-lg">Boating</div>
            <div className="flex flex-col gap-y-2">
                <div className="pl-4 p-2">26/08/23</div>
                <div className="pl-4 p-2">4:30 PM</div>
                <div className="pl-4 p-2">Number of Reservations: 2</div>
            </div>
             
        </div>
        ))}
   
        </div>
}
        </>
    )
}

export {UserBookings}