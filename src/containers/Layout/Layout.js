import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import SearchBar from "../../components/SearchBar/SearchBar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { Switch, Route } from "react-router-dom";

import SearchedTracks from "../Search/SearchedTracks/SearchedTracks";
import SearchedAlbums from "../Search/SearchedAlbums/SearchedAlbums";
import SearchedPlaylists from "../Search/SearchedPlaylists/SearchedPlaylists";
import FavoriteTracks from "../FavoriteTracks/FavoriteTracks";
import FavoriteAlbums from "../FavoriteAlbums/FavoriteAlbums";
import FavoritePlaylists from "../FavoritePlaylists/FavoritePlaylists";

const Layout = props => {
  return (
    <React.Fragment>
      <Navigation />
      <SearchBar />
      <AudioPlayer />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search/tracks/:query" component={SearchedTracks} />
        <Route path="/search/albums/:query" component={SearchedAlbums} />
        <Route path="/search/playlists/:query" component={SearchedPlaylists} />
        <Route path="/favoritetracks" component={FavoriteTracks} />
        <Route path="/favoritealbums" component={FavoriteAlbums} />
        <Route path="/favoriteplaylists" component={FavoritePlaylists} />
      </Switch>
    </React.Fragment>
  );
};

export default Layout;
