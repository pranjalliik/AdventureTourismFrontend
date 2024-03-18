import { Pie } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import { useState } from "react";
function PieChart(){
    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    });
    return(
        <div className=" ">
            <Pie
            className=" w-3/4 h-3/4"
            data={data}
            />
            </div>
       
    )
}

export {PieChart}