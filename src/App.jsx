import {createBrowserRouter , RouterProvider,  BrowserRouter,Routes,Route} from "react-router-dom";
import { Home} from "./ui/Home" 
import { Tour }  from "./features/tours/Tour"
import { Header } from "./ui/Header";
import { Cart } from "./features/cart/cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Viewtour } from "./features/tours/ViewTour";
import { Signin } from "./features/auth/SigninForm";
import SignupForm from "./features/auth/Signup";
import axios from "axios";
import { useSelector } from "react-redux";
import { AdminHome } from "./ui/AdminHome";
import { SetAllTour } from "./features/Admin/TimeAndDate/SetAllTour";
import { CreateslotPage } from "./features/Admin/TimeAndDate/CreateSlotPage";
import { BookingLayout } from "./features/booking/BookingpageLayout";
import { DashBoardLayout } from "./features/Admin/dashBoardLayout";
import { UserInfo } from "./features/user/UserInfo";
import { UserBookings } from "./features/user/UserBookings";
import { Profile } from "./features/user/Profile";
import { ChagePass } from "./features/user/ChangePass";
import { Success } from "./ui/Success";
import {ErrorBoundary} from 'react-error-boundary';
import { Error } from "./utils/Error";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { RestrictAccess } from "./features/auth/RestrictAccess";
import {IsAuthorized} from "./features/auth/IsAuthorized"
import { ReviewTour } from "./features/user/ReviewTour";
import AboutUs from "./features/homephBody/AboutUs";
axios.defaults.withCredentials = true;


function App(){
  const role = useSelector((state)=> state.user.role)


       const queryClient = new QueryClient({
              defaultOptions: {
                queries: {
                  // staleTime: 60 * 1000,
                  staleTime: 0,
                },
              },
            });

           const errorHandler = (error,errorInfo)=>{
           // console.log("Loging ",error, errorInfo)
           } 

 return(
     <>
           <ErrorBoundary FallbackComponent={Error} onError={errorHandler}>

     <QueryClientProvider client={queryClient}>
     <ReactQueryDevtools initialIsOpen={false} />

       <BrowserRouter>
         <Header></Header>
     <Routes>

     <Route path="" element={
            <>
            {
              role === 'admin' ?
              <AdminHome></AdminHome>   :
              <Home></Home> 
               
            } 
             </>}/>

  

           
     <Route path="/signup" element={
            <RestrictAccess>
           <SignupForm></SignupForm>
           </RestrictAccess>
           }/>

    
<Route path="/aboutus" element={
        <AboutUs/>
           }/>


<Route path="/review/:id" element={
            <>
           <ProtectedRoute>
         <ReviewTour></ReviewTour>
           </ProtectedRoute>

           </>
           }/>



     <Route path="cart" element={
           <Cart></Cart>
           }/>
     

    <Route path="/success" element={<Success/>}/>
     
     <Route path="/tours" element={
            <>
           <Tour></Tour>
           </>
           }/>

 

    
     <Route path="/tours/:id" element={
            <>
            <Viewtour></Viewtour>
           </>
           }>

            </Route>
            
            <Route path="/book/:id" element={
          
             <ProtectedRoute>
           <BookingLayout/>   
           </ProtectedRoute>

           
           }/>


           
            <Route path="/signin" element={
               <RestrictAccess>
                 <Signin></Signin>
                 </RestrictAccess>
           }/>

           <Route path="/add" element={
            <ProtectedRoute>
              <IsAuthorized>
            <SetAllTour/>
            </IsAuthorized>
            </ProtectedRoute>
           }/>
           
             <Route path="/addslot/:id" element={
            
            <ProtectedRoute>
              <IsAuthorized>
            <DashBoardLayout>
              <CreateslotPage></CreateslotPage>
              </DashBoardLayout>
              </IsAuthorized>
            </ProtectedRoute>
          
           }/>
              
            <Route path="/profile" element={<Profile/>}>
              <Route index element = {<UserInfo/>}/>
              
              <Route path="userbookings" element={<UserBookings/>}/>
              <Route path="changepassword" element={<ChagePass/>}/>
            </Route>  

           </Routes>

            </BrowserRouter>
            </QueryClientProvider>
            </ErrorBoundary>

     </>
 )
}

export {App}