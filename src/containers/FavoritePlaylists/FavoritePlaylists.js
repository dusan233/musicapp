import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/index";

import {
  MainContainer,
  HeadingTwo
} from "../../sharedStyledComp/sharedStyledComp";
import Spinner from "../../components/Spinner/Spinner";
import AlbumCard from "../../components/AlbumCard.js/AlbumCard";
import { CardsContainer } from "../Search/StyledComp";

const FavoritePlaylists = props => {
  const { getFavPlaylists } = props;
  useEffect(() => {
    getFavPlaylists();
  }, [getFavPlaylists]);
  return (
    <MainContainer>
      <HeadingTwo>
        {" "}
        {props.favoritePlaylists && props.favoritePlaylists.length} favorite
        playlists
      </HeadingTwo>
      <CardsContainer>
        {props.favoritePlaylists ? (
          props.favoritePlaylists.map((playlist, i) => (
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
          ))
        ) : (
          <Spinner />
        )}
      </CardsContainer>
    </MainContainer>
  );
};

const mapStateToProps = state => {
  return {
    currentPlaylistId: state.currentSong.currentPlaylistId,
    playing: state.currentSong.playing,
    favoritePlaylists: state.userData.favoritePlaylists,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
)(FavoritePlaylists);
