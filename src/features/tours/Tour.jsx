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


 function Tour(){
  const role = useSelector((state)=> state.user.role)


  const dispatch = useDispatch()

   const [noOfPeople,setNoOfPeople] = useState(0);
  const [openModal,setOpenModal] = useState(false)
    const [toursData, setTour] = useState([]);
    const username = useSelector((state)=> state.user.username)

        

   let navigate = useNavigate();
function handleView(tour){
  let id = tour._id
  navigate(`/tours/${id}`);
}


function handleAddToCart(tour){

 
    const newItem = {
      id : tour._id,
      name: tour.name,
      
     // quantity : noOfPeople,
      unitPrice : tour.price,
      photo : tour.photo
      //totalPrice : tourBooked.price * noOfPeople,
      
     }
     dispatch(addItem(newItem))
}


   const {isLoading,data: Tours, error,} = useQuery({
    queryKey: ["Tours"],
    queryFn: getTours,
  });




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
    ) :

      
    <>
    <div className="m-9 ">
            <div className="flex bg-stone-300 h-10 p-2 rounded-2xl mt-4 mr-4 w-48">
                <span class="material-symbols-outlined ">
                     search
                </span>
                <div className="">
                    <input className="w-36 outline-none  rounded-lg"/>
                </div>
            </div>

            </div>
    <div className="">       
    <div className="grid grid-cols-1 m-9 border bg-gray-200 rounded-md">
      
    {Tours.map((tour) => (
      <div className="grid-cols-4 grid mx-12 my-7 p-3 rounded-md bg-white">
        <div
          
          style={{ backgroundImage: `url(${require(`../../images/${tour.photo}`)})` }} className="rounded-lg  h-40 "
          alt=""
        />
  <div className="col-span-1 flex flex-col font-medium">
    <h1 className="ml-5 mt-3 font-bold text-lg">{tour.name}</h1>
    <div className="ml-5">4/5</div>
    <div className="ml-5">Duration:{tour.duration}</div>
    <div className="ml-5"> {tour.Location} </div>
  </div>
        <div className="col-span- flex  justify-center justify-evenly gap-14">
          <div>
          <button className="bg-black mt-20 text-white px-4 py-2 rounded-md	hover:bg-neutral-800" onClick={()=>{handleView(tour)}}>View</button>
          </div>
          <div>
          <button  className="bg-black mt-20 text-white p-3 rounded-lg hover:bg-neutral-800"  onClick={()=>{handleAddToCart(tour)}}>Add to Bookings</button>
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