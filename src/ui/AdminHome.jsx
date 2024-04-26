import { SideBar } from "../features/Admin/SideBar"
import { AdminToursTable } from "../features/Admin/AdminToursTable"
import { Model } from "./Model"
import { UpdateTour } from "../features/Admin/updateTour"
import { useState } from "react"

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
    };
  
    return(
        <>
        
        <div className="flex min-h-screen " style={isUpdateModelOpen? {
           backgroundColor : "#151518",
      zIndex: 12,
     
     
    } : { backgroundColor : "#151518",
        color : "#FFFFFF"

    } }>
          <SideBar></SideBar>
        <AdminToursTable
        style={{backgroundColor : "#121212"}}
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
        photo = {currDetails.Image}
        />
        </Model> 
        }   
    
        </>
    )
}
export {AdminHome}

