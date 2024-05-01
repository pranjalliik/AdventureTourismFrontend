import { useQuery } from "@tanstack/react-query"
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
function TopPlans(){



return (
    <div className="bg-black w-full bg-black pt-12">
  
      <>
      <div className="flex justify-center p-4">      
          <h1 className="text-white font-semibold text-3xl font-sans tracking-wide
     underline-offset-4 pb-8 pt-8" style={{fontFamily: "Times New Roman"}}>EXPLORE</h1>
      </div>

        <div className="flex  justify-around  pb-16 ">
          
        <Link to='/tour?search_query=rafting' > 
      <div className="shadow-lg shadow-gray-700	hover:opacity-60  h-72 w-64 rounded-lg bg-cover flex flex-col justify-end"   style={{
                    backgroundImage: `url('https://i.pinimg.com/236x/be/19/a2/be19a2b2b8043f95dbb55fe7ce86d57d--youghiogheny-river-ohiopyle.jpg')`,
                  }}>
       
         </div></Link>  
          
         <Link to='/tour?search_query=trekking' >
       <div className="shadow-lg shadow-gray-700		hover:opacity-60 h-72 w-64 rounded-lg bg-cover flex flex-col justify-end"   style={{
                    backgroundImage: `url('https://static.wixstatic.com/media/cce181791931046e4e02c2db2e3de89e.jpg/v1/fill/w_225,h_305,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cce181791931046e4e02c2db2e3de89e.jpg')`,
                  }}>
          
          </div></Link> 

          <Link to='/tour?search_query=skiing' > 
       <div className="shadow-lg shadow-gray-700		hover:opacity-60 h-72 w-64 rounded-lg bg-cover flex flex-col justify-end"   style={{
                    backgroundImage: `url('https://i.pinimg.com/236x/fd/80/cc/fd80cc8539c770799fddda0d56017545.jpg')`,
                  }}>
           </div></Link> 

           <Link to='/tour?search_query=camping' >  
       <div className="shadow-lg shadow-gray-700	hover:opacity-60	 h-72 w-64 rounded-lg bg-cover flex flex-col justify-end"   style={{
                    backgroundImage: `url('https://sportishka.com/src.php?src=https://sportishka.com/uploads/posts/2022-03/1647543499_1-sportishka-com-p-slet-turistov-turizm-krasivo-foto-1.jpg&w=260&h=390')`,
                  }}>
       </div></Link> 
           
        </div>
        
        </>
    
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
