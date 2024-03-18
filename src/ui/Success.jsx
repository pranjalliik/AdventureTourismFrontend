import { createBooking } from "../services/apiBook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Success(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Access the slot and quant parameters
  const slot = searchParams.get('slot');
  const quant = searchParams.get('quant');
  useEffect(() => {
   let res =  createBooking({id:slot,no: quant})
   console.log(res)
  }, []);
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md">
        <h2 className="text-3xl font-semibold text-green-600 mb-6">Payment Successful!</h2>
        <p className="text-gray-700 mb-4">
          Thank you for your payment. Your order has been successfully processed.
        </p>
        <p className="text-gray-700 mb-4">
          We appreciate your business. If you have any questions, please contact our support team.
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={() => window.location.replace('/')}
        >
          Continue Shopping
        </button>
      </div>
    </div>
    )
}

export {Success}