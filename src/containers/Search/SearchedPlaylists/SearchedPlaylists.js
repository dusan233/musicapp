import React, { useEffect } from "react";

import { connect } from "react-redux";

import { MainContainer } from "../../../sharedStyledComp/sharedStyledComp";
import SearchedNavigation from "../SearchedNavigation/SearchedNavigation";

import * as actionCreator from "../../../store/index";
import { CardsContainer } from "../StyledComp";
import AlbumCard from "../../../components/AlbumCard.js/AlbumCard";
import Spinner from "../../../components/Spinner/Spinner";

const SearchedPlaylists = props => {
  const { getSearchPlaylists, getFavPlaylists, match } = props;
  useEffect(() => {
    getSearchPlaylists(match.params.query);
    getFavPlaylists();
    window.scrollTo(0, 0);
  }, [getSearchPlaylists, getFavPlaylists, match]);
  return (
    <MainContainer>
      <SearchedNavigation query={props.match.params.query} />
      <CardsContainer>
        {props.fetchedPlaylists ? (
          props.fetchedPlaylists.map((playlist, i) => {
            return (
              <AlbumCard
                key={i}
                playlistId={playlist.id}
                currentPlaylistId={props.currentPlaylistId}
                playing={props.playing}
                title={playlist.title}
                img={playlist.picture_medium || playlist.cover_medium}
                sendPlaylist={() => {
                  props.sendCurrentPlaylist(playlist.id);
                }}
                playPause={props.playPause}
                sendFavPlaylist={() => {
                  props.sendFavoritePlaylist(
                    playlist,
                    playlist.id,
                    props.favoritePlaylists
                  );
                }}
                favPlaylists={
                  props.favoritePlaylists ? props.favoritePlaylists : []
                }
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
    fetchedPlaylists: state.search.playlists,
    currentPlaylistId: state.currentSong.currentPlaylistId,
    playing: state.currentSong.playing,
    favoritePlaylists: state.userData.favoritePlaylists,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchPlaylists: query =>
      dispatch(actionCreator.fetchSearchedPlaylists(query)),
    sendCurrentSong: currentSong =>
      dispatch(actionCreator.sendCurrentSong(currentSong)),
    clearPlaylist: () => dispatch(actionCreator.clearLogicForPlaylist()),
    playPause: () => dispatch(actionCreator.playPause()),
    sendCurrentPlaylist: currentPlaylist =>
      dispatch(actionCreator.sendCurrentPlaylistReal(currentPlaylist)),
    sendFavoritePlaylist: (playlistData, playlistId, favPlaylists) =>
      dispatch(
        actionCreator.sendFavoritePlaylists(
          playlistData,
          playlistId,
          favPlaylists
        )
      ),
    getFavPlaylists: () => dispatch(actionCreator.getFavoritePlaylists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedPlaylists);
