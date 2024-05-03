import Axios from 'axios';
import axios from 'axios'

let api_url = process.env.REACT_APP_API_URL;

export async function getTours(){
      console.log(`${api_url}/tours`)
const res = await fetch(`${api_url}/tours`)

const {data} = await res.json();

return data;
}




export async function getTour(id){
    try{
    const res = await fetch(`${api_url}/tours/${id}`)



    const {data} = await res.json();
    
    return data;
    }
catch(err){
 
    return err.message;
}
}


export async function getthreeTours(){


    const res = await fetch(`${api_url}/tours/topthree`)
    const {data} = await res.json();
    
    return data;
    }
    

    export async function updateTour  ({data,id})  {
     
      Axios.patch(`${api_url}/tours/crud/${id}`,
           data, {
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


    export async function getAdminTours(){

      const res = await axios.get(`${api_url}/tours/admin`);
    return res.data.data;
    }

    export async function getTourSales(){

      const res = await axios.get(`${api_url}/tours/monthlysales`);
    return res.data.data;
    
    }


    export async function updatephoto  ({formData,id})  {
     
     let res = axios.patch(`${api_url}/tours/updatephoto/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
      }
    })
    }
