import { useLoaderData,useNavigate } from "react-router-dom";
import { getTours } from "../../services/apiTours";
import { Header } from "../../ui/Header";
import { useEffect,useState } from "react";
import { TailSpin } from 'react-loader-spinner'
import  {useSelector,useDispatch} from 'react-redux'
import { ModalBooking } from "../../utils/modalBooking";
import { addItem } from "../cart/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { useSearchParams } from "react-router-dom";
import { FilterAndSort } from "./FilterAndSort";


 function Tour(){
  const role = useSelector((state)=> state.user.role)
  const[searchParams,setSearchParams] = useSearchParams();

  let priceorder = searchParams.get('order');
  let ratingFilter = searchParams.get('rating');
  let searchquery = searchParams.get ('search_query');

  const uniqueParamNames = [...searchParams.keys()];
  const numberOfUniqueParams = uniqueParamNames.length;
 
if(numberOfUniqueParams !== 0){

  for (const [name, value] of searchParams) {
     if(name === 'price'){
         priceorder = value;
     }else if(name === 'rating'){
      ratingFilter = value;
     }else if(name === 'search_query'){
      searchquery = value
     }
  }
}








 
  const dispatch = useDispatch()
let navigate = useNavigate();

function handleView(tour){
  let id = tour._id
  navigate(`/tours/${id}`);
}


function handleAddToCart(tour){


    const newItem = {
      id : tour._id,
      name: tour.name,      
     }
     dispatch(addItem(newItem))
}


   const {isLoading,data: Tours, error,} = useQuery({
    queryKey: ["Tours"],
    queryFn: getTours,
  });



  const filteredData =function(Tours){


    let arr = [...Tours]; // Create a shallow copy of Tours

    if(priceorder ){
   if(priceorder === 'highToLow'){
    arr.sort((a,b)=> b.price - a.price)
   }   if(priceorder === 'lowToHigh'){
    arr.sort((a,b)=> a.price - b.price)
   }
  }
 
  if(ratingFilter){
    
    arr = arr.filter((tour)=>tour.ratingAverage == ratingFilter)
   
  }
if(searchquery){
  arr = arr.filter((tour)=>tour.name.toLowerCase() === searchquery.toLowerCase())
}  

  return arr
  //let sort =  filterQuery.search === ''? Tours :Tours.filter(item =>
   // item.name.toLowerCase().includes(filterQuery.search.toLowerCase())
 // )

};
    return(
        <>
       {
      isLoading ? (
        <div className="flex justify-center pt-16 pb-10">
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
    </div>
          ) :

      
    <>
 

    <div className="grid grid-cols-5	items-start	pt-12 ">   
    <div className="sticky  top-0 pt-6 p-6 flex flex-col gap-y-4" > 
            <FilterAndSort/>
            </div>    
    <div className=" mx-12 border bg-gray-200 rounded-md col-span-4">
      
    {filteredData(Tours).map((tour) => (
      <div className=" mx-12 my-7 p-3 rounded-md bg-white flex ">
        <div
          
          style={{ backgroundImage: `url(${require(`../../images/${tour.photo}`)})` }} className="rounded-lg  h-44 w-2/5 bg-no-repeat	bg-cover	 "
          alt=""
        />
        <div className="flex flex-col ml-12">
  <div className=" flex flex-col font-medium mt-3">

    <h1 className="  font-bold text-lg">{tour.name}</h1>
    <StarRatings 
          rating={tour.ratingAverage}
          starDimension="20px"
        starSpacing="2px"
        starRatedColor="rgb(230, 67, 47)"
          numberOfStars={5}
          name='rating'
        />
        
    
    <div className="mt-2"> {tour.Location} </div>
    <div className=""> {tour.price} </div>
  </div>
        <div className="flex mt-4  gap-x-12  ">
          <div>
          <button className="bg-black  text-white  rounded-md	hover:bg-neutral-800 py-2 px-4" onClick={()=>{handleView(tour)}}>View</button>
          </div>
          <div>
          <button  className="bg-black text-white rounded-lg hover:bg-neutral-800  py-2 px-4"  onClick={()=>{handleAddToCart(tour)}}>Add to Bookings</button>
           </div>
        </div>
        </div>
      </div>
      
   
      
    ))}
  </div>
  </div> 
  </>
   


}
<Outlet/>
        </>
    )
}



export  {Tour}

/*
    useEffect(() => {
        const fetchData = async () => {
          try {
           let Data  = await getTours();
           setTour(Data)
            console.log(Data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
      */