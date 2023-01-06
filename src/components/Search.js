import React from "react";

function Search({search, onSearch}) {

  function handleOnSearch(event){
     onSearch(event.target.value);
     console.log(search)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        // onChange={(e) => console.log("Searching...")}
        onChange={handleOnSearch}

      />
    </div>
  );
}

export default Search;
