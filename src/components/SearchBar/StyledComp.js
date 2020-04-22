import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin-left: 235px;
  background-color: #130f23;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 10px 0;
  i {
    color: #8d8d99;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(0, -50%);
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: 0;

  font-size: 1.2rem;
  color: #8d8d99;
  padding: 0 60px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 500px;
  padding: 10px;
  margin-left: 50%;
  transform: translateX(-75%);
  background: #212544;
  border-radius: 50px;
`;
