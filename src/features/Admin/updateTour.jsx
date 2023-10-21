import { useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { updateTour } from "../../services/apiTours";


function UpdateTour({Name ,Price, Discount,id}){

  const  [newName, setNewName] =  useState(Name);
  const  [newPrice, setNewPrice] =  useState(Price);
  const  [newDiscount, setNewDiscount] =  useState(Discount);
  const [file, setFile] = useState()
  const formData = new FormData();


  function handleFileChange(event) {
   
    //console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
console.log(file)
  const handleChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;

    if(name === 'newName'){
      setNewName(value);
    }else if(name === 'newPrice'){
      setNewPrice(value);

    }else if(newDiscount) {
      setNewDiscount(value);
   
    }

}
const mutation = useMutation(updateTour);


const handleSubmit = async (event) => {
  event.preventDefault();
    
let formObj = {}
let a =0;

if(newName != Name ){

  formData.append('name', newName);
  a++
}

if(newPrice != Price ){
  formData.append('price', newPrice);
   a++
}

if(newDiscount != Discount){
  formData.append('discount', newDiscount);
   a++;
}

if(file){
  formData.append('photo', file);
a++;
}

if(a === 0){
  return;
}
console.log(id)
mutation.mutate({ data: formData, id: id })

if(mutation.isSuccess){
  console.log(mutation.data)
}
if(mutation.isError){
 console.log(mutation.error)
}

}

    return(
        <>
                <div >
  <form className="flex flex-col h-96 w-96 justify-around  px-8 " onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <label>Name</label>
      <input className="w-1/2" name="newName" type="text" defaultValue= {Name} onChange={handleChange}></input>
    </div>
    <div className="flex flex-col">
      <label>Price</label>
      <input defaultValue= {Price} name="newPrice" onChange={handleChange}></input>
    </div>
    <div className="flex flex-col">
      <label>Discount</label>
      <input defaultValue= {Discount} name="newDiscount" onChange={handleChange}></input>
    </div>
    <div className="flex flex-col">
      <label>Image</label>
      <input type="file" name="image" onChange={handleFileChange}  ></input>
    </div>
    <button className="bg-black w-24 relative left-32 text-white">Update</button>
  </form>
</div>
        </>
    )
}

export {UpdateTour}