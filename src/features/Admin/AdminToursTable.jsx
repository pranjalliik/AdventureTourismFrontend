import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours";
import { TailSpin } from "react-loader-spinner";
import { TourTableRow } from "./TourTableRow";



function AdminToursTable({modelState,setCurrDetails,setCurrSlot}){

  const {isLoading,data: Tours, error,} = useQuery({
    queryKey: ["Tours"],
    queryFn: getTours,
  });
 


if(!isLoading){
  console.log(Tours)
}


function handleOnAdd(tour){

}

    return(
        <>
           {
      isLoading ? (
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

          <div className="flex-grow flex-col">
            <div className="flex w-100 justify-center			">
          <div className="w-7/12 ">
  <div className="font-semibold	text-2xl m-6">Product</div>
  <table className="border-collapse border border-slate-500 w-full mb-12 ">
    <tbody>
 
      <tr>
        <th className="border border-slate-600 w-5/12">Name</th>
        <th className="border border-slate-600 w-1/6">Price</th>
        <th className="border border-slate-600 w-1/6">Discount</th>
        <th className="border border-slate-600 ">edit/del</th>
      </tr>
    

    </tbody>
    <tbody>
    {  Tours.map((tour)=>(
      <tr >
    <td className="border border-slate-700 flex"  >
      <div style={{ backgroundImage: `url(${require(`../../images/${tour.photo}`)})` }}
      alt="" className="h-24 w-32 bg-contain bg-no-repeat mt-2 ml-2"></div>
    <div className="flex flex-col justify-center pl-3">
      {tour.name} </div></td>
    <td className="border border-slate-700 ">{tour.price}</td>
    <td className="border border-slate-700 ">{tour.manager.name}</td>
    <td className="border border-slate-700 ">
     <div className="flex ml-7	gap-x-9">
      
      <div onClick={() =>{modelState()
      setCurrDetails(tour)
      }
      }>

     <span className="material-symbols-outlined">
           edit
                   </span>
               
                   </div>



                     <span class="material-symbols-outlined">

                    delete
                      </span>

                      <span class="material-symbols-outlined" onClick={()=>{setCurrSlot(tour) 
                         modelState()}}>add</span>
                    </div> </td>
                   </tr>
      ))}
    </tbody>
  </table>
  </div>
  </div>
</div>
}


        </>
    )
}

export {AdminToursTable}

