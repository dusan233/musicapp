import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  margin-left: 235px;
  margin-top: 65px;
  padding: 30px 100px 100px 100px;
  color: white;

  background-color: #130f23;
`;

export const HeadingOne = styled.h3`
  color: white;
  transition: 0.2s;
  display: inline-block;
  margin-top: 40px;
  :hover {
    color: #ef5466;
  }

  ::after {
    font-family: "FontAwesome";
    margin-left: 10px;
    font-size: 20px;
    transition: margin 0.2s;
    content: "\f054";
  }
  :hover::after {
    margin-left: 25px;
  }
`;

export const HeadingTwo = styled.h1`
  color: white;
  margin: 30px 0;
`;
