import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createReview } from './reviewSlice';
import { useDispatch ,useSelector} from "react-redux";
import {ThreeDots} from 'react-loader-spinner';

function ReviewTour(){


  const dispatch = useDispatch()
  let status = useSelector((state)=> state.review.status);
console.log(status)
const[rating,setRating] = useState(0)   
const[review,setReview] = useState('')   

let param = useParams()
const handleSetRating = (newRating, name) => {

  if (name === 'rating') {
    setRating(newRating);
  }

};

const handleReviewChange = (event) => {
  // Update the review state with the new value from the input field
  setReview(event.target.value);
};





const handleClick = async (event) => {
  event.preventDefault();

  try {

    dispatch(createReview({rating , review,id : param.id}))
  } catch (error) {
    console.error('Sign-in failed:', error);
    // Display error message or handle the failure case.
  }
};







    return(
        <>
                <div className="w-full bg-whitesmoke flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 rounded-lg bg-white shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] overflow-hidden flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full text-left text-sm text-darkslategray font-roboto">
        <h2 className="m-0 relative text-[24px] leading-[32px] font-bold font-inherit text-black mq450:text-[19px] mq450:leading-[26px]">
          Write a Review
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px] inline-block min-w-[77px]">
            Your Rating
          </b>
          <StarRatings 
        rating={rating}
        starDimension="20px"
        starSpacing="2px"
        starRatedColor="rgb(230, 67, 47)"
        numberOfStars={5}
        name='rating'
        changeRating={handleSetRating}
      />

        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[8px] max-w-full">
          <b className="relative leading-[20px] inline-block min-w-[80px]">
            Your Review
          </b>
          <div className="self-stretch rounded bg-white shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] box-border overflow-hidden flex flex-row items-start justify-start pt-2 pb-[69px] pr-0 pl-[11px] max-w-full border-[1px] border-solid border-gainsboro">
            <input  name='review'   
             value={review}
           onChange={handleReviewChange}         
           className="w-full [border:none] [outline:none] font-roboto text-base bg-[transparent] h-5 flex-1 relative leading-[20px] text-darkgray text-left inline-block min-w-[250px] max-w-full p-0"
              placeholder="Write your review here..."
              type="text"
            />
          </div>
        </div>
          <button  onClick={handleClick} className="cursor-pointer  rounded-lg px-4 py-3 bg-orange-700 text-white font-semibold hover:opacity-50">
         Submit Review
        </button>
      </section>
    </div>
    <div>
      {/* Render content based on the status */}
      {status === 'loading' && 
      <div className='ml-10'>
       <ThreeDots
       className="ml-10"
       // Change type of loader (options: Audio, BallTriangle, Bars, Circles, Grid, Hearts, Oval, Puff, Rings, TailSpin, ThreeDots, Watch)
        color="#D3D3D3" // Change color of loader
        height={100} // Set height of loader
        width={100} // Set width of loader
      /></div> }
      {status === 'succeeded' && <div   className='ml-8 font-bold text-xl text-green-700 '>Action succeeded!</div>}
      {status === 'failed' && <div className='ml-8 font-bold text-xl text-red-700'>Action failed!</div>}
    </div>
        </>
    )
}


export {ReviewTour}


