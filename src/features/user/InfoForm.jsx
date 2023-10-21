

function UserInfoForm(){

    return(
        <>
        <form className="flex flex-col gap-y-5">


        <div className="flex flex-col gap-y-2">
            <label className="text-lg font-semibold">Email</label>
            <input className=" w-2/3 h-10 p-2 border border-neutral-400 " ></input>
        </div>

        <div className="flex flex-col gap-y-2">
            <label className="text-lg font-semibold">Name</label>
            <input className=" w-2/3 h-10 p-2 border border-neutral-400 " ></input>
        </div>

        <div className="flex flex-col gap-y-2">
            <label className="text-lg font-semibold">Username</label>
            <input className=" w-2/3 h-10 p-2 border border-neutral-400 " ></input>
        </div>

        </form>
        </>
    )
}

export {UserInfoForm}
