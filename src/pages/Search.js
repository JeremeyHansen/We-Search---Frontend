function Search({setSearchTerm}) {
    return (
        <div className="search-Btn">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      );
    }


export default Search