import React, { useState, useEffect } from "react";

import * as actionCreator from "../../store/index";
import { connect } from "react-redux";

import {
  AudioContainer,
  InfoSeeker,
  Options,
  Controls,
  SongName,
  DurationTime,
  CurrentTimer,
  SeekSlider,
  SongImg,
  SlideContainer,
  SlideBar,
  VolumeSlider
} from "./StyledComp";
import {
  ButtonOne,
  ButtowWrap,
  SoundContainer,
  ButtonInfo
} from "../../sharedStyledComp/Buttons";

const audio = new Audio();

const AudioPlayer = props => {
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [progress, setProgress] = useState(0);

  const [loopSong, setLoopSong] = useState(false);
  const [muted, setMute] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(null);

  const {
    playingSong,
    playing,
    nextPlaylistSongIndex,
    currentPlaylist,
    getFavTracks
  } = props;

  useEffect(() => {
    audio.src = playingSong ? playingSong.preview : null;
    if (playingSong) {
      audio.play();
      props.play();
    }
    getFavTracks();

    audio.ontimeupdate = function() {
      let totalMinutes = Math.floor(audio.duration / 60);
      let totalSeconds = (audio.duration - totalMinutes * 60).toFixed(0);
      let currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = (audio.currentTime - currentMinutes * 60).toFixed(0);

      let progressBar = (100 * audio.currentTime) / audio.duration;

      setTotalMinutes(totalMinutes);
      setTotalSeconds(totalSeconds);
      setCurrentMinutes(currentMinutes);
      setCurrentSeconds(currentSeconds);
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);

      setProgress(progressBar);
    };
  }, [playingSong, getFavTracks]);

  useEffect(() => {
    audio.onended = function() {
      if (props.currentPlaylist) {
        if (props.nextPlaylistSongIndex < props.currentPlaylist.length) {
          let songIndex = props.nextPlaylistSongIndex;

          props.sendCurrentSong(props.currentPlaylist[songIndex]);
          props.upNextCurSongIndex();
          props.upPrevCurSongIndex();
        } else {
          if (!loopSong) {
            props.playPause();
          }
        }
      } else {
        if (!loopSong) {
          props.playPause();
        }
      }
    };
  }, [nextPlaylistSongIndex]);

  useEffect(() => {
    audio.loop = loopSong;
  }, [loopSong]);

  useEffect(() => {
    if (props.playing) {
      props.play();
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  const playPause = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    props.playPause();
  };

  const loop = () => {
    setLoopSong(prevState => !prevState);
  };

  const seek = e => {
    if (seeking) {
      audio.currentTime = e.target.value;
    }
  };
  const changeVolume = e => {
    audio.volume = e.target.value / 100;
  };

  const mute = () => {
    if (muted) {
      setMute(false);
      audio.muted = false;
      audio.volume = currentVolume;
    } else {
      setMute(true);
      audio.muted = true;
      setCurrentVolume(audio.volume);
      audio.volume = 0;
    }
  };

  const nextPlaylistSong = () => {
    if (
      props.currentPlaylist &&
      props.nextPlaylistSongIndex < props.currentPlaylist.length
    ) {
      if (audio.loop) {
        audio.currentTime = 0;
      } else {
        props.sendCurrentSong(
          props.currentPlaylist[props.nextPlaylistSongIndex]
        );
        props.upNextCurSongIndex();
        props.upPrevCurSongIndex();
      }
    } else {
      audio.currentTime = 0;
    }
  };

  const prevPlayingSong = () => {
    if (props.currentPlaylist && props.prevPlaylistSongIndex >= 0) {
      if (audio.loop) {
        audio.currentTime = 0;
      } else {
        props.sendCurrentSong(
          props.currentPlaylist[props.prevPlaylistSongIndex]
        );
        props.downNextCurSongIndex();
        props.downPrevCurSongIndex();
      }
    } else {
      audio.currentTime = 0;
    }
  };

  const sendFavTrack = () => {
    if (!props.procesing) {
      props.sendFavoriteTrack(
        props.playingSong,
        props.playingSong.id,
        props.favoriteTracks
      );
    }
  };
  let liked = false;

  if (props.favoriteTracks && props.playingSong) {
    props.favoriteTracks.forEach(track => {
      if (track.id === props.playingSong.id) {
        liked = true;
      }
    });
  }

  return (
    <AudioContainer show={props.showAudio}>
      <Controls>
        <ButtonOne
          disabled={!currentPlaylist}
          onClick={prevPlayingSong}
          fSize="20px"
          padding="8px"
        >
          <i className="fas fa-step-backward"></i>
        </ButtonOne>
        <ButtonOne
          onClick={playPause}
          fSize="24px"
          mlr="0px 17px"
          padding="11px"
        >
          {props.playing ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </ButtonOne>
        <ButtonOne
          onClick={nextPlaylistSong}
          fSize="20px"
          padding="8px"
          disabled={!currentPlaylist}
        >
          <i className="fas fa-step-forward"></i>
        </ButtonOne>
      </Controls>
      <InfoSeeker>
        <div className="wrap">
          <SongName>
            {props.playingSong ? props.playingSong.title : null}
          </SongName>
          <ButtowWrap>
            <ButtonInfo>
              <p>Add To Playlist</p>
            </ButtonInfo>
            <ButtonOne fSize="15px" padding="5px 6px" mlr="0px 10px 0px 0px">
              <i className="fas fa-plus"></i>
            </ButtonOne>
          </ButtowWrap>
          <ButtowWrap>
            <ButtonInfo>
              <p> {liked ? "Remove Favourites" : "Add To Favourites"} </p>
            </ButtonInfo>
            <ButtonOne
              onClick={sendFavTrack}
              fSize="15px"
              padding="5px 6px"
              mlr="0px 10px 0px 0px"
            >
              {liked ? (
                <i style={{ color: "#CB4757" }} className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </ButtonOne>
          </ButtowWrap>
        </div>
        <div>
          <CurrentTimer>
            {currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}:
            {currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}
          </CurrentTimer>
          <SlideContainer>
            <SlideBar width={progress + "%"} className="slidebar"></SlideBar>
            <SeekSlider
              type="range"
              className="rangeSlider"
              onMouseDown={e => {
                setSeeking(true);
                seek(e);
              }}
              onMouseMove={e => seek(e)}
              onMouseUp={() => setSeeking(false)}
              onChange={e => seek(e)}
              min="0"
              max={duration || "00:00"}
              value={currentTime}
            />
          </SlideContainer>
          <DurationTime>
            {totalMinutes < 10 ? "0" + totalMinutes : totalMinutes}:
            {totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}
          </DurationTime>
        </div>
      </InfoSeeker>
      <Options>
        <div className="wrape">
          <ButtowWrap>
            <ButtonInfo>
              <p>Turn on repeat</p>
            </ButtonInfo>
            <ButtonOne
              onClick={loop}
              fSize="18px"
              padding="4px 5px 0 5px"
              mlr="0px 10px 0px 0px"
            >
              <i
                style={{ color: loopSong ? "#ef5466" : "white" }}
                className="small material-icons "
              >
                autorenew
              </i>
            </ButtonOne>
          </ButtowWrap>
          <ButtowWrap>
            <SoundContainer>
              <VolumeSlider
                onChange={e => changeVolume(e)}
                onMouseMove={e => changeVolume(e)}
                type="range"
                min="0"
                max="100"
                value={audio.volume * 100}
                step="1"
              />
            </SoundContainer>
            <ButtonOne onClick={mute} fSize="18px" padding="4px 5px 0 5px">
              {muted ? (
                <i className="fas fa-volume-mute"></i>
              ) : (
                <i className="material-icons">volume_up</i>
              )}
            </ButtonOne>
          </ButtowWrap>
        </div>
        <div className="wrape">
          <SongImg
            src={
              props.playingSong && props.playingSong.album
                ? props.playingSong.album.cover_small
                : null
            }
          />
          <p>Queue</p>
        </div>
      </Options>
    </AudioContainer>
  );
};

const mapStateToProps = state => {
  return {
    playingSong: state.currentSong.currentSong,
    playing: state.currentSong.playing,
    showAudio: state.currentSong.showAudio,
    currentPlaylist: state.currentSong.currentPlaylist,
    nextPlaylistSongIndex: state.currentSong.nextPlaylistSongIndex,
    prevPlaylistSongIndex: state.currentSong.prevPlaylistSongIndex,
    favoriteTracks: state.userData.favoriteTracks,
    procesing: state.userData.procesing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendCurrentSong: currentSong =>
      dispatch(actionCreator.sendCurrentSong(currentSong)),
    playPause: () => dispatch(actionCreator.playPause()),
    play: () => dispatch(actionCreator.play()),
    upNextCurSongIndex: () =>
      dispatch(actionCreator.nextCurrentPlaylistSongIndex()),
    upPrevCurSongIndex: () =>
      dispatch(actionCreator.prevCurrentPlaylistSongIndex()),
    downNextCurSongIndex: () =>
      dispatch(actionCreator.minusNextCurrentPlaylistSongIndex()),
    downPrevCurSongIndex: () =>
      dispatch(actionCreator.minusPrevCurrentPlaylistSongIndex()),
    sendFavoriteTrack: (songData, songId, favTracks) =>
      dispatch(actionCreator.sendFavoriteTracks(songData, songId, favTracks)),
    getFavTracks: () => dispatch(actionCreator.getFavoriteTracks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
