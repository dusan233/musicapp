import styled from "styled-components";
import { TrackContainer } from "../components/TrackComponent/StyledComp";
import { ImgContainer } from "../components/PlaylistCard/StyledComp";
import { ImgContainere } from "../components/AlbumCard.js/StyledComp";

export const ButtonOne = styled.button`
  background-color: transparent;
  border-radius: 50%;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.mlr};
  cursor: pointer;
  transition: 0.3s;
  :disabled {
    i {
      color: rgba(255, 255, 255, 0.1);
    }
  }
  :hover {
    background-color: #32323d;
  }
  i {
    font-size: ${(props) => props.fSize};
    color: white;
  }
  border: 0;
  outline: 0;
`;
export const ButtowWrap = styled.div`
  position: relative;
  display: inline;
  padding: 0;
  border: none;
`;
export const SoundContainer = styled.div`
  background-color: #32323d;
  padding: 10px 20px;
  position: absolute;
  width: 200px;
  top: -130%;
  visibility: hidden;
  opacity: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;

  ::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #32323d;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  ::after {
    content: "";
    position: absolute;
    width: 100px;
    bottom: -30%;
    left: 50%;
    height: 20px;
    z-index: -1;
    background-color: none;
    transform: translateX(-50%);
  }
  ${ButtowWrap}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const ButtonInfo = styled.div`
  background-color: #32323d;
  padding: 5px 5px;
  box-sizing: content-box;
  position: absolute;
  top: -30%;
  visibility: hidden;
  opacity: 0;
  min-width: 90px;
  text-align: center;
  left: 40%;
  transform: translate(-50%, -50%);

  color: white;
  font-size: 10px;
  p {
    width: 100%;
    text-align: center;
  }
  ::before {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: #32323d;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  ${ButtowWrap}:hover & {
    transition: 0.2s;
    visibility: visible;
    opacity: 1;
    top: -100%;
  }
`;

export const ButtonTwo = styled.button`
  border: 0;
  outline: 0;
  margin: ${(props) => props.margin};
  padding: 10px 20px;
  min-width: 130px;
  background-color: #ef5466;
  color: white;
  display: block;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: #cb4757;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export const TrackButton = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
  text-align: center;
  padding: 6px 8px;
  border-radius: 50%;
  display: none;
  font-size: 12px;
  position: absolute;
  top: 50%;
  z-index: 2;
  left: 32px;
  transform: translateY(-50%);
  cursor: pointer;
  ${TrackContainer}:hover & {
    display: block;
  }
`;
export const TrackButtonPlaying = styled(TrackButton)`
  z-index: 1;
`;

export const PlaylistButton = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
  text-align: center;
  padding: 8px 10px;
  border-radius: 50%;
  visibility: ${(props) => props.visib};
  opacity: ${(props) => props.opacity};
  font-size: 15px;
  transition: 0.2s;
  z-index: 2;
  left: 32px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  ${ImgContainer || ImgContainere}:hover & {
    visibility: visible;
    opacity: 1;
  }
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
