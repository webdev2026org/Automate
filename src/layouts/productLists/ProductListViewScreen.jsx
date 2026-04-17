import Navbar from "../global/Navbar";
import SubNavbar from "../global/SubNavbar";
import Footer from "../global/Footer";
import ProductFilter from "../productFilter/ProductFilter";
import { useEffect, useState } from "react";
import ItemCard from "../global/ItemCard";
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

  const [cardData, setCardData] = useState([]);

  const debouncedValue = useDebounce(searchByValue, 500);

  const handleRating = (value, productId) => {
  console.log("Rated:", value, "Product:", productId);

};

  const apiCall = async () => {
    try {
      // json-server --watch constants/productData.json --port 4500
      const response = await fetch(`http://localhost:4500/productData`)
      let productData = await response.json()

      console.log("First item keys:", productData[0]);
      console.log("Debounced search value:", debouncedValue);
      if(debouncedValue.trim()) {
        productData = productData.filter((item) => (
          item.title.toLowerCase().includes(debouncedValue.toLowerCase())
        ));
      }

      console.log("Api Called : ", productData);
      setCardData(productData);
    } catch (error) {
      console.error("Fetch Error :", error);
    }
    //console.log(payload, selectedSortBy, debouncedValue);

  };

  useEffect(() => {
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
        <SubNavbar selectedSortBy={selectedSortBy} setSelectedSortBy={setSelectedSortBy} />

        <main className="flex items-stretch px-6 py-8 gap-6">
          <div className="filter w-80 bg-white self-stretch">
            <ProductFilter setPayload={setPayload} />
          </div>

          <div className="product-cards-grid w-full grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((item) => (
              <ItemCard key={item.id} 
              {...item} 
              onRate={handleRating}
              />
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
