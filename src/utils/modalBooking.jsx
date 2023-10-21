import { useState } from "react";


function ModalBooking(props){

    function handleOnClick(){
        props.setNoOfPeople(0)
           props.closeModel(false)


    }

    return(
        <>
         <div>
            <button onClick={()=>{handleOnClick()}}>X</button>
            <div>No of people</div>
            <select onChange={(event)=>{props.setNoOfPeople(event.target.value)}}>
                     <option >1</option>
                     <option >2</option>
                     <option >3</option>
                     <option >4</option>
                     <option >5</option>
                     <option >6</option>
          </select>
         </div>
        </>
    )

}

export {ModalBooking}

