import { Pie } from "react-chartjs-2";
import { useState,useEffect ,useMemo} from "react";
import axios from 'axios'
import { TailSpin } from "react-loader-spinner";

function PieChart(){
  const api_url = process.env.REACT_APP_API_URL;

let data
let options
const[TourSales,setTourSales] = useState()

const fetchData = async () => {
  try {
      const res = await axios.get(`${api_url}/tours/toursales`);
      return res.data.data;
  } catch (error) {
      return [];
  }
};

// Memoize the fetchData function so that it's only re-executed if its dependencies change
const memoizedFetchData = useMemo(() => fetchData, []);

useEffect(() => {
  const fetchDataAndUpdateState = async () => {
      const data = await memoizedFetchData();
      setTourSales(data);
  };

  fetchDataAndUpdateState();
}, [memoizedFetchData]); // Run the effect whenever memoizedFetchData changes


if(TourSales){
let tour = []
let sales = []

for (const [key, value] of Object.entries(TourSales)) {
  tour.push(key)
  sales.push(value)
}

     data = {
        datasets: [{
            data: sales
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: tour
    }

     options = {
        plugins: {
          title: {
            display: true,
            text: 'Sales Distribution by Tour',
            color: 'white', // Text color
          },
          legend: {
            labels: {
              color: 'white', // Legend text color
            },
          },
        },
      };
    }
    return(
<>
      {
        !TourSales? (
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
        ):
        <div className=" rounded-lg" style={{backgroundColor : "#151518"}}>
            <Pie
            className=" w-3/4 h-3/4 text-white" 
            data={data}
            options={options}
            />
            </div>
        }
      
      </>   
    )
}

export {PieChart}