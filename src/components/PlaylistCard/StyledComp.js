import styled from "styled-components";

export const CardContainer = styled.div``;
export const ImgContainer = styled.div`
  position: relative;
  background: #1a1832;
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
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
`;
export const ActionList = styled.ul`
  position: absolute;
  list-style-type: none;
  width: 120px;
  justify-content: space-between;
  padding: 0 18px;
  align-items: center;
  height: 80px;
  display: flex;
  bottom: 0;
  z-index: 2;
`;
export const ActionItem = styled.li`
  position: relative;
`;
export const Caption = styled.div`
  padding: 5px 0;
`;
export const Heading1 = styled.div`
  color: white;
`;
export const Heading2 = styled.div`
  color: #808080;
  padding: 0px 0;
`;
