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

export default function NavSecond() {
  return (
    <NavContainer>
      <FirstNav>
        <MenuText>이용안내</MenuText>
        <MenuText>법정민원 신청</MenuText>
        <MenuText>국민신문고</MenuText>
        <MenuText>신고센터</MenuText>
        <MenuText>국가유산협업포털</MenuText>
        <MenuText>국민의소리</MenuText>
        <MenuText>적극행정</MenuText>
        <MenuText>안전보건</MenuText>
      </FirstNav>
    </NavContainer>
  );
}
