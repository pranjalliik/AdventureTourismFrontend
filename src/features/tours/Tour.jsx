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
import { deleteItem } from "../cart/cartSlice";


 function Tour(){
  const role = useSelector((state)=> state.user.role)
  const[searchParams,setSearchParams] = useSearchParams();

  let items = useSelector((state)=> (state.cart.cart))


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

  for(let i =1;i<items.length;i++){
    if(items[i].id === tour._id){
      dispatch(deleteItem(tour._id))
      return 
    }
 }

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
  
  console.log(arr)
  arr = arr.filter((tour)=>tour.name.toLowerCase() === searchquery.toLowerCase() || tour.category.toLowerCase() === searchquery.toLowerCase() )
}  

  return arr
  //let sort =  filterQuery.search === ''? Tours :Tours.filter(item =>
   // item.name.toLowerCase().includes(filterQuery.search.toLowerCase())
 // )

};


function fillColor(id){
console.log(items)

for(let i =1;i<items.length;i++){
   if(items[i].id === id)return '#FF0000'
}
return 'white'
}

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
 

    <div className="grid grid-cols-5	items-start	pt-12 mb-12">   
    <div className="sticky  top-0 pt-6 p-6 flex flex-col gap-y-4" > 
            <FilterAndSort/>
            </div>    
    <div className=" ml-8 border bg-gray-200 rounded-md col-span-4 grid  grid-cols-2 pr-4	 ">
      
    {filteredData(Tours).map((tour) => (
      <div className=" w-11/12 rounded-md bg-white flex-col mx-8 my-5 pb-3 " key={tour._id}>
        <div style={{height : '250px'}} className="w-full relative">
        <div className="p-1 right-2 top-2 absolute rounded-full bg-white "   onClick={()=>{handleAddToCart(tour)}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width= '30px'
      height='30px'
      fill={fillColor(tour._id)}
      stroke= 'black'
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    </div>

        <div
          
          style={{ backgroundImage: `url(${require(`../../images/${tour.photo}`)})`  }} className="rounded-lg  h-full w-full bg-no-repeat	bg-cover	 "
          alt=""
        />
         </div>
        <div className="flex flex-col ml-12">
  <div className=" flex flex-col font-medium mt-3">

    <h1 className=" hover:text-orange-800 cursor-default font-bold text-lg"  onClick={()=>{handleView(tour)}} >{tour.name}</h1>
  
    <StarRatings 
          rating={tour.ratingAverage}
          starDimension="20px"
        starSpacing="2px"
        starRatedColor="rgb(230, 67, 47)"
          numberOfStars={5}
          name='rating'
        />
        
    
  
    <div className="mt-2"> {`Rs ${tour.price}`} </div>
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