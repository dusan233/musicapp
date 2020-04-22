import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 235px;
  height: 100vh;
  background-color: #1a1832;
  transition: 0.3s;
  position: fixed;
  top: 0;
  padding-top: 25px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  margin: 0 auto;
  display: block;
  width: 65%;
`;
export const NavList = styled.ul`
  list-style-type: none;
  margin: 100px 0 70px 0;

  line-height: 40px;
`;

export const NavItem = styled.li`
  color: white;
  font-size: 17px;
  font-weight: bold;
  padding: 0 25px;
  transition: 0.3s;
  margin-bottom: 10px;
`;
export const Linker = styled.span`
  display: block;
  width: 100%;
  padding-left: 10px;
  transition: 0.3s;
  border-radius: 10px;

  ${NavItem}:hover & {
    color: #cb4757;
    background-color: #130f23;
  }
`;
