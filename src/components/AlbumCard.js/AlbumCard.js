import React, { useEffect } from "react";

import {
  ImgContainer,
  CardImg,
  ActionList,
  ActionItem,
  Caption,
  Heading1,
  Heading2
} from "../PlaylistCard/StyledComp";

import { CardContainere } from "./StyledComp";

import { PlaylistButton } from "../../sharedStyledComp/Buttons";
import volumeGif from "../../assets/Img/dark.c610b4800820071e9b19f0542110499c.gif";

const PlaylistCard = props => {
  useEffect(() => {}, []);
  let send;
  if (
    (props.playlistId === props.currentPlaylistId && props.playing) ||
    (props.playlistId === props.currentPlaylistId && !props.playing)
  ) {
    send = props.playPause;
  } else {
    send = props.sendPlaylist;
  }

  let liked = false;
  if (props.favPlaylists) {
    props.favPlaylists.forEach(track => {
      if (track.id === props.playlistId) {
        liked = true;
      }
    });
  }

  return (
    <CardContainere>
      <ImgContainer>
        <CardImg
          style={{ minHeight: "160px" }}
          className="animated fadeIn delay-1s "
          src={props.img}
        />
        <ActionList>
          <ActionItem>
            <PlaylistButton onClick={send}>
              {props.playlistId === props.currentPlaylistId && props.playing ? (
                <img src={volumeGif} alt="" />
              ) : (
                <i className="fas fa-play"></i>
              )}
            </PlaylistButton>
          </ActionItem>
          <ActionItem>
            <PlaylistButton
              onClick={() => {
                if (!props.procesing) {
                  props.sendFavPlaylist();
                }
              }}
              opacity="0"
              visib="hidden"
            >
              {liked ? (
                <i style={{ color: "#CB4757" }} className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </PlaylistButton>
          </ActionItem>
        </ActionList>
      </ImgContainer>
      <Caption>
        <Heading1>{props.title}</Heading1>
        <Heading2></Heading2>
      </Caption>
    </CardContainere>
  );
};

export default PlaylistCard;
