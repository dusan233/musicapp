import styled from "styled-components";

export const AudioContainer = styled.div`
  display: flex;
  transform: ${props => (props.show ? "translateY(0)" : "translateY(100%)")};
  justify-content: space-between;
  background-color: #212544;
  position: fixed;
  transition: 0.3s;
  width: 100%;
  bottom: 0;
  padding: 18px;
  z-index: 100;
`;

export const Controls = styled.div``;
export const InfoSeeker = styled.div`
  width: 48%;
  div {
    display: flex;
  }
  .wrap {
    padding-right: 47px;
  }
`;
export const Options = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  .wrape {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p {
      color: white;
    }
  }
  .wrape:nth-child(2) {
    border-left: 2px solid #8d8d99;
  }
`;

export const SongName = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 8px;
  margin-left: 60px;
  width: 100%;
`;
export const CurrentTimer = styled.span`
  color: #8d8d99;
  font-size: 11px;
  margin: 0 15px;
`;
export const DurationTime = styled(CurrentTimer)``;

export const SeekSlider = styled.input`
  width: 100%;
  margin: 0;
  cursor: pointer;
`;
export const SlideContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const SlideBar = styled.span`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 6px;
  width: ${props => props.width};
  height: 4px;
  background-color: #cb4757;
`;

export const VolumeSlider = styled(SeekSlider)`
  margin-bottom: 0;
`;
export const SongImg = styled.img`
  width: 30%;
  display: block;
  margin-right: 30px;
`;
