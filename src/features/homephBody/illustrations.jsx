import ilus1 from '../../images/4197641.jpg'
import ilus2 from '../../images/5615674.jpg'
import ilus3 from '../../images/10206466.jpg'



function Illustration(){

    return(<>
             <div className="flex justify-center  p-4 bg-black pt-6">      
          <h1 className="pt-12 text-white font-semibold text-3xl font-sans tracking-wide
     underline-offset-4 pb-4" style={{fontFamily: "Times New Roman"}}>Explore Together</h1>
      </div>

            <div className='bg-black flex justify-center pb-16 '>
           <div className='shadow-md shadow-orange-700 border border-orange-700 w-1/5 h-72 m-10 flex flex-col rounded-lg bg-white'>
            <div className='h-3/4  f bg-pink-500 '>
            <img
                        alt="Man"
                        src={`${ilus1}`}
                        className="h-full w-full object-cover rounded-lg"
                      /></div>

            <div className='bg-orange-700 h-1/4 text-center font-bold text-2xl pt-4 rounded-b-lg text-lg'>Eco Tourism</div>
           </div>

           <div className='shadow-md shadow-orange-700 border border-orange-700 w-1/5 h-72 m-10 flex flex-col rounded-lg bg-white'>
            <div className='h-3/4  f bg-pink-500 '>
            <img
                        alt="Man"
                        src={`${ilus2}`}
                        className="h-full w-full object-cover rounded-lg "
                      /></div>
                                  <div className='bg-orange-700 h-1/4 text-center font-bold text-2xl pt-4 rounded-b-lg text-lg'>Connect & Explore</div>

           </div>
           <div className='shadow-md shadow-orange-700 border border-orange-700 w-1/5 h-72 m-10 flex flex-col rounded-lg bg-white'>
            <div className='h-3/4  f bg-pink-500 '>
            <img
                        alt="Man"
                        src={`${ilus3}`}
                        className="h-full w-full object-cover rounded-lg"
                      /></div>
        <div className='bg-orange-700 h-1/4 text-center font-bold text-2xl pt-4 rounded-b-lg text-lg'>Safe Adventures, Strong Bonds</div>

           </div>
              </div>


    </>)
}

export {Illustration}