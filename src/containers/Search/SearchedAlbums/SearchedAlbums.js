import React, { useEffect } from "react";

import lozad from "lozad";

import { connect } from "react-redux";

import { MainContainer } from "../../../sharedStyledComp/sharedStyledComp";
import SearchedNavigation from "../SearchedNavigation/SearchedNavigation";

import * as actionCreator from "../../../store/index";
import { CardsContainer } from "../StyledComp";
import AlbumCard from "../../../components/AlbumCard.js/AlbumCard";
import Spinner from "../../../components/Spinner/Spinner";

const SearchedAlbums = props => {
  const { getSearchAlbums, getFavAlbums, match } = props;
  useEffect(() => {
    getSearchAlbums(match.params.query);
    window.scrollTo(0, 0);
    getFavAlbums();
    const observer = lozad();
    observer.observe();
  }, [getSearchAlbums, getFavAlbums, match]);
  return (
    <MainContainer>
      <SearchedNavigation query={props.match.params.query} />
      <CardsContainer>
        {props.fetchedAlbums ? (
          props.fetchedAlbums.map((playlist, i) => {
            return (
              <AlbumCard
                key={i}
                playlistId={playlist.id}
                currentPlaylistId={props.currentPlaylistId}
                playing={props.playing}
                title={playlist.title}
                img={playlist.picture_medium || playlist.cover_medium}
                sendPlaylist={() => {
                  props.sendCurrentAlbum(playlist.id);
                }}
                playPause={props.playPause}
                sendFavPlaylist={() => {
                  props.sendFavoriteAlbums(
                    playlist,
                    playlist.id,
                    props.favoriteAlbums
                  );
                }}
                favPlaylists={props.favoriteAlbums ? props.favoriteAlbums : []}
                procesing={props.procesing}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </CardsContainer>
    </MainContainer>
  );
};

const mapStateToProps = state => {
  return {
    fetchedAlbums: state.search.albums,
    currentPlaylistId: state.currentSong.currentPlaylistId,
    playing: state.currentSong.playing,
    favoriteAlbums: state.userData.favoriteAlbums,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchAlbums: query =>
      dispatch(actionCreator.fetchSearchedAlbums(query)),
    sendCurrentSong: currentSong =>
      dispatch(actionCreator.sendCurrentSong(currentSong)),
    clearPlaylist: () => dispatch(actionCreator.clearLogicForPlaylist()),
    playPause: () => dispatch(actionCreator.playPause()),
    sendCurrentAlbum: currentPlaylist =>
      dispatch(actionCreator.sendCurrentAlbum(currentPlaylist)),
    sendFavoriteAlbums: (albumData, albumId, favAlbums) =>
      dispatch(actionCreator.sendFavoriteAlbums(albumData, albumId, favAlbums)),
    getFavAlbums: () => dispatch(actionCreator.getFavoriteAlbums())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedAlbums);
