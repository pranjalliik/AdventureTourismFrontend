
function ChagePass(){

    return(
        <>
        <div className="flex pl-20 pt-6  flex-col gap-y-6">
        <form className="flex flex-col gap-y-5">


        <div className="flex flex-col gap-y-2">
            <label className="text-lg font-semibold">Current Password</label>
            <input className=" w-2/3 h-10 p-2 border border-neutral-400 " ></input>
        </div>

        <div className="flex flex-col gap-y-2">
            <label className="text-lg font-semibold">New Password</label>
            <input className=" w-2/3 h-10 p-2 border border-neutral-400 " ></input>
        </div>

        <div className="flex flex-col gap-y-2">
            <label className="text-lg font-semibold">Confirm New Password</label>
            <input className=" w-2/3 h-10 p-2 border border-neutral-400 " ></input>
        </div>

        <div className="flex justify-end  w-2/3">
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-300 rounded-2xl mt-4 text-lg font-semibold">Set new password</button>
        </div>
        </form>         
        </div>
        
        </>
    )
}

export {ChagePass}