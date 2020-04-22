import React from "react";
import {
  TrackContainer,
  TrackName,
  ArtistName,
  AlbumName,
  TrackDuration,
  TrackRating,
  RatingLine,
  TrackCheckbox
} from "./StyledComp";
import {
  TrackButton,
  TrackButtonPlaying,
  ButtonOne
} from "../../sharedStyledComp/Buttons";
import { ButtowWrap, ButtonInfo } from "../../sharedStyledComp/Buttons";
import volumeGif from "../../assets/Img/dark.c610b4800820071e9b19f0542110499c.gif";

const TrackComponent = props => {
  let totalMinutes = Math.floor(props.duration / 60);
  let totalSeconds = (props.duration - totalMinutes * 60).toFixed(0);

  let rating = String(Math.floor(props.rating));
  let realRating = parseInt(rating.slice(0, 1));
  let playingButton = props.currentSongId === props.songId ? true : false;

  let ari = [];
  let liked = false;

  props.favTracks.forEach(track => {
    if (track.id === props.songId) {
      liked = true;
    }
  });

  const gimeAri = () => {
    for (let i = 1; i <= 10; i++) {
      if (i < realRating) {
        ari.push(<RatingLine key={i} color="white"></RatingLine>);
      } else {
        ari.push(<RatingLine key={i}></RatingLine>);
      }
    }
    return ari;
  };
  return (
    <TrackContainer
      style={{
        color:
          playingButton && props.playlist === null && props.playing && "#ef5466"
      }}
    >
      <div className="part1">
        <span className="number">{props.number}</span>

        <TrackButtonPlaying
          style={{
            display:
              playingButton &&
              props.playlist === null &&
              props.playing &&
              "block"
          }}
        >
          <img src={volumeGif} alt="" />
        </TrackButtonPlaying>

        <TrackButton
          style={{
            display: playingButton && !props.playing && "block"
          }}
          onClick={props.sendCurrentSong}
        >
          {playingButton && props.playlist === null && props.playing ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </TrackButton>

        <ButtowWrap>
          <ButtonInfo>
            {" "}
            {liked ? "Remove Favourites" : "Add To Favourites"}
          </ButtonInfo>
          <ButtonOne
            onClick={() => {
              if (!props.procesing) {
                props.sendFavTrack();
              }
            }}
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
        <TrackName>
          {props.songName.length > 20
            ? props.songName.slice(0, 30) + "..."
            : props.songName}
        </TrackName>
        <div className="playlistBtn">
          <ButtowWrap>
            <ButtonInfo>Add To Playlist</ButtonInfo>
            <ButtonOne fSize="15px" padding="5px 6px" mlr="0px 10px 0px 0px">
              <i className="fas fa-plus"></i>
            </ButtonOne>
          </ButtowWrap>
        </div>
      </div>
      <div className="part2">
        <ArtistName>{props.artist}</ArtistName>
      </div>
      <div className="part3">
        <AlbumName>
          {props.album.length > 20
            ? props.album.slice(0, 30) + "..."
            : props.album}
        </AlbumName>
      </div>
      <div className="part4">
        <TrackDuration>
          {totalMinutes < 10 ? "0" + totalMinutes : totalMinutes}:
          {totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}
        </TrackDuration>
      </div>
      <div className="part5">
        <TrackRating>{gimeAri()}</TrackRating>
        {props.checkbox ? <TrackCheckbox type="checkbox" /> : null}
      </div>
    </TrackContainer>
  );
};

export default TrackComponent;
