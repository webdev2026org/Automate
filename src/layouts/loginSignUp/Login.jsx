import Navbar from "../global/Navbar"
import Footer from "../global/Footer"
import LoginSignUpModal from "./LoginSignUpModal"
import { useState } from "react";
import ProductCard from "../productView/ProductCard"
import img1 from "../../assets/img1.png"
import "../../styles/login.css"
import Carousel from "../global/Carousel"

const Login = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    type: "", // login / signup
  });

   const handleLoginClose = () => {
    if(showLoginModal){
        setShowLoginModal(false);
    }
    }

  // Carousel slides data for the login page
  const carouselSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
      title: 'Shop with Confidence',
      description: 'Discover accessible products designed for everyone'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop',
      title: 'New Accessible Products',
      description: 'Latest additions to our inclusive product catalog'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
      title: 'Join Our Community',
      description: 'Connect with vendors and shoppers who care about accessibility'
    }
  ];

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

        <div className="login-middle">
          <Carousel slides={carouselSlides} />
        </div>

        <div className="login-bottom">
          <div className="login-bottom-left">
            <img 
              src={img1} 
              alt="Login bottom section left part image" 
            />
          </div>
          <div className="login-bottom-right">
            <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
               Join our mailing list for accessibility 
               <br/>updates, early access to accessible 
              <br/> products, and practical shopping tips.      
            </h2>
            <div className="subscribe-row">
            <input type="email" placeholder="Enter your email">
            </input>
             <button type="Submit">Subscribe</button>
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