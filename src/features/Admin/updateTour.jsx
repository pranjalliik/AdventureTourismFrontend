import { useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { updateTour,updatephoto } from "../../services/apiTours";
import { update } from "lodash";


function UpdateTour({Name ,Price, Discount,id,photo}){

  const  [newName, setNewName] =  useState(Name);
  const  [newPrice, setNewPrice] =  useState(Price);
  const  [newDiscount, setNewDiscount] =  useState(Discount);
  const [file, setFile] = useState()
  const formData = new FormData();


  function handleFileChange(event) {
   
    setFile(event.target.files[0])
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if(name === 'newName'){
      setNewName(value);
    }else if(name === 'newPrice'){
      setNewPrice(value);

    }

}
const mutation = useMutation(updateTour);
const photomutation = useMutation(updatephoto)

const handleSubmit = async (event) => {

event.preventDefault();

if(file){
  const formData = new FormData();

// Append the file data to the FormData object
formData.append('photo', file);
  photomutation.mutate({ formData , id: id })
}


let formObj = {}
let a =0;

if(newName != Name ){

  formObj.name = newName;
  a++
}

if(newPrice != Price ){
  formObj.price = newPrice;
   a++
}

if(newDiscount != Discount){
  formObj.discount = newDiscount;
   a++;
}


if(a === 0){
  return;
}
mutation.mutate({ data: formObj, id: id })


}

    return(
        <>
                <div >
  <form className="  px-6  pb-2 flex flex-col gap-y-6  " onSubmit={handleSubmit}>
  <div className="flex justify-center">  
  <div className=" rounded-full h-32 w-32"   style={{ backgroundImage: `url(${require(`./../../images/${photo}`)})` }}>
           
            </div>
            </div>

  <div className="flex gap-x-3">
            <label className="text-lg font-semibold text-white	">Name</label>
            <input className="pl-1 ml-8 rounded-md" name="newName" type="text" defaultValue= {Name} onChange={handleChange}></input>
            </div>

            <div className="flex gap-x-3">
            <label className="text-lg font-semibold text-white	">Price</label>
            <input className="pl-1 ml-10  rounded-md" defaultValue= {Price} name="newPrice" onChange={handleChange}></input>

            </div>
  
    <div className="flex gap-x-3">
      <label className="text-lg font-semibold text-white">Image</label>
      <input type="file" className="pl-1 ml-8 text-white " name="image" onChange={handleFileChange}  ></input>
    </div>
    <div className="flex justify-center">
    <button className="bg-orange-700 p-2 hover:opacity-70 rounded-lg w-24 text-white">Update</button>
    </div>
  </form>
</div>
        </>
    )
}

export {UpdateTour}


