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
  height: 550px;
  justify-content: center;
`;

const MenuText = styled(NavLink)`
  padding: 10px 30px;
  &:hover {
    background-color: #fafafa;
  }
`;

export default function NavFourd() {
  return (
    <NavContainer>
      <FirstNav>
        <MenuText>법령정보</MenuText>
        <MenuText>국가유산 수리정보 종합현황</MenuText>
        <MenuText>매장유산 발굴조사</MenuText>
        <MenuText>SW사업 정보</MenuText>
        <MenuText>통계정보</MenuText>
        <MenuText>도서정보</MenuText>
        <MenuText>비영리법인현황</MenuText>
        <MenuText>국가유산형 예비 사회적기업</MenuText>
      </FirstNav>
    </NavContainer>
  );
}
