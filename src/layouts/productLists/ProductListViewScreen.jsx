import Navbar from "../global/Navbar";
import SubNavbar from "../global/SubNavbar";
import Footer from "../global/Footer";
import ProductFilter from "../productFilter/ProductFilter";
import { useEffect, useState } from "react";
import ItemCard from "../global/ItemCard";
import { ITEM_CARD_DATA } from "../../constants/itemCardData";

const ProductListViewScreen = () => {
  const [payload, setPayload] = useState({
    category: [],
    brand: [],
    rating: "",
    price: [25, 999],
  });

  const [selectedSortBy, setSelectedSortBy] = useState("Popularity");

  const apiCall = () => {
    console.log(payload, selectedSortBy);
  };

  useEffect(() => {
    apiCall();
  }, [payload, selectedSortBy]);

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
        <SubNavbar selectedSortBy={selectedSortBy} setSelectedSortBy={setSelectedSortBy} />

        <main className="flex items-stretch px-6 py-8 gap-6">
          <div className="filter w-80 bg-white self-stretch">
            <ProductFilter setPayload={setPayload} />
          </div>

          <div className="product-cards-grid w-full grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
            {ITEM_CARD_DATA.map((item, index) => (
              <ItemCard key={`item-card-${index}`} {...item} />
            ))}
          </div>
        </main>
      </div>
      <Footer 
      isLoggedIn={true}
      />
    </div>
  );
};

export default ProductListViewScreen;
