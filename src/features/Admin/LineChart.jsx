import { Line, getElementsAtEvent } from 'react-chartjs-2';
import { useState,useEffect,useMemo } from 'react';
import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getTourSales } from '../../services/apiTours';
import {Chart as ChartJS} from "chart.js/auto"
import axios from 'axios'
import { TailSpin } from "react-loader-spinner";




let data
let options

/*
 
            <Line
      
      data={data}
     options = {options}
    />
  */


function LineChart(){


  const api_url = process.env.REACT_APP_API_URL;


  const[TourSales,setTourSales] = useState()

const fetchData = async () => {
  try {
      const res = await axios.get(`${api_url}/tours/monthlysales`, {
  withCredentials: true });
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



    let months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    let smonth = ((TourSales[TourSales.length-1].month )%12  )+1
    let count = 0
    let idx = 0;
    let arr = []
    let month =[]
    while(count != 12){
     month.push(months[smonth-1])
      if(TourSales[idx].month === smonth){
        
         arr.push(TourSales[idx].totalSales)
        idx++;
      }else{
        arr.push(0);
      }
      count++;
      smonth = (smonth %12  )+1
    }
     
 
    
     data = {
      
     
        labels: month,
        datasets: [
          {
            label: "Last 1 year",
            data:   arr,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: '#fff'
          },
    
        ]
      };
    
    
       options = {
        plugins: {
          title: {
            display: true,
            text: 'Monthly Sales',
            color: 'white', // Text color
          },
          legend: {
            labels: {
              color: 'white', // Legend text color
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'white', // X axis tick text color
            },
          },
          y: {
            ticks: {
              color: 'white', // Y axis tick text color
            },
          },
        },
        // Set background color
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
        elements: {
          point: {
            pointStyle: 'circle',
            radius: 5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
          line: {
            backgroundColor: 'rgba(75, 192, 192, 0.4)', // Background color of the chart
            borderColor: 'rgba(75,192,192,1)',
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
      <div className=' w-3/4 h-3/4 bg-blue-500 rounded-lg ' style={{backgroundColor : "#232031"}}>
       { data &&   <Line
      data={data}
     options = {options}
    />
       }</div>
      } 
        </>
    )
}

export {LineChart}
