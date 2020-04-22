import React, { useEffect } from "react";

import Spinner from "../../components/Spinner/Spinner";

import {
  MainContainer,
  HeadingOne,
} from "../../sharedStyledComp/sharedStyledComp";
import { connect } from "react-redux";
import { HeadingContainer, MainPageSongContainer } from "./StyledComp";
import { ButtonTwo } from "../../sharedStyledComp/Buttons";
import { TrackHead } from "../../components/TrackComponent/StyledComp";

import TrackComponent from "../../components/TrackComponent/TrackComponent";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";

import * as actionCreator from "../../store/index";

import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import "../../../node_modules/swiper/js/swiper.min.js";
import "../../../node_modules/swiper/js/swiper.js";

const HomePage = (props) => {
  const { getPopularPlaylists, getPopularSongs, getFavTracks } = props;
  useEffect(() => {
    getPopularSongs();
    getPopularPlaylists();
    getFavTracks();
    window.scrollTo(0, 0);

    new Swiper(".swiper-container", {
      observer: true,
      observeParents: true,
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,

      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, [getFavTracks, getPopularPlaylists, getPopularSongs]);
  return (
    <MainContainer>
      <HeadingContainer>
        <h2>Your life deserves its own soundtrack.</h2>
        With 56 million tracks, playlists and podcasts plus personalized
        recommendations just for you, Deezer is your music companion. A music
        player that always gives you the songs you love, and helps you discover
        your next favorites. You bring the passion, we bring the music.We let
        you record and upload your own audio right through the app.
        <ButtonTwo margin="30px auto 0 auto">
          <a href="https://www.deezer.com/us/" target="_blank">
            Visit Deezer
          </a>
        </ButtonTwo>
      </HeadingContainer>
      <HeadingOne>Popular Tracks</HeadingOne>
      <TrackHead>
        <div className="number">
          # <span>Track</span>
        </div>
        <div className="songname">Artist</div>
        <div className="name">Album</div>
        <div className="album">Duration</div>
        <div className="rating"></div>
      </TrackHead>
      <MainPageSongContainer>
        {props.popularSongs ? (
          props.popularSongs.map((song, i) => {
            return (
              <TrackComponent
                number={i + 1}
                key={i}
                songId={song.id}
                img={song.album.cover_small}
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
            );
          })
        ) : (
          <Spinner />
        )}
      </MainPageSongContainer>
      <HeadingOne>Popular Lists</HeadingOne>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {props.popularPlaylists ? (
            props.popularPlaylists.map((playlist, i) => {
              return (
                <div key={i} className="swiper-slide">
                  <PlaylistCard
                    playlistId={playlist.id}
                    currentPlaylistId={props.currentPlaylistId}
                    playing={props.playing}
                    title={playlist.title}
                    img={playlist.picture_medium}
                    sendPlaylist={() => {
                      props.sendCurrentPlaylist(playlist.id);
                    }}
                    playPause={props.playPause}
                  />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    popularSongs: state.main.popularSongs,
    popularPlaylists: state.main.popularPlaylists,
    currentSong: state.currentSong.currentSong,
    playing: state.currentSong.playing,
    currentPlaylist: state.currentSong.currentPlaylist,
    currentPlaylistSongIndex: state.currentSong.currentPlaylistSongIndex,
    currentPlaylistId: state.currentSong.currentPlaylistId,
    favoriteTracks: state.userData.favoriteTracks,
    procesing: state.userData.procesing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularSongs: () => dispatch(actionCreator.fetchPopularSongs()),
    getPopularPlaylists: () => dispatch(actionCreator.fetchPopularPlaylists()),
    sendCurrentSong: (currentSong) =>
      dispatch(actionCreator.sendCurrentSong(currentSong)),
    sendCurrentPlaylist: (currentPlaylist) =>
      dispatch(actionCreator.sendCurrentPlaylist(currentPlaylist)),
    clearPlaylist: () => dispatch(actionCreator.clearLogicForPlaylist()),
    playPause: () => dispatch(actionCreator.playPause()),
    sendFavoriteTrack: (songData, songId, favTracks) =>
      dispatch(actionCreator.sendFavoriteTracks(songData, songId, favTracks)),
    getFavTracks: () => dispatch(actionCreator.getFavoriteTracks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
