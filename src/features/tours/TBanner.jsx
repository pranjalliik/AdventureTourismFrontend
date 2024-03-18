/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import ReactWeather from 'react-open-weather';
import StarRatings from 'react-star-ratings';
import ReadMoreReact from 'read-more-react';


 function TBanner({TourInfo}){
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleText = () => {
    setIsTruncated(!isTruncated);
  };



let  text =  "The Rajwadi homeland of the Rajputs is a culinary haven for foodies worldwide. One of the few cuisines that can boast of an endless plate of mouth-watering dishes is Rajasthani food. It includes tangy drinks, spicy starters, mouthwatering sabzis, crunchy bread and side dishes such as chutneys, achars, papad and chhach. Not to mention the rich, crisp and delicate desserts that melt in your mouth. Rajasthan's arid climate and rich past have left their mark on the state's food. Beans, lentils, gram flour, maize, barley, millet, bajra, bread and dairy products - especially ghee - are some of the staples. While there is a greater focus on vegetarian"
let length = 350;






  
      
    return(
        <>
        <div  className=" grid grid-cols-7">
            <div className='col-span-3 flex flex-col  ml-20  w-96'>
         <div  style={{ backgroundImage: `url(${require(`../../images/${TourInfo.data.photo}`)})` }} alt='pic' className="w-full  h-56 bg-cover bg-no-repeat rounded-md bg-black"></div>
       <div className='flex flex-col p-4 bg-black text-white gap-y-2 rounded-b-lg'>
        <div>{TourInfo.data.name}</div>
        <div>{TourInfo.data.price}</div>
       
       </div>
       <Link to={`/book/${TourInfo.data._id}`} className='bg-orange-600 p-4 rounded-lg text-white font-bold text-xl py-2 mt-6 text-center	'>Book</Link>
       </div>
        <div className='col-span-4 flex flex-col mt-4'>
    
       <div className='flex w-full'>
       <div className='ml-6 text-white bg-black pl-3 pt-3 w-1/3 font-semibold flex flex-col space-y-4 pb-3'>
      <div className='mt-2'>{TourInfo.data.Location}📍<div/>
      <div className='mt-2'>
      <StarRatings 
          rating={3}
          starDimension="15px"
        starSpacing="2px"
        starRatedColor="rgb(230, 67, 47)"
          numberOfStars={5}
          name='rating'
        />
       </div>
      <div className='mt-2'>{ " "+TourInfo.data.duration}<div/>
      <div className='mt-2'>SkyHigh Adventures Co.</div>
      </div>
    
     </div>
     

        </div>
        <div className=' mx-6 p-2 bg-gray-200 box-border font-semibold	'>Embark on an unforgettable journey with our <br/>"Serene Waters Boating Adventure." </div>.

       </div>
   
     <div className='h-full mt-6'>
         <div className='rounded-lg bg-gray-200  ml-6 pl-3 mr-16 p-4 pb-3 max-h-fit		'>
         {isTruncated ? (
        <p>{`${text.slice(0, length)}...`}</p>
      ) : (
        <p>{text}</p>
      )}
      <button onClick={toggleText} className='font-semibold'>
        {isTruncated ? 'Read More' : 'Read Less'}
      </button>
             </div> 
        </div>
       </div>
       </div>
        </>
    )
}


export { TBanner}

/*
   {
            !isLoading &&
        <>
    <div className='grid  grid-cols-2 bg-gray-100  rounded-lg w-4/5  h-4/5 ml-20 '>
    <div className="bg-gray-100 rounded-lg p-4 w-full h-full text-center bg-cover"   style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="text-2xl font-semibold">Weather in {TourInfo.data.Location}</div>
      <div className="text-6xl font-bold">296.2°C</div>
      <div className="text-3xl">Haze</div>
    </div>
    <div>
    <div className="text-lg">
        Humidity: 64%<br />
        Pressure: 1016 hPa<br />
        Visibility: 3200 meters<br />
        Wind: Calm, 0° at 0 m/s<br />
        Cloud Cover: 0% (Clear Sky)
      </div>
    </div>
    
    </div>
  

        </>
          }

*/