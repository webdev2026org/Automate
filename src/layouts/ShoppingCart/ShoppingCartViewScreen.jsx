import Navbar from "../global/Navbar"
import Footer from "../global/Footer"

const ShoppingCartViewScreen = () => {

    const breadcrumbItems = [
        { label: 'Shop', path: '/products' },
        { label: 'Cart & Checkout', path: '/cart' }
    ];

  return (
    <div className="app-container flex flex-col h-full">
      <div className="nav-container flex-1">
        <Navbar
          pageIcon="cart"
          showSearchBar={false}
          showmenuOtions={false}
          breadcrumbItems={breadcrumbItems}
          showCartIcon={false}
          userIconType="user-icon-rounded"
        />

        <main className="container mx-auto px-4 py-8">
          Shopping Cart Screen
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ShoppingCartViewScreen