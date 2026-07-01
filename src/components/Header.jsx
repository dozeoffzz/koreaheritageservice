import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import SearchIcon from "../assets/icons/searchicon.svg";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1728px) {
    padding: 20px 100px;
  }
`;

const LogoImg = styled.img`
  width: 200px;

  @media (max-width: 1728px) {
    width: 150px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 500;

  @media (max-width: 1728px) {
    font-size: 20px;
    gap: 80px;
  }
`;

const SearchIconContainer = styled.button`
  width: 36px;

  @media (max-width: 1728px) {
    width: 32px;
  }
`;
const SearchIconImg = styled.img``;
export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoImg src={Logo} alt="Logo" />
      </NavLink>
      <NavContainer>
        <NavLink>알림 • 소식</NavLink>
        <NavLink>참여 • 민원</NavLink>
        <NavLink>정보공개</NavLink>
        <NavLink>행정정보</NavLink>
        <NavLink>행사 • 관람</NavLink>
        <NavLink>기관소개</NavLink>
      </NavContainer>
      <SearchIconContainer>
        <SearchIconImg src={SearchIcon} alt="search" />
      </SearchIconContainer>
    </HeaderContainer>
  );
}
