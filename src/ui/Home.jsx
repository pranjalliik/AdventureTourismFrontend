import { Banner } from "./Banner"
import { TopPlans } from "../features/homephBody/TopPlans"
import { Reeviews } from "../features/homephBody/Reviews"
import { Signout } from "../features/auth/Signout"
import { Illustration } from "../features/homephBody/illustrations"

function Home(){

    return(
        <div className="h-screen ">
        
     <Banner></Banner>
     <TopPlans></TopPlans>
     <Reeviews></Reeviews> 
     <Illustration/>
        </div>
    )
}

export {Home}

/*   
     */