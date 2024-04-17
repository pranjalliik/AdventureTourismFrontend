import Axios from 'axios';
import axios from 'axios'

const api_url = "http://localhost:5000/tours";

export async function getTours(){
const res = await fetch(`${api_url}`)

const {data} = await res.json();

return data;
}




export async function getTour(id){
    try{
    const res = await fetch(`${api_url}/${id}`)

    if (res.status === 401) {
        // Handle 401 Unauthorized error
        console.log("not show")
        return 'unauthorized';
      }

    const {data} = await res.json();
    
    return data;
    }
catch(err){
 
    return err.message;
}
}


export async function getthreeTours(){
    const res = await fetch(`${api_url}/topthree`)
    const {data} = await res.json();
    
    return data;
    }
    

    export async function updateTour  ({data,id})  {
     
      Axios.patch(`${api_url}/crud/${id}`,
           data, {
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


    export async function getAdminTours(){
      console.log('hiiiii')
      const res = await axios.get("http://localhost:5000/tours/admin");
    console.log(res);
    return res.data.data;
    }

    export async function getTourSales(){

      const res = await axios.get("localhost:5000/tours/monthlysales");
    console.log(res);
    return res.data.data;
    
    }


    export async function updatephoto  ({formData,id})  {
     
     let res = axios.patch(`http://localhost:5000/tours/updatephoto/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
      }
    })
    console.log(res)
    }
