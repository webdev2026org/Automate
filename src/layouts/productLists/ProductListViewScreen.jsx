import Navbar from "../global/Navbar";
import SubNavbar from "../global/SubNavbar";
import Footer from "../global/Footer";

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

        <main className="container mx-auto px-4 py-8">
          {" "}
          main container of List view
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListViewScreen;
