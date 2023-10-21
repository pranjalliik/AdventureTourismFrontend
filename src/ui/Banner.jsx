import { Header } from "./Header"
//import bgimg from '../images/bgimg.webp'
import bgimg2 from '../images/bgimg2.jpg'
import bgimg3 from '../images/bgimg3.jpg'
import bgimg4 from '../images/bgimg4.jpg'
import { Link } from "react-router-dom"

function Banner(){
 
      const fDate = new Date()
      const formattedDate = fDate.toLocaleString(); // This will format the date in your local time zone

console.log(formattedDate);
   //     let a = 
       
    //  console.log( 2023-11-23T11:53:00.000Z.toLocaleString())
//let img = 'https://yandex.com/images/search?img_url=https%3A%2F%2Ftrendhero.io%2Fru%2Fwp-content%2Fuploads%2Fsites%2F2%2F2022%2F02%2Ftrevel-blogery-instagram.jpeg&isize=medium&lr=114903&pos=23&rpt=simage&text=travel'
//let url1  = 'https://www.theladders.com/wp-content/uploads/travel-190723.jpg'  
return(
        <>
       <div>
        <div className= "bg-orange-900  h-96 w-full bg-no-repeat bg-cover flex justify-end" style={{ backgroundImage: `url(${bgimg3})` }}>
       <div className="flex flex-col ">
        <div className="text-3xl pr-5 pt-10 pl-11 mr-8 font-sans font-semibold">Embark on Extraordinary Journeys<br/>
to Uncharted Destinations!</div>
<Link to="tours" className="bg-orange-700 p-4 rounded-lg text-white font-bold text-xl py-2 h-12 w-40 mt-4 ml-10" >FIND A TOUR</Link>

        </div>
        </div>
       </div>


        </>
    )
}

export {Banner}


