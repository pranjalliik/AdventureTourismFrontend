import NoOfPeople from "./noOfPeople"
import BookingPage from "./BookingPage"

function BookingLayout(){
return(
    <>
    <div className="w-full h-36 bg-ptn"></div>
    <div className="border-black w-full h-8 bg-orange-600"></div>
    <BookingPage>
        <NoOfPeople></NoOfPeople>
    </BookingPage>
    </>
)
}

export {BookingLayout}