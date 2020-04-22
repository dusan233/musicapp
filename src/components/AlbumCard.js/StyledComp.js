import styled from "styled-components";

export const CardContainere = styled.div`
  width: 18%;
  min-height: 150px;

  margin: 1% 1%;
`;
export const ImgContainere = styled.div`
  position: relative;
  background: #1a1832;
  min-height: 200px;
  min-width: 200px;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: 0.2s;
    z-index: 1;
  }
  :hover::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
