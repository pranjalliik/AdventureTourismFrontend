import Axios from 'axios';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;

export async function getAllSlots(id){
const res = await fetch(`${api_url}/slots/${id}`)

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
return response
})
.catch(function (error) {
});
    }



    export async function updateshow({id,newdata}){
      Axios.patch(`${api_url}/slots/${id}`,
      newdata, {
       headers: {
         'Content-Type': 'application/json',
       },
  })
  .then(function (response) {
  return response
  })
  .catch(function (error) {
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
 let data = await axios.delete(`${api_url}/slots/${id}`)
 
}

export async function createBooking({id,no}){
  let response = await axios.post(`${api_url}/book/${id}`,
 { no}  , {
   headers: {
     'Content-Type': 'application/json',
   },
})

return response

}


export async function getShow({id}){

  const res = await axios.get(`${api_url}/slots/show/${id}`);
return res.data.data;

}




export async function getUserBookings(){

  const res = await axios.get(`${api_url}/book/getReservations`);
return res.data.data;

}