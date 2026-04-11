import Navbar from "../global/Navbar";
import SubNavbar from "../global/SubNavbar";
import Footer from "../global/Footer";
import ProductFilter from "../productFilter/ProductFilter";

const ProductListViewScreen = () => {
  return (
    <div className="app-container flex flex-col h-full">
      <div className="nav-container flex-1">
        <Navbar
          pageIcon="store"
          showSearchBar={true}
          showmenuOtions={true}
          breadcrumbItems={[]}
          showCartIcon={true}
          userIconType="user-icon"
        />
        <SubNavbar />

        <main className=" flex items-stretch px-4 py-8 gap-6">
        <div className="filter w-80 border border-gray-300 rounded-md bg-white self-stretch">
         <ProductFilter />
        </div>
       
        <div className="product-cards-grid w-full border-2 border-blue-500">
        my product card
        </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListViewScreen;
