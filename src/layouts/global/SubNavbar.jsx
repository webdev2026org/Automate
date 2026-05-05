import Dropdown from "../global/Dropdown";

const SubNavbar = ({
  selectedSortBy,
  setSelectedSortBy,
  onCreateClick,
  onMyProductsClick
}) => {

  return (
    <nav className="subNavbar">
      <div className="subNavbar-left-section">
        {/* View-Mode */}
        <div className="viewMode">
          <input type="button" className="Grid-view bg-transparent border-none" value="Grid" />
          <input type="button" className="List-View bg-transparent border-none" value="List" />
        </div>

        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
            onClick={onCreateClick}
          >
            + Create New Product
          </button>
          <button
            className="px-3 py-1 rounded-md border border-blue-500 text-blue-500 text-sm font-medium hover:bg-blue-50 transition cursor-pointer"
            onClick={onMyProductsClick}
          >
            My Products
          </button>
        </div>

      </div>

      {/* Sort By */}

      <div className="sortBy">
        <Dropdown
          label="Sort by"
          options={["Relevance", "Date", "Popularity"]}
          defaultValue={selectedSortBy}
          onChange={(value) => setSelectedSortBy(value)}
        />
      </div>
    </nav>
  );
};

export default SubNavbar;
