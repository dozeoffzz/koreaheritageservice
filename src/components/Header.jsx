import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import HambugerIcon from "../assets/icons/hambugericon.svg";
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
  z-index: 999;

  transform: translateY(${({ visible }) => (visible ? "0" : "-100%")});
  transition: transform 0.3s ease;

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

const HambugerIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c0c0c;
  width: 48px;
  height: 48px;

  @media (max-width: 1728px) {
    width: 32px;
  }
`;
const HambugerIconImg = styled.img`
  width: 100%;
`;
export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        // 맨 위에서는 항상 보이기
        setVisible(true);
      } else if (currentScroll > prevScroll) {
        // 아래로 스크롤
        setVisible(false);
      } else {
        // 위로 스크롤
        setVisible(true);
      }

      prevScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderContainer visible={visible}>
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
      <HambugerIconContainer>
        <HambugerIconImg src={HambugerIcon} alt="search" />
      </HambugerIconContainer>
    </HeaderContainer>
  );
}
