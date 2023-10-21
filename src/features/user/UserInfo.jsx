import { UserInfoForm } from "./InfoForm"

function UserInfo(){

    return(
        <>
        <div className="flex pl-20 pt-6  flex-col gap-y-6">
           <div className="font-bold text-4xl">Account  Overview</div>
           <div className="font-bold text-2xl">Profile</div>
           <UserInfoForm></UserInfoForm>
        </div>
        </>
    )
}

export {UserInfo}