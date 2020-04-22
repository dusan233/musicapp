import React from "react";

import { NavigationContainer } from "./StyledComp";
import { NavLink } from "react-router-dom";

const SearchedNavigation = props => {
  const linkStyle = {
    color: "grey",
    padding: "15px 30px",
    borderRadius: 0,
    textDecoration: "none"
  };
  const activeLinkStyle = {
    color: "white",
    borderBottom: "2px solid #ef5466"
  };
  return (
    <NavigationContainer>
      <NavLink
        style={linkStyle}
        activeStyle={activeLinkStyle}
        to={{
          pathname: `/search/tracks/${props.query}`
        }}
      >
        Tracks
      </NavLink>
      <NavLink
        style={linkStyle}
        activeStyle={activeLinkStyle}
        to={{
          pathname: `/search/albums/${props.query}`
        }}
      >
        Albums
      </NavLink>
      <NavLink
        style={linkStyle}
        activeStyle={activeLinkStyle}
        to={{
          pathname: `/search/playlists/${props.query}`
        }}
      >
        Playlists
      </NavLink>
    </NavigationContainer>
  );
};

export default SearchedNavigation;
