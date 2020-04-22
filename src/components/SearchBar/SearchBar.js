import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import { SearchBarContainer, SearchInput, InputContainer } from "./StyledComp";

const SearchBar = props => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const submitSearch = e => {
    if (e.keyCode === 13) {
      props.history.push({
        pathname: `/search/tracks/${searchValue}`
      });
    }
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <SearchInput
          value={searchValue}
          onChange={changeSearchValue}
          onKeyDown={submitSearch}
          placeholder="Search"
        />
        <i className="fas fa-search"></i>
      </InputContainer>
    </SearchBarContainer>
  );
};

export default withRouter(SearchBar);
