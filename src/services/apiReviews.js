import axios from 'axios'

const api_url = process.env.REACT_APP_API_URL;


export async function getTourReview({id}){
    const res = await axios.get(`${api_url}/reviews/${id}`)

    return res.data.data;
    }
// fetch(`http://localhost:5000/reviews/${tid}`).then(response => response.json())









