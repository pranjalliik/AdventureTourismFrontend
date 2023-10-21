import { SideBar } from "../features/Admin/SideBar"
import { AdminToursTable } from "../features/Admin/AdminToursTable"
import { Model } from "./Model"
import { UpdateTour } from "../features/Admin/updateTour"
import { useState } from "react"
import { Link } from "react-router-dom"

function AdminHome(){
 
    const [isUpdateModelOpen, setisUpdateModelOpen] = useState(false)
    const [currDetails , setCurrDetails] = useState({
      Name : '',
      Price : '',
      Discount : '',
      Image : '' ,
    })
const [addSlotTour,setAddSlotTour] = useState()


    const modelState = () => {
      setisUpdateModelOpen(!isUpdateModelOpen)
    }

   const SetSlot = (tour)=>{
     setAddSlotTour(tour._id)
   }

    const setDetails = (tour) => {
      const { name, price ,discount , photo ,_id} = tour ;
      setCurrDetails({
        Name: name,
        Price : price,
       Discount : discount,
       Image : photo,
       id : _id
      });
      console.log(currDetails)
    };
  
    return(
        <>
        
        <div className="flex min-h-screen " style={isUpdateModelOpen? {
      zIndex: 1,
      filter: "blur(8px)",
      WebkitFilter: "blur(1px)",
    } : {}}>
          <SideBar></SideBar>
        <AdminToursTable
        
        modelState = {modelState}
        setCurrDetails = {setDetails}
        setCurrSlot  ={SetSlot}
        ></AdminToursTable>
        </div>
        {isUpdateModelOpen &&
        <Model  modelState = {modelState}>
        <UpdateTour 
        Name = {currDetails.Name}
        Price = {currDetails.Price}
        Discount = {currDetails.Discount}
        id = {currDetails.id}
        />
        </Model> 
        }   
    
        </>
    )
}
export {AdminHome}

