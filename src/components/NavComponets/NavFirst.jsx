import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  display: flex;
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

export default function NavFirst() {
  return (
    <NavContainer>
      <FirstNav>
        <MenuText>공지사항</MenuText>
        <MenuText>보도/설명</MenuText>
        <MenuText>국정성과</MenuText>
        <MenuText>사진뉴스</MenuText>
        <MenuText>동영상뉴스</MenuText>
        <MenuText>국가유산 지정예고</MenuText>
        <MenuText>입찰정보</MenuText>
        <MenuText>시험/채용</MenuText>
        <MenuText>국가유산청 소식지</MenuText>
      </FirstNav>
    </NavContainer>
  );
}
