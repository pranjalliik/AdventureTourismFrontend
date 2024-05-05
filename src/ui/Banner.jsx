import { Header } from "./Header"
import svg from '../images/Journey-amico.svg'
import bgimg2 from '../images/bgimg2.jpg'
import bgimg5 from '../images/bgimg5.jpg'
import bgimg4 from '../images/bgimg4.jpg'
import { Link } from "react-router-dom"
import styled from 'styled-components';
import { useState } from "react"
import { useEffect } from "react"
import Slider from "react-slick";









const slides = [bgimg5,''];

function Banner(){
    const [index, setIndex] = useState(0);

      const fDate = new Date()
      const formattedDate = fDate.toLocaleString(); // This will format the date in your local time zone

    function handleClick(){
   
    }



      let [current, setCurrent] = useState(0);

      let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
      };
    
      let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
      };




  
      return (
<div id="default-carousel" className=" h-5/6 w-full overflow-hidden bg-red-200 relative" >

<div
        className={`bg-red-100 h-full  w-full flex transition ease-out duration-1000`}
        style={{
          transform: `translateX(-${current * 100}%) `,
        }}
      >
  {slides.map((backgroundImg, index) => (


    (index === 0) ? (
      <div className="flex-shrink-0 h-full w-full bg-no-repeat bg-cover relative inline-block" key={index} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})` }}>
        {index === 0 ? (
            <>
           <div className="w-3/5" style={{ borderTop: '100vh solid black', borderRight: '100px solid transparent' }}>
         
          </div>

         <div className="text-white text-3xl font-bold absolute top-28 left-16">Embark on Extraordinary Journeys<br/>
           to Uncharted Destinations!</div>
           <Link to="tour" className="bg-orange-700 p-4 absolute top-48 left-8 rounded-lg text-white font-bold text-xl py-2 h-12 w-40 mt-4 ml-10" >FIND A TOUR</Link>
           </>
        ):(
        <div className=" justify-end flex h-full w-full">
            <div className=" h-1/2 w-1/2 mt-12 mr-16 bg-black opacity-35	 text-2xl font-semibold">
            <div className="text-white text-center text-lg font-semibold p-4">

🏞️ Explore breathtaking landscapes <br/>

🌄 Conquer towering peaks and witness sunsets that paint the sky with hues of adventure.<br/>b

🚵‍♀️ Cycle through untamed trails and unveil the secrets of nature's hidden wonders.

🌊 Dive into the depths of pristine waters

Every destination is a chapter, and your adventure story begins here. Join us as we lead you to the extraordinary – where ordinary vacations become legendary tales.</div>
            </div>
        </div>
        )}
      </div>
    ) : 
        <div className="flex-shrink-0 h-full w-full relative inline-block flex">
        <div className=" mx-20 my-10 flex h-5/6 w-full bg-black">
            <div className="h-5/6 ml-20 mt-6 w-1/2 bg-no-repeat" style={{ backgroundImage: `url(${svg})` }} ></div>
             <div className="h-5/6 w-full mt-6 flex justify-center items-center	">
                <div className="  bg-red-200 w-8/12  rounded-lg h-3/5">
                    <div className="font-bold	p-4 text-lg">Experience Adventure Everywhere</div>

                    <div className="px-4 pt-2 ">
                        <div className="">Discover thrilling experiences tailored to you on our adventure tourism website</div> 
                      <Link to="/aboutus">
                        <button className="w-3/4 bg-orange-700 mt-6 p-2 rounded-lg font-semibold" onClick={handleClick}>About us</button>
                        </Link>
                    </div>
                </div>
                </div>  
        </div>
         </div>
    
  
  
   
  
   
   ))}
        </div>

  {/* Slider indicators */}
  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">


  {slides.map((s, i) => {
          return (
            <button
            onClick={() => {
               setCurrent(i);
             }}
             key={"circle" + i}
             type="button"
             className={`w-3 h-3 rounded-full bg-white cursor-pointer  ${
               i == current ? "bg-white" : "bg-gray-500"
             }`}
             aria-current="true"
             aria-label="Slide 1"
           />
          );
        })}





    
  </div>
  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev=""
    onClick={previousSlide}
  >
    <span className="inline-flex items-center  justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next=""
    onClick={nextSlide}

  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>



      );


      }






export {Banner}


        
