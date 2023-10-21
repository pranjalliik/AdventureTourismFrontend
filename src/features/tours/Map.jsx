import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



export default function Map (){
    const position = [51.505, -0.09];

    return(
        <>
      
        <div className='flex mt-16 backdrop '>
            <div className='w-3/5'>
            <div className='bg-yellow-50 p-14 rounded-lg italic text-center  mx-12 mt-12 '>With a strong focus on customer satisfaction and safety, they offer top-notch boats and equipment, ensuring a comfortable and enjoyable adventure on the water. Whether you're seeking a peaceful day of fishing or an exhilarating speedboat ride, their knowledgeable and friendly staff will assist you every step of the way.</div>
            </div>
        <div className=' flex flex-col justify-center' style={{ width: '400px', height: '400px' }}>
            <div className='text-center font-semibold border-4 text-white bg-black'>Loaction</div>
    <MapContainer  center={position} zoom={13} style={{ width: '400px', height: '400px'}}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={position}>
      <Popup>
        A marker is placed here.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  </div>
  </>
    )
}