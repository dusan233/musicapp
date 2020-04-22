import styled from "styled-components";

export const HeadingContainer = styled.div`
  background-color: #191c40;
  width: 77%;
  margin: 0 auto;
  padding: 40px;
  font-size: 18px;
  text-align: center;
  line-height: 2.1rem;
  margin-bottom: 60px;
  color: #8d8d99;
  h2 {
    text-align: center;
    margin-bottom: 25px;
    color: white;
    font-size: 30px;
  }
`;

export const MainPageSongContainer = styled.div`
  width: 100%;

  padding: 20px 10px;
  height: 350px;
  overflow: hidden;
  ::-webkit-scrollbar-thumb {
    background-color: #191c40;
    border-radius: 10px;
  }

  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;
