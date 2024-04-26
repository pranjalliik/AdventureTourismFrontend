import StarRatings from 'react-star-ratings';
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';


function FilterAndSort(){


    const[searchParams,setSearchParams] = useSearchParams();
    const[squery,setSquery] = useState()
     let priceorder = searchParams.get('price');
    
    let ratingFilter = searchParams.get('rating');
    let searchquery =   searchParams.get ('search_query');
    
    
    const handleSortChange = (event) => {
        const newSortOrder = event.target.value;
        console.log(newSortOrder, priceorder)
        if(newSortOrder === priceorder){
              priceorder = '';
           searchParams.delete('price');
           setSearchParams(searchParams);
          }
        else{
            
          searchParams.set('price',newSortOrder );
          setSearchParams(searchParams);
         priceorder =newSortOrder;
          console.log( priceorder)

    
        }
     }

     const handleRatingfilter = (event) => {
        let rating = event.target.value
        if(rating === ratingFilter){
          ratingFilter =''
          searchParams.delete('rating');
           setSearchParams(searchParams);
        }else{
              ratingFilter =rating
              searchParams.set('rating',rating );
              setSearchParams(searchParams);
    
            }
      }

   function handleChange(event){
let {value} = event.target 
console.log(value)
   setSquery(value)
   }

   const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Call your function here
        if(searchquery === '' && (!squery || squery.trim() === ''))return;
      console.log(squery)
        if(!squery || squery.trim() === ''){
          searchquery = '';
          searchParams.delete('search_query');
          setSearchParams(searchParams);
          return;
        }

              searchParams.set('search_query',squery );
              setSearchParams(searchParams);
              searchquery = squery
      console.log('Enter key pressed');
    }
  }
    return(
        <>
         <div className="flex bg-gray-200 w-min	rounded-lg ">
                <span className="material-symbols-outlined py-2 px-1  hover:opacity-50 "  >
                     search
                </span>
               
                    <input className="p-2 outline-none  h-6 my-2 mx-2" onKeyDown={handleKeyPress}  name="search" value={squery}  onChange={handleChange} />
                
            </div>
         <div>Price</div>
         <div className="ml-4">
         <div>
         <input type="radio" id="highToLow"
            name="sortOrder"
            value="lowToHigh"
            checked={priceorder === 'lowToHigh'}
            onClick={handleSortChange}/>
          <label >Low to high</label>
         </div>
         <div>
         <input type="radio"  id="highToLow"
            name="sortOrder"
            value="highToLow"
            checked={priceorder === 'highToLow'}
            onClick={handleSortChange}/>
          <label >High to Low</label>
         </div>
          </div>

             <div>Rating</div>
             <div className="ml-4">
         <div>
         <input type="radio" className="mr-2"  value="5"
            checked={ratingFilter === '5'}
            onClick={handleRatingfilter}/>
         <StarRatings 
         
          rating={5}
          starDimension="20px"
        starSpacing="2px"
        starRatedColor="rgb(230, 67, 47)"
          numberOfStars={5}
          name='rating'
        />
         </div>
         <div>
         <input type="radio" className="mr-2"  value="4"
            checked={ratingFilter === '4'}
            onClick={handleRatingfilter} />
         <StarRatings 
         
         rating={4}
         starDimension="20px"
       starSpacing="2px"
       starRatedColor="rgb(230, 67, 47)"
         numberOfStars={5}
         name='rating'
       />
         </div>    

         <div>
         <input type="radio" className="mr-2"  value="3"
            checked={ratingFilter === '3'}
            onClick={handleRatingfilter} />
         <StarRatings 
         
         rating={3}
         starDimension="20px"
       starSpacing="2px"
       starRatedColor="rgb(230, 67, 47)"
         numberOfStars={5}
         name='rating'
       />
         </div> 

         <div>
         <input type="radio" className="mr-2"   value="2"
            checked={ratingFilter === '2'}
            onClick={handleRatingfilter}/>
         <StarRatings 
         
         rating={2}
         starDimension="20px"
       starSpacing="2px"
       starRatedColor="rgb(230, 67, 47)"
         numberOfStars={5}
         name='rating'
       />
         </div> 

         <div>
         <input type="radio" className="mr-2"   value="1"
            checked={ratingFilter === '1'}
            onClick={handleRatingfilter}/>
         <StarRatings 
         
         rating={1}
         starDimension="20px"
       starSpacing="2px"
       starRatedColor="rgb(230, 67, 47)"
         numberOfStars={5}
         name='rating'
       />
         </div> 


         </div>     
        </>
    )
}

export {FilterAndSort}