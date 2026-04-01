import Navbar from "../global/Navbar"
import Footer from "../global/Footer"

import Navbar from "../global/Navbar"
import Footer from "../global/Footer"


function Login() {
  return (
    <div className='app-container flex flex-col min-h-screen justify-between'>
   <Navbar 
   showSearchBar={false}
   showmenuOtions={false}
   breadcrumbItems={[]}
   showCartIcon={false}
   showLoginBtn={true}
   />
    <main className='container mx-auto px-4 py-8'> Login Page</main>
   <Footer/>
    </div>
  )
}

export default Login