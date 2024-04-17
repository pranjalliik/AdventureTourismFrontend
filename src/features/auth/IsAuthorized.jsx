
import {useSelector} from "react-redux"


function IsAuthorized({children}){
    const user = useSelector((state) => state.user.role);
   
    if(user === 'user') {
        throw new Error();
    }
    return children
}


export {IsAuthorized}