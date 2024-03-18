import { useQuery } from "@tanstack/react-query"
import { TailSpin } from "react-loader-spinner";

function TopPlans(){

    const {isLoading,data: Tours, error,} = useQuery({
        queryKey: ["Tours"],
        queryFn: async function getthreeTours(){
            const res = await fetch(`http://localhost:5000/tours/topthree`)
            
            const {data} = await res.json();
            
            return data;
            }
            ,
      });
    
console.log(Tours)

return (
    <div className="bg-black w-full bg-black">
      {isLoading ? (
        <div className="flex justify-center pt-16 pb-10">
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
        </div>
      ) : (
      <>
      <div className="flex justify-center p-4">      
          <h1 className="text-white font-semibold text-3xl font-sans tracking-wide
underline-offset-4
">EXPLORE</h1>
      </div>

        <div className="flex  justify-around  pb-16 ">
           {Tours.map((tour) => (

      <div className="h-72 w-64 rounded-lg bg-cover flex flex-col justify-end"   style={{
                    backgroundImage: `url(${require(`../../images/${tour.photo}`)})`,
                  }}>
          <div className="flex justify-center py-6 bg-black opacity-70 hover:opacity-100 hover:bg-orange-800" ><button className="text-white font-bold text-xl hover:text-black ">VIEW  </button> </div>
       </div>
                
           ))}
           
        </div>
        
        </>
      )}
    </div>
  );
  
}

export {TopPlans}

/* 

 <>
          <div className="w-full flex justify-center mt-6">
            <div className="w-1/2 text-center text-2xl font-semibold">Explore</div>
          </div>
          <div className="flex w-full p-3 justify-items-center ml-28 mb-16">
            {Tours.map((tour) => (
              <div className="flex flex-col mx-4">
                <div
                  style={{
                    backgroundImage: `url(${require(`../../images/${tour.photo}`)})`,
                  }}
                  className="h-40 w-72"
                >
                  
                </div>
                <div className="bg-black text-white rounded-b-lg">
                  <div className="h-7 text-center text-white mt-3 font-semibold">{tour.name} <br/></div>
                  <button className="ml-28 bg-orange-700 rounded-lg py-1 px-4 mb-4 mt-3">View</button>
                </div>
              </div>
            ))}
          </div>
        </>

*/