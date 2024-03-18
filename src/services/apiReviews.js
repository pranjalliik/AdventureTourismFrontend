const api_url = "http://localhost:5000/reviews";


export async function getTourReview(id){
    console.log(`${api_url}/${id}`)
    const res = await fetch(`${api_url}/${id}`)

    const {data} = await res.json();
    console.log(data)
    return data;
    }
// fetch(`http://localhost:5000/reviews/${tid}`).then(response => response.json())









