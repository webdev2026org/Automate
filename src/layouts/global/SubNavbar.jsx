import Dropdown from "../global/Dropdown";

const SubNavbar = ({selectedSortBy, setSelectedSortBy}) => {

  return (
    <nav className="subNavbar">
      <div className="subNavbar-left-section">
        {/* View-Mode */}
        <div className="viewMode">
          <input type="button" className="bg-transparent border-none" value="Grid" />
          <input type="button" className="bg-transparent border-none" value="List" />
        </div>

        {/* Text Size  */}

        <div class="textSize">
          <span>Text size</span>
          <label>
            <input type="radio" className="w-4 h-4" name="textSize" value="S" />S
          </label>
          <label>
            <input type="radio" className="w-4 h-4" name="textSize" value="M" />M
          </label>
          <label>
            <input type="radio" className="w-4 h-4" name="textSize" value="L" />L
          </label>
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
