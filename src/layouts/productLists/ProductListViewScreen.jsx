import Navbar from '../global/Navbar'
import Footer from '../global/Footer'  


const ProductListViewScreen = () => {

  return (
      <div className='app-container flex flex-col min-h-screen justify-between'>
   <Navbar 
   pageIcon='store'
   showSearchBar={true}
   showmenuOtions={false}
   breadcrumbItems={[]}
   showCartIcon={true}
   userIconType='user-icon'
   />
    <main className='container mx-auto px-4 py-8'> main container of List view</main>
   <Footer/>
    </div>
  )
}

export default ProductListViewScreen