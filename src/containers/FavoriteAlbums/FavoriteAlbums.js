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

const FavoriteAlbums = props => {
  const { getFavAlbums } = props;
  useEffect(() => {
    getFavAlbums();
  }, [getFavAlbums]);
  return (
    <MainContainer>
      <HeadingTwo>
        {" "}
        {props.favoriteAlbums && props.favoriteAlbums.length} favourite albums
      </HeadingTwo>
      <CardsContainer>
        {props.favoriteAlbums ? (
          props.favoriteAlbums.map((playlist, i) => (
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
    favoriteAlbums: state.userData.favoriteAlbums,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
)(FavoriteAlbums);
