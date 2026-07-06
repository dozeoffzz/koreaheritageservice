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

export default function NavSix() {
  return (
    <NavContainer>
      <FirstNav>
        <MenuText>소개</MenuText>
        <MenuText>일반현황</MenuText>
        <MenuText>주요업무계획</MenuText>
        <MenuText>국가유산 연구개발 기본계획</MenuText>
        <MenuText>청장 소개</MenuText>
        <MenuText>조직 및 직원</MenuText>
        <MenuText>위원회소개</MenuText>
        <MenuText>찾아오시는길</MenuText>
      </FirstNav>
    </NavContainer>
  );
}
