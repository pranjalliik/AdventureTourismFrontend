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
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  const StyledSlider = styled(Slider)`
  .slick-slide {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

    let [rev,setrev] = useState([])



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
         
     
     <div className="flex justify-center p-4 bg-black pt-6">      
          <h1 className=" text-white font-semibold text-3xl font-sans tracking-wide
     underline-offset-4 pt-12 pb-8" style={{fontFamily: "Times New Roman"}}>REVIEWS</h1>
      </div>
            <div className=' bg-black flex justify-center'>
           

              
                <div className='h-80  my-6 w-3/4    opacity-70 rounded-lg  '  >
                <StyledSlider {...settings} className='h-full   '>
     <div className='flex flex-col h-72 w-52 bg-white rounded-lg mr-2'>
      <div className='flex justify-center'>
     <img
                        alt="Man"
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="h-16 w-16 rounded-full object-cover mb-4 mt-6"
                      />
                      </div>
      <div className='text-center  '>
      The guides are knowledgeable, the destinations are breathtaking, and the activities are diverse. Whether you're a thrill-seeker or a nature enthusiast, this is the ultimate platform to fuel your wanderlust.
        <div className='mt-2 '>-Sarah Johnson</div>
      </div>
      </div>

      <div className='flex flex-col h-72 w-52 bg-white rounded-lg mr-2'>
      <div className='flex justify-center'>
     <img
                        alt="Man"
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="h-16 w-16 rounded-full object-cover mb-4 mt-6"
                      />
                      </div>
      <div className='text-center  '>
      From heart-pounding treks to serene kayaking trips, every journey has been expertly crafted for maximum excitement and safety. If you're looking for unforgettable adventures, look no further!
      <div className='mt-2 '>-Bryan </div>

      </div>
      </div>
      <div className='flex flex-col h-72 w-52 bg-white rounded-lg mr-2'>
      <div className='flex justify-center'>
     <img
                        alt="Man"
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="h-16 w-16 rounded-full object-cover mb-4 mt-6"
                      />
                      </div>
      <div className='text-center  '>
      Every moment was filled with excitement and wonder. The attention to detail and personalized experiences made our trip truly unforgettable. Can't wait to book another adventure soon!
      <div className='mt-2 '>-Jake Smith</div>
</div>
      </div>

      <div className='flex flex-col h-72 w-52 bg-white rounded-lg mr-2'>
      <div className='flex justify-center'>
     <img
                        alt="Man"
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        className="h-16 w-16 rounded-full object-cover mb-4 mt-6"
                      />
                      </div>
      <div className='text-center  '>
      I've conquered towering peaks, navigated wild rivers, and dived into crystal-clear waters, all thanks to the seamless booking process and top-notch guides provided here.
      <div className='mt-2 '>-Alex Thompson</div>
</div>
      </div>
     
    </StyledSlider>

                </div>
             
              </div>
            
        
        </>
      );
      
      
}

//            <div className="py-6 text-center font-bold text-lg ">Reviews from our customers</div>

export {Reeviews}
