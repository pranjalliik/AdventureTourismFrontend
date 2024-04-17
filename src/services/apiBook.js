import Axios from 'axios';
import axios from 'axios';

const api_url = "http://localhost:5000/slots";

export async function getAllSlots(id){
const res = await fetch(`${api_url}/${id}`)

const {data} = await res.json();
return data;
}

export async function createShow({id,slotdata}){
    Axios.post(`${api_url}/${id}`,
    slotdata, {
     headers: {
       'Content-Type': 'application/json',
     },
})
.then(function (response) {
console.log(response)
return response
})
.catch(function (error) {
 console.log("hii")
console.error(error);
});
    }



    export async function updateshow({id,newdata}){
      Axios.patch(`${api_url}/${id}`,
      newdata, {
       headers: {
         'Content-Type': 'application/json',
       },
  })
  .then(function (response) {
  console.log(response)
  return response
  })
  .catch(function (error) {
   console.log("hii")
  console.error(error);
  });
      
     
      }


 




export function mapdates(data){
  const hashMap = new Map();
  for(let i=0;i<data.length;i++){
    let x = new Date(data[i].date);
    const formattedDate = x.toLocaleString();
    let dateData = formattedDate.split(',')
      if(hashMap.has(dateData[0]) === false){
        hashMap.set(dateData[0], [{ time : dateData[1], id : data[i]._id,capacity : data[i].capacity}])
      }else{
        hashMap.get(dateData[0]).push({ time : dateData[1], id : data[i]._id })
      }
}
return hashMap
}




export async function deleteSlot({id}){
 let data = await axios.delete(`http://localhost:5000/slots/${id}`)
 
}

export async function createBooking({id,no}){
  console.log(id +" "+no)
  let response = await axios.post(`http://localhost:5000/book/${id}`,
 { no}  , {
   headers: {
     'Content-Type': 'application/json',
   },
})

console.log(response)
return response

}


export async function getShow({id}){

  const res = await axios.get(`http://localhost:5000/slots/show/${id}`);
console.log(res);
return res.data.data;

}




export async function getUserBookings(){

  const res = await axios.get("http://localhost:5000/book/getReservations");
console.log(res);
return res.data.data;

}