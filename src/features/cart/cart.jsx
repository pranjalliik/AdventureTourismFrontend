



import React, {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { getCartItems } from "./cartSlice";
import { Link } from "react-router-dom";


  function Cart() {
    const dispatch = useDispatch()

    const items = useSelector((state)=> (state.cart.cart))

    useEffect(() => {
        
      dispatch(getCartItems({items}));
      
  }, []);


  let {fetchedTours,status} = useSelector((state)=> (state.cart))


  function handledelete(id){
     dispatch(deleteItem(id))
  }



    return (
      



<>
{ !fetchedTours?
(
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
) :

<>

<style
  dangerouslySetInnerHTML={{
    __html:
      '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n'
  }}
/>
<div className="h-screen bg-gray-100 pt-16">
  <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-2/3">

    {fetchedTours.map((item, idx) => (
         
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={`${require(`../../images/${item.photo}`)}`}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
            {item.name}
            </h2>
            <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            < Link to={`/tours/${item._id}`} ><div className="fomt-semibold text-white bg-orange-600 py-2 px-2 rounded-lg hover:opacity-80 text-center">
              View
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <p className="text-sm">Rs {` ${item.price}`}</p>
              <svg
                onClick={()=>handledelete(item._id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    ))}
     


    </div>
    {/* Sub total */}
   
  </div>
</div>
</>
}
</>
   
    );
  }
  
  

  export {Cart}