import Navbar from "../global/Navbar"
import Footer from "../global/Footer"
import LoginSignUpModal from "./LoginSignUpModal"
import { useState } from "react";
import ProductCard from "../productView/ProductCard"
import img1 from "../../assets/img1.png"

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
    <main className='container mx-auto px-4 py-8 '>
        <div className="Login-heroSection flex items-center justify-between">
          <section className="Login-heroSection-leftPart">
            <h2 className="font-bold text-4xl mb-4">Shop Confidently â ? ? <br />
              accessible products for
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Accessibility-first ecommerce with thousands of keyboard-friendly, labeled <br/>products.
            </p>
            <div className="flex gap-3">
              <button className="px-16 py-3 bg-black text-white hover:bg-gray-800">
                Browse
              </button>
              <button className="px-20 py-3 bg-black text-white hover:bg-gray-800">
                Sell
              </button>
            </div>

            <div className="flex gap-12 py-8">
              <div className="ProductStats border-r-2 px-6 -mx-3">
                <p className="text-2xl text-gray-900">8K+</p>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="ProductStats border-r-2 px-6 -mx-3">
                <p className="text-2xl text-gray-900">1.5K</p>
                <p className="text-gray-600">Vendors</p>
              </div>
              <div className="ProductStats">
                <p className="text-2xl text-gray-900">120K+</p>
                <p className="text-gray-600">Active shoppers</p>
              </div>
            </div>

          </section>

          <section className="Login-heroSection-rightPart">
            <ProductCard />
          </section>

        </div>

        <div className="Login-middleSection">
          Middle section for scrumbergs
        </div>

        <div className="Login-bottomSection">
          <div className="Login-bottomSection-leftPart">
            <img 
              src={img1} 
              alt="Login bottom section left part image" 
              className="w-72"
            />
          </div>
          <div className="Login-bottomSection-rightPart">
            <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
               Join our mailing list for accessibility 
               <br/>updates, early access to accessible 
              <br/> products, and practical shopping tips.      
            </h2>
            <div className=" w-full mt-6 flex border border-gray-300 rounded-md overflow-hidden">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 outline-none">
            </input>
             <button type="Submit" className=" bg-black text-white text-lg w-1/3 px-2 py-2 m-2">Subscribe</button>
            </div>
           
          </div>
        </div>

      </main>
      <Footer
        isLoggedIn={false}
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