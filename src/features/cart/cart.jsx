



import React, {useState,useEffect} from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
  
  function Cart() {

  const items = useSelector((state)=> (state.cart.cart))
  console.log(items)

  /*
  if(items.length!=0){
  items.shift();
  }
  console.log(items)

*/
    return (
        <>
        <div className="w-full h-36 bg-ptn"></div>
        <div className="border-black w-full h-8 bg-orange-600"></div>
        <div className="flex justify-center w-full">
          <div className="border-black w-10/12 grid grid-cols-5">
            <div className="col-span-3 text-center pt-4">Tour</div>
            <div className="col-span-1 text-center pt-4">Price</div>
            <div className="col-span-1 text-center pt-4">Delete</div>
          </div>
        </div>
      
        {items.length === 0 || items.length === 1 ? (
          <div>
            <div>empty</div>
          </div>
        ) : (
          <>
            {items.map((item, idx) => (
              <div key={idx} className="flex justify-center w-full mt-8">
                {idx !== 0 && (
                  <div  className="border-black w-10/12 grid grid-cols-5">
                    <div className="col-span-3 text-center flex">
                    <div
          
          style={{ backgroundImage: `url(${require(`../../images/${item.photo}`)})` }} className="  h-40 bg-no-repeat w-3/5"
          alt=""
        /> 
                        <div className="mt-5">{item.name}</div>
                        </div>
                    <div className="mt-5 col-span-1 text-center">{item.unitPrice}</div>
                    <div className="mt-5 col-span-1 text-center">delete</div>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </>
      
    );
  }
  
  

  export {Cart}