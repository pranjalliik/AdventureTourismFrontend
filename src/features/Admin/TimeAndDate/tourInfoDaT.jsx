

import StarRatings from 'react-star-ratings';

function TourInfo({data}){

   

    return(
        <>
      
        <div className="grid grid-rows-2 mt-8 grid-cols-1 box-border">
         <div  style={{ backgroundImage: `url(${require(`../../../images/${data.photo}`)})` }} alt='pic' className="col-span-3  w-80 h-56 bg-cover ml-20 bg-no-repeat rounded-md "></div>
        <div className="flex flex-col ml-20 mt-8 pt-3 pb-1 gap-y-1  bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 mr-44 p-6 mb-12 rounded-lg  font-medium w-80 ">
          <div>{data.name}</div>
          <div>{`Rs ${data.price}`}</div> 
          <StarRatings 
          rating={data.ratingAverage}
          starDimension="20px"
        starSpacing="2px"
        starRatedColor= "#Ffcf10"
          numberOfStars={5}
          name='rating'
        />
          <div>{data.Location}</div>
          
          

        </div>
        </div>

          
      </>
    )
}

export {TourInfo}