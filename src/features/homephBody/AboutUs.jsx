import React from 'react'

export default function AboutUs() {
  return (
    <div className='overflow-hidden w-[1263px] text-[0px] bg-[#fff] relative overflow-hidden shadow-[0_0_0_0_#000000]  box-border mx-auto '>
   <div className='flex justify-center'>   <span className="  items-start font-['Roboto'] text-[36px] font-bold leading-[40px] text-[#1f2937] whitespace-nowrap  mt-[30px] mr-0 mb-0">
    
        About Adventure Awaits
      </span></div>
      <div className='flex justify-center'>
      <span className=" items-start font-['Montserrat'] text-[16px] font-normal leading-[24px] text-[#4b5563]   mt-[20px] mr-0 ">
        Join us for an unforgettable experience as we explore the wild and
        wonderful through a variety of adventure activities designed for
        thrill-seekers and nature lovers alike.
      </span></div>

      <div className='w-[1167px] h-[378px] relative mt-[62px] mr-0 mb-0 ml-[48px]'>
        <div className='w-[568px] h-[378px]  bg-cover bg-no-repeat bg-black rounded-[8px] absolute top-1/2 left-1/2 translate-x-[-102.73%] translate-y-[-50%] overflow-hidden ' style={{ backgroundImage: `url('http://tourism.dp.gov.ua/wp-content/uploads/2019/11/water.jpg')`}} />
        <span className="flex h-[36px] justify-start items-start font-['Roboto'] text-[30px] font-bold leading-[36px] text-[#1f2937] absolute top-[73px] left-[51.41%] text-left whitespace-nowrap z-[27]">
          Our Mission
        </span>
        <span className="flex w-[565px] h-[48px] justify-start items-start font-['Montserrat'] text-[16px] font-normal leading-[24px] text-[#4b5563] absolute top-[123px] left-[51.41%] text-left z-[25]">
          To provide safe, exciting, and unique outdoor experiences that inspire
          a love for adventure and a respect for nature.
        </span>
        <span className="flex h-[36px] justify-start items-start font-['Roboto'] text-[30px] font-bold leading-[36px] text-[#1f2937] absolute top-[185px] left-[51.41%] text-left whitespace-nowrap z-[23]">
          Our Vision
        </span>
        <span className="flex w-[567px] h-[72px] justify-start items-start font-['Montserrat'] text-[16px] font-normal leading-[24px] text-[#4b5563] absolute top-[235px] left-[51.41%] text-left z-[21]">
          To be the leading adventure tourism provider, where customers can push
          their boundaries, challenge their perceptions, and discover their
          potential.
        </span>
      </div>

      <>
  {/* component */}
  {/* Foooter */}
  <section className="bg-black mt-10">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

      <div className="flex justify-center mt-8 space-x-6">



        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">GitHub</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      
        <a href="#" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">LinkedIn</span>
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 0A3.75 3.75 0 000 3.75v16.5A3.75 3.75 0 003.75 24h16.5A3.75 3.75 0 0024 20.25V3.75A3.75 3.75 0 0020.25 0H3.75zM7.5 18.75H5.25v-9h2.25v9zm-1.125-10.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM18 18.75h-2.25v-4.5c0-1.125-.375-1.875-1.5-1.875s-1.5.75-1.5 1.875v4.5H10.5v-9h2.25v1.125c.375-.75 1.125-1.5 2.25-1.5 1.875 0 3 1.125 3 3.375v5.625z"
    />
  </svg>
</a>


      </div>
      <p className="mt-8 text-base leading-6 text-center text-gray-400">
      </p>
    </div>
  </section>
</>

    </div>
  );
}