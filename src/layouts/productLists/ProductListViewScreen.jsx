import Navbar from "../global/Navbar";
import SubNavbar from "../global/SubNavbar";
import Footer from "../global/Footer";
import ProductFilter from "../productFilter/ProductFilter";
import { useEffect, useState } from "react";
import ItemCard from "../global/ItemCard";
import useDebounce from "../../hooks/useDebounce";
import apiService from "../../utils/apiService";
import Pagination from "../global/Pagination";
import "../../styles/ProductListViewScreen.css";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const debouncedValue = useDebounce(searchByValue, 500);

  const handleRating = (value, productId) => {
    console.log("Rated:", value, "Product:", productId);
  };

  // ✅ Reset page when filters/search/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [payload, selectedSortBy, debouncedValue]);

  const apiCall = async () => {
    try {
      // json-server --watch constants/productData.json --port 4500

      let productData = await apiService.get("product-list-data", {
        params: {
          brand: payload.brand,
          category: payload.category,
          maxPrice: payload.price[1],
          rating: payload.rating,
          searchValue: debouncedValue,
          sortBy: "",
          page: currentPage,
          limit: 10,
        },
      });

      console.log("Api Called : ", productData);

      setCardData(productData.data);
      setTotalPages(productData.pages);
    } catch (error) {
      console.error("Fetch Error :", error);
    }

    console.log("payload is", payload);
  };

  useEffect(() => {
    apiCall();
  }, [payload, selectedSortBy, debouncedValue, currentPage]);

  return (
    <div className="app-container">
      <div className="nav-container">
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

        <main className="flex items-stretch px-6 py-8 gap-6">
          <div className="filter">
            <ProductFilter setPayload={setPayload} />
          </div>

          <div className="product-cards-grid">
            {cardData?.map((item) => (
              <ItemCard key={item._id} {...item} onRate={handleRating} />
            ))}

            {/* Pagination */}
           <div className="pagination-wrapper">
             <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
           </div>
          </div>
        </main>
      </div>
      <Footer isLoggedIn={true} />
    </div>
  );
};

export default ProductListViewScreen;
