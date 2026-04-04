import Navbar from "../global/Navbar"
import Footer from "../global/Footer"
import LoginSignUpModal from "./LoginSignUpModal"
import { useState } from "react";
import ProductCard from "../productView/ProductCard"
import img1 from "../../assets/img1.png"
import "../../styles/login.css"

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
    <div className='app-container'>
   <Navbar 
   showSearchBar={false}
   showmenuOtions={false}
   breadcrumbItems={[]}
   showCartIcon={false}
   showLoginBtn={true} 
   showLoginModal={showLoginModal}
   setShowLoginModal={setShowLoginModal}
   />
    <main className='login-main'>
        <div className="login-hero">
          <section className="login-hero-left">
            <h2 className="login-hero-title">Shop Confidently â ? ? <br />
              accessible products for
            </h2>
            <p className="login-hero-subtitle">
              Accessibility-first ecommerce with thousands of keyboard-friendly, labeled <br/>products.
            </p>
            <div className="login-hero-actions">
              <button className="login-hero-btn-browse">
                Browse
              </button>
              <button className="login-hero-btn-sell">
                Sell
              </button>
            </div>

            <div className="login-stats">
              <div className="login-stats-item login-stats-item-bordered">
                <p className="login-stats-number">8K+</p>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="login-stats-item login-stats-item-bordered">
                <p className="login-stats-number">1.5K</p>
                <p className="text-gray-600">Vendors</p>
              </div>
              <div className="login-stats-item">
                <p className="login-stats-number">120K+</p>
                <p className="text-gray-600">Active shoppers</p>
              </div>
            </div>

          </section>

          <section className="login-hero-right">
            <ProductCard />
          </section>

        </div>

        <div className="Login-middle">
          Middle section for scrumbergs
        </div>

        <div className="Login-bottom">
          <div className="Login-bottom-left">
            <img 
              src={img1} 
              alt="Login bottom section left part image" 
              className="w-72"
            />
          </div>
          <div className="Login-bottom-right">
            <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
               Join our mailing list for accessibility 
               <br/>updates, early access to accessible 
              <br/> products, and practical shopping tips.      
            </h2>
            <div className="w-full mt-6 flex border border-gray-300 rounded-md overflow-hidden">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 outline-none">
            </input>
             <button type="Submit" className="bg-black text-white text-lg w-1/3 px-2 py-2 m-2">Subscribe</button>
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