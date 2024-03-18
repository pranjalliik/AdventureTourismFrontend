import { Line, getElementsAtEvent } from 'react-chartjs-2';
import { useState } from 'react';
import React from "react";

import {Chart as ChartJS} from "chart.js/auto"

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
function LineChart(){

/*
    const [data, setData] = useState({
        labels: ['jan', 'feb', 'mar', 'apr', 'may'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56],
          },
        ],
      });*/
    
    return(
      <div className=' w-3/4 h-3/4 '>
          <Line
      
      data={data}
     
    />
        </div>
    )
}

export {LineChart}