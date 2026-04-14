import Navbar from "../global/Navbar";
import SubNavbar from "../global/SubNavbar";
import Footer from "../global/Footer";
import ProductFilter from "../productFilter/ProductFilter";
import { useEffect, useState } from "react";
import ItemCard from "../global/ItemCard";
import { ITEM_CARD_DATA } from "../../constants/itemCardData";
import useDebounce from "../../hooks/useDebounce";

const ProductListViewScreen = () => {


  const [payload, setPayload] = useState({
    category: [],
    brand: [],
    rating: "",
    price: [25, 999],
  });
  const [searchByValue, setSearchByValue] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("Popularity");

  const debouncedValue = useDebounce(searchByValue, 500);

  const apiCall = () => {
    console.log(payload, selectedSortBy, debouncedValue);
  };

  useEffect(() => {
      if (debouncedValue.trim() === "") return;
    apiCall();
  }, [payload, selectedSortBy, debouncedValue]);

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
          setSearchByValue={setSearchByValue}
        />
        <SubNavbar
          selectedSortBy={selectedSortBy}
          setSelectedSortBy={setSelectedSortBy}
        />

        <main className=" flex items-stretch px-4 py-8 gap-6">
          <div className="filter w-80 border border-gray-300 rounded-md bg-white self-stretch">
            <ProductFilter

              setPayload={setPayload}
            />
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
