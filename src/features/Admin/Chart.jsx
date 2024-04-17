import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";



function Chart(){

    return(
        <div className="grid grid-cols-5 box-border">
        <div className="col-span-3 flex  items-center box-border">
        <LineChart/>
        </div>
        <div className="col-span-2 box-border my-10 px-16">
        <PieChart/>
        </div>
      </div>

    )
}


export {Chart}