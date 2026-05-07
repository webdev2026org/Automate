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

        <div className="flex items-center gap-3">
          <button
            className="newProduct"
            onClick={onCreateClick}
          >
            + Create New Product
          </button>
          <button
            className="myProduct"
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
