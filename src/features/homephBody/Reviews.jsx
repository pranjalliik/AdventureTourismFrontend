import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Reeviews(){
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    let [rev,setrev] = useState([])

    useEffect(() => {
        axios
          .request("http://localhost:5000/reviews")
          .then(function (response) {
            console.log(response.data.data);
           console.log("hii")
            setrev(response.data.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
   , []);

      const Backg = styled.div`
      background-color: #000000;
opacity: 0.7;
background-image:  linear-gradient(135deg, #ed7a00 25%, transparent 25%), linear-gradient(225deg, #ed7a00 25%, transparent 25%), linear-gradient(45deg, #ed7a00 25%, transparent 25%), linear-gradient(315deg, #ed7a00 25%, #000000 25%);
background-position:  10px 0, 10px 0, 0 0, 0 0;
background-size: 20px 20px;
background-repeat: repeat;
      `;

      return (
        <>
          {rev.length === 0 ? (
           
           <div className="flex justify-center pt-16 bg-black pb-10">
           <TailSpin
             height="80"
             width="80"
             color="#4fa94d"
             ariaLabel="tail-spin-loading"
             radius="1"
             wrapperStyle={{}}
             wrapperClass=""
             visible={true}
            
           />
           </div>

          ) : (<>

            <div className=' bg-black flex justify-center'>
           

              
                <div className='h-80 bg-cover my-6 w-3/4 bg-white opacity-70 rounded-lg  '  >
                <Slider {...settings} className='h-full '>
     <div className='flex flex-col item-center'>
      <div className='flex justify-center'>
     <img
                        alt="Man"
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="h-16 w-16 rounded-full object-cover mb-4 mt-6"
                      />
                      </div>
      <div className='text-center  '>
       The guides were knowledgeable, the accommodations were cozy. . The well-planned itinerary and expert guides made every moment enjoyable. If you're looking for an adventure that goes beyond the ordinary, this is the company to trust."
      </div>
      </div>
      <div className='text-center'>
       The guides were knowledgeable, the accommodations were cozy."
      </div>
      <div className='text-center'>
       The guides were knowledgeable, the accommodations were cozy."
      </div>
      <div className='text-center'>
       The guides were knowledgeable, the accommodations were cozy."
      </div>
    </Slider>

                </div>
             
              </div>
            </>
          )}
        </>
      );
      
      
}

//            <div className="py-6 text-center font-bold text-lg ">Reviews from our customers</div>

export {Reeviews}
