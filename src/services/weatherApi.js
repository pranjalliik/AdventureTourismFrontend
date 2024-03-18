//

import axios from 'axios'

export async function weatherData(city){
    try{
        console.log()
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aae1199364cd26e85aae588e208e95e1`)
   let result = await res.json()
    return result;
}catch(err){
        console.log(err.message)
    }
}