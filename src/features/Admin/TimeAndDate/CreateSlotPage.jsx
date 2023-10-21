
import { Sform } from "./CreateslotForm";
import { TourInfo } from "./tourInfoDaT";
import { Schedule } from "./schedule";

function CreateslotPage(){
 return(
  <>
  
   <div className="grid grid-cols-2	">
    <TourInfo></TourInfo>
    <Sform></Sform>
     </div>
   <Schedule></Schedule>
    </>
 )
}
export {CreateslotPage}