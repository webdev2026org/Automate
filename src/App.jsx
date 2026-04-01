import React from 'react'
import Navbar from './layouts/global/Navbar'
import Footer from './layouts/global/Footer'
import ProductListViewScreen from './layouts/productLists/ProductListViewScreen'


function App() {
 
  return (
    <div className='app-container flex flex-col min-h-screen justify-between'>
   <Navbar />
   <ProductListViewScreen/>
   <Footer/>
    </div>
  )
}

export default App
