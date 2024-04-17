import { useQuery } from "@tanstack/react-query";
import { getTourReview } from "../../services/apiReviews";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { TailSpin } from 'react-loader-spinner'
import StarRatings from 'react-star-ratings';


function Reviews(){
    let parm = useParams()
   
   
   
    const[data,setData] = useState()
 
    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await getTourReview({id :parm.id});
              console.log(res);
              setData(res);
          } catch (error) {
              console.error('Error fetching data:', error);
              // Handle error, if needed
          }
      };
  
      fetchData();
  }, []); 
   
   
   console.log(data)

    return(
        <>
        { !data?(
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
      
       <div className="mb-44 mt-8 bg-gray-100 text-inhetit w-3/5 p-4 rounded-md border-gray pl-20  mt-8 ml-20 shadow-lg">    
            
            <h1 className="font-semibold text-3xl mb-6">Reviews</h1>  
        {    data.length != 0 &&  
              <>
              {  data.map((review)=>(
            <div className="border-b-2 py-4 border-black">
               
               <div className="font-semibold text-lg	">{review.user.name}</div>
               <StarRatings 
        rating={review.rating}
        starDimension="20px"
        starSpacing="2px"
        starRatedColor="rgb(230, 67, 47)"
        numberOfStars={5}
        name='rating'
      />
               <div className="">{review.review}</div>
            </div>
              ))
            }
             </>
}
               </div>
}
        </>

    )
}

export {Reviews}

/*
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

*/ 