import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationContainer, Logo, NavList, NavItem } from "./StyledComp";
import { ButtonTwo } from "../../sharedStyledComp/Buttons";
import logo from "../../assets/Img/deezer_light.9a182cf4a440401242b64198cab2a217.png";

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Logo src={logo} />
      <NavList>
        <NavItem>
          <NavLink className="unactive" exact to="/" activeClassName="active">
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className="unactive"
            to="/favoritetracks"
            activeClassName="active"
          >
            Favourite Tracks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="unactive"
            to="/favoritealbums"
            activeClassName="active"
          >
            Favourite Albums
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="unactive"
            to="/favoriteplaylists"
            activeClassName="active"
          >
            Favourite Playlists
          </NavLink>
        </NavItem>
      </NavList>
    </NavigationContainer>
  );
};

export default Navigation;
