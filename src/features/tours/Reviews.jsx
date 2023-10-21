import { useQuery } from "@tanstack/react-query";
import { getTourReview } from "../../services/apiReviews";
import { useParams } from "react-router-dom";


function Reviews(){
    let parm = useParams()
   
    let tid = parm.id
    const {
        isLoading,
        data: Reviews,
        error,
      } = useQuery({
        queryKey: ["Reviews"],
        queryFn: getTourReview(tid),
      });

     
      

      console.log(Reviews)


    return(
        <>
        <div className="my-12 ">
            <div className="flex flex-col items-center">
         <h1 className="text-4xl font-bold">Reviews</h1>  
         </div>
         <div className="border-b-2 py-4 border-black">
            <div className="font-semibold text-lg	">name</div>
            <div className="">This is review section i am makin this </div>
         </div>
         <div className="border-b-2 py-4 border-black">
            <div className="font-semibold text-lg	">name</div>
            <div className="">This is review section i am makin this </div>
         </div>
         <div>
            
            </div> 

        </div>
        </>
    )
}

export {Reviews}