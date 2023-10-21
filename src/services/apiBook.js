import Axios from 'axios';

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
        hashMap.set(dateData[0], [{ time : dateData[1], id : data[i]._id }])
      }else{
        hashMap.get(dateData[0]).push({ time : dateData[1], id : data[i]._id })
      }
}
return hashMap
}
