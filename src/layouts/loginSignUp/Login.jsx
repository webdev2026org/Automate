import Navbar from "../global/Navbar"
import Footer from "../global/Footer"
import LoginSignUpModal from "./LoginSignUpModal"
import { useState } from "react";

const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLoginClose = () => {
    if(isLoggedIn){
        setIsLoggedIn(false);
    }
    }

  return (
    <div className='app-container flex flex-col min-h-screen justify-between'>
   <Navbar 
   showSearchBar={false}
   showmenuOtions={false}
   breadcrumbItems={[]}
   showCartIcon={false}
   showLoginBtn={true} 
   isLoggedIn={isLoggedIn}
   setIsLoggedIn={setIsLoggedIn}
   />
    <main className='container mx-auto px-4 py-8'> Login Page</main>
   <Footer 
   isLoggedIn={false}
    
   />
   {isLoggedIn && 
   <LoginSignUpModal
    onLoginClose={handleLoginClose}
   />}
    </div>
  )
}

export default Login