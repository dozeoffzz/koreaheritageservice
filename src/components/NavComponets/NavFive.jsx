import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 998;

  width: 100%;
  padding: 0 100px;
  background-color: #fafafa;
`;

const FirstNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  background-color: #d9d9d930;
  /* padding: 30px; */
  width: 30%;
  height: 350px;
`;

const MenuText = styled(NavLink)`
  padding: 10px 30px;
  &:hover {
    background-color: #fafafa;
  }
`;

export default function NavFive() {
  return (
    <NavContainer>
      <FirstNav>
        <MenuText>국가유산 관람정보</MenuText>
        <MenuText>국가유산탐방</MenuText>
      </FirstNav>
    </NavContainer>
  );
}
