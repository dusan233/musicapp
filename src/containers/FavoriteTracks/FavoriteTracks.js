import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/index";

import {
  MainContainer,
  HeadingTwo
} from "../../sharedStyledComp/sharedStyledComp";
import Spinner from "../../components/Spinner/Spinner";
import TrackComponent from "../../components/TrackComponent/TrackComponent";

const FavoriteTracks = props => {
  const { getFavTracks } = props;
  useEffect(() => {
    getFavTracks();
  }, [getFavTracks]);
  return (
    <MainContainer>
      <HeadingTwo>
        {props.favoriteTracks && props.favoriteTracks.length} favourite tracks
      </HeadingTwo>

      {props.favoriteTracks ? (
        props.favoriteTracks.map((song, i) => (
          <TrackComponent
            number={i + 1}
            key={i}
            songId={song.id}
            currentSongId={props.currentSong ? props.currentSong.id : null}
            playing={props.playing}
            playlist={props.currentPlaylist}
            songName={song.title}
            artist={song.artist.name}
            album={song.album.title}
            duration={song.duration}
            rating={song.rank}
            sendCurrentSong={() => {
              props.clearPlaylist();
              props.sendCurrentSong(song);
            }}
            sendFavTrack={() => {
              props.sendFavoriteTrack(song, song.id, props.favoriteTracks);
            }}
            favTracks={props.favoriteTracks ? props.favoriteTracks : []}
            procesing={props.procesing}
          />
        ))
      ) : (
        <Spinner />
      )}
    </MainContainer>
  );
};

const mapStateToProps = state => {
  return {
    currentSong: state.currentSong.currentSong,
    playing: state.currentSong.playing,
    currentPlaylist: state.currentSong.currentPlaylist,
    favoriteTracks: state.userData.favoriteTracks,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendCurrentSong: currentSong =>
      dispatch(actionCreator.sendCurrentSong(currentSong)),
    clearPlaylist: () => dispatch(actionCreator.clearLogicForPlaylist()),
    sendFavoriteTrack: (songData, songId, favTracks) =>
      dispatch(actionCreator.sendFavoriteTracks(songData, songId, favTracks)),
    getFavTracks: () => dispatch(actionCreator.getFavoriteTracks()),
    playPause: () => dispatch(actionCreator.playPause())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteTracks);
