

function UserBookings(){

    return(
        <>
        <div className="flex flex-col gap-y-6 p-6 pl-36 pt-10 ">
        <div className="flex gap-x-16">
            <div className="font-semibold text-lg">Boating</div>
            <div className="flex flex-col gap-y-2">
                <div className="pl-4 p-2">26/08/23</div>
                <div className="pl-4 p-2">4:30 PM</div>
                <div className="pl-4 p-2">Number of Reservations: 2</div>
            </div>
             
        </div>
        </div>
        </>
    )
}

export {UserBookings}