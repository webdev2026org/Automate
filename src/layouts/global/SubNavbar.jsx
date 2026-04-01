
const SubNavbar = () => {
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
            <input type="radio" name="textSize" value="S" />S
          </label>
          <label>
            <input type="radio" name="textSize" value="M" />M
          </label>
          <label>
            <input type="radio" name="textSize" value="L" />L
          </label>
        </div>
      </div>

      {/* Sort By */}

      <div className="sortBy">
        <label for="sort">Sort by</label>
        <select id="sort">
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </nav>
  );
};

export default SubNavbar;
