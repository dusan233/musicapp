import React from "react";

import {
  CardContainer,
  ImgContainer,
  CardImg,
  ActionList,
  ActionItem,
  Caption,
  Heading1,
  Heading2
} from "./StyledComp";

import { PlaylistButton } from "../../sharedStyledComp/Buttons";
import volumeGif from "../../assets/Img/dark.c610b4800820071e9b19f0542110499c.gif";

const PlaylistCard = props => {
  let send;
  if (
    (props.playlistId === props.currentPlaylistId && props.playing) ||
    (props.playlistId === props.currentPlaylistId && !props.playing)
  ) {
    send = props.playPause;
  } else {
    send = props.sendPlaylist;
  }
  return (
    <CardContainer>
      <ImgContainer>
        <CardImg className="animated fadeIn delay-1s" src={props.img} />
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
        </ActionList>
      </ImgContainer>
      <Caption>
        <Heading1>{props.title}</Heading1>
        <Heading2></Heading2>
      </Caption>
    </CardContainer>
  );
};

export default PlaylistCard;
