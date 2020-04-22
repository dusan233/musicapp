import styled from "styled-components";

export const TrackContainer = styled.div`
  padding: 13px 30px;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.2s;
  position: relative;
  display: flex;

  :hover {
    background-color: #191922;
  }

  .number {
    margin-right: 20px;
    width: 30px;
    text-align: center;
    display: inline-block;
  }
  .part1 {
    flex: 2.5;
    padding-right: 20px;
    align-items: center;
    .playlistBtn {
      float: right;
    }
    .dfk {
      position: relative;
      background-color: red;

      img {
        width: 5%;
        height: 100%;
        bottom: 0;
      }
    }
  }
  .part2 {
    flex: 1.5;
  }
  .part3 {
    flex: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .part4 {
    flex: 0.3;
  }
  .part5 {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
`;
export const TrackName = styled.p`
  font-size: 15px;
  display: inline;
  margin-left: 20px;
  transition: 0.2s;
  :hover {
    color: #ef5466;
  }
`;
export const ImgCont = styled.div``;
export const ArtistName = styled(TrackName)``;
export const AlbumName = styled(TrackName)``;
export const TrackDuration = styled.span`
  color: #808080;
  font-size: 15px;
  margin-left: 20px;
`;
export const TrackRating = styled.div`
  display: flex;
  background: transparent;
  height: 100%;
  width: 30px;
  align-items: center;
`;
export const RatingLine = styled.span`
  width: 10%;
  display: inline-block;
  margin: 0 4%;
  height: 60%;
  background: ${props => props.color || "#808080"};
`;
export const TrackCheckbox = styled.input`
  -webkit-appearance: none;
  position: relative;
  color: red;
  width: 17px;
  height: 17px;
  border-radius: 2px;
  outline: 0;
  border: 1px solid #808080;
  transition: 0.2s;
  margin-left: 20px;
  ::before {
    content: "";
    position: absolute;
    visibility: hidden;
    width: 1px;
    height: 9px;
    transform: rotate(45deg);
    left: 9px;
    top: 2px;
    background: white;
  }
  ::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 4px;
    transform: rotate(-45deg);
    background: white;
    top: 6px;
    left: 4px;
    visibility: hidden;
  }
  :checked::after {
    visibility: visible;
  }
  :checked::before {
    visibility: visible;
  }

  :checked {
    background-color: #ef5466;
    border: 1px solid #ef5466;
  }
`;
export const TrackHead = styled.div`
  padding: 13px 30px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.2s;
  margin: 20px 0;
  position: relative;
  display: flex;
  :hover {
    background-color: #191922;
  }
  .number {
    flex: 2.5;
    padding-left: 20px;
    span {
      margin-left: 80px;
    }
  }
  .songname {
    flex: 1.5;
    padding-left: 25px;
  }
  .name {
    flex: 2;
  }
  .rating {
    flex: 1;
  }
  .album {
    flex: 0.3;
  }
`;
