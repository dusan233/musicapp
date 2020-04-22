import React, { useEffect } from "react";

import { connect } from "react-redux";

import { MainContainer } from "../../../sharedStyledComp/sharedStyledComp";
import SearchedNavigation from "../SearchedNavigation/SearchedNavigation";
import TrackComponent from "../../../components/TrackComponent/TrackComponent";
import * as actionCreator from "../../../store/index";
import Spinner from "../../../components/Spinner/Spinner";

const SearchedTracks = props => {
  const { match, getSearchTracks } = props;
  useEffect(() => {
    getSearchTracks(match.params.query);
    window.scrollTo(0, 0);
  }, [match, getSearchTracks]);

  return (
    <MainContainer>
      <SearchedNavigation query={props.match.params.query} />

      {props.fetchedTracks ? (
        props.fetchedTracks.map((song, i) => (
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
    fetchedTracks: state.search.tracks,

    currentSong: state.currentSong.currentSong,
    playing: state.currentSong.playing,
    currentPlaylist: state.currentSong.currentPlaylist,
    favoriteTracks: state.userData.favoriteTracks,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchTracks: query =>
      dispatch(actionCreator.fetchSearchedTracks(query)),
    sendCurrentSong: currentSong =>
      dispatch(actionCreator.sendCurrentSong(currentSong)),
    clearPlaylist: () => dispatch(actionCreator.clearLogicForPlaylist()),
    sendFavoriteTrack: (songData, songId, favTracks) =>
      dispatch(actionCreator.sendFavoriteTracks(songData, songId, favTracks)),
    getFavTracks: () => dispatch(actionCreator.getFavoriteTracks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedTracks);
