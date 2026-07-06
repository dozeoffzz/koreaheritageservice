import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
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
  height: 550px;
  justify-content: center;
`;

const MenuText = styled(NavLink)`
  padding: 10px 30px;
  &:hover {
    background-color: #fafafa;
  }
`;

export default function NavThird() {
  return (
    <NavContainer>
      <FirstNav>
        <MenuText>정보공개제도안내</MenuText>
        <MenuText>(사전)행정정보공표</MenuText>
        <MenuText>정보목록</MenuText>
        <MenuText>국가유산 데이터개방</MenuText>
        <MenuText>규제혁신</MenuText>
        <MenuText>행정자료 • 재정정보</MenuText>
        <MenuText>정책실명제</MenuText>
        <MenuText>감사 • 청렴 정보</MenuText>
      </FirstNav>
    </NavContainer>
  );
}
