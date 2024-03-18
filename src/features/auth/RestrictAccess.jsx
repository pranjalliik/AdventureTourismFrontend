import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"


function RestrictAccess({children}){
    const user = useSelector((state) => state.user.username);
    const navigate = useNavigate()
  //console.
    if(user) {
       navigate('/')
    }
    return children
}


export {RestrictAccess}