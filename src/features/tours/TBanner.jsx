/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function TBanner({TourInfo}){



    return(
        <>
        <div id="map" className=" grid grid-cols-7">
         <div  style={{ backgroundImage: `url(${require(`../../images/${TourInfo.data.photo}`)})` }} alt='pic' className="col-span-3  w-96 h-56 bg-cover ml-20 bg-no-repeat rounded-md "></div>
        <div className='col-span-4 flex justify-center flex-col	'>
          <div className=' bg-gray-200  rounded-lg w-4/5  h-4/5 ml-20 '>
           <div>
            book
            </div>  
    
        </div>
        <Link to={`/book/${TourInfo.data._id}`} >Book</Link>

        </div>
        </div>


        </>
    )
}


export { TBanner}

