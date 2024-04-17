import axios from 'axios'

const api_url = "http://localhost:5000/reviews";


export async function getTourReview({id}){
    console.log(`${api_url}/${id}`)
    const res = await axios.get(`http://localhost:5000/reviews/${id}`)

    return res.data.data;
    }
// fetch(`http://localhost:5000/reviews/${tid}`).then(response => response.json())









