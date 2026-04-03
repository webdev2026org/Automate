import Navbar from "../global/Navbar"
import Footer from "../global/Footer"
import LoginSignUpModal from "./LoginSignUpModal"
import { useState } from "react";

const Login = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    type: "", // login / signup
  });

   const handleLoginClose = () => {
    if(showLoginModal){
        setShowLoginModal(false);
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
   showLoginModal={showLoginModal}
   setShowLoginModal={setShowLoginModal}
   />
    <main className='container mx-auto px-4 py-8'> Login Page</main>
   <Footer 
   showLoginModal={false}
    
   />
   {showLoginModal && 
   <LoginSignUpModal
    onLoginClose={handleLoginClose}
    userDetails={userDetails}
    setUserDetails={setUserDetails}
   />}
    </div>
  )
}

export default Login