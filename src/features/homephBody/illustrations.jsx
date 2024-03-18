import ilus1 from '../../images/4197641.jpg'
import ilus2 from '../../images/5615674.jpg'
import ilus3 from '../../images/10206466.jpg'



function Illustration(){

    return(<>
            <div className='bg-black flex justify-center pb-16 '>
           <div className='w-1/5 h-72 m-10 flex flex-col rounded-lg bg-white'>
            <div className='h-3/4  f bg-pink-500 '>
            <img
                        alt="Man"
                        src={`${ilus1}`}
                        className="h-full w-full object-cover"
                      /></div>

            <div className='bg-orange-700 h-1/4 text-center font-bold text-2xl pt-4 rounded-b-lg text-lg'>Eco Tourism</div>
           </div>

           <div className='w-1/5 h-72 m-10 flex flex-col rounded-lg bg-white'>
            <div className='h-3/4  f bg-pink-500 '>
            <img
                        alt="Man"
                        src={`${ilus2}`}
                        className="h-full w-full object-cover"
                      /></div>
                                  <div className='bg-orange-700 h-1/4 text-center font-bold text-2xl pt-4 rounded-b-lg text-lg'>Eco Tourism</div>

           </div>
           <div className='w-1/5 h-72 m-10 flex flex-col rounded-lg bg-white'>
            <div className='h-3/4  f bg-pink-500 '>
            <img
                        alt="Man"
                        src={`${ilus3}`}
                        className="h-full w-full object-cover"
                      /></div>
        <div className='bg-orange-700 h-1/4 text-center font-bold text-2xl pt-4 rounded-b-lg text-lg'>Eco Tourism</div>

           </div>
              </div>


    </>)
}

export {Illustration}