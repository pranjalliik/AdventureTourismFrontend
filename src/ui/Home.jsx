import { Banner } from "./Banner"
import { TopPlans } from "../features/homephBody/TopPlans"
import { Reeviews } from "../features/homephBody/Reviews"
import { Signout } from "../features/auth/Signout"


function Home(){

    return(
        <>
     <Banner></Banner>
     <TopPlans></TopPlans>
     <Reeviews></Reeviews>
        </>
    )
}

export {Home}