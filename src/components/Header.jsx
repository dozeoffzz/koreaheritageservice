import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import HambugerIcon from "../assets/icons/hambugericon.svg";
import styled from "@emotion/styled";
import NavFirst from "./NavComponets/NavFirst";
import NavSecond from "./NavComponets/NavSecond";
import NavThird from "./NavComponets/NavThird";
import NavSix from "./NavComponets/NavSix";
import NavFive from "./NavComponets/NavFive";
import NavFourd from "./NavComponets/NavFourd";
import NavAll from "./NavComponets/NavAll";

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
  background-color: #fafafa;

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

  @media (max-width: 1728px) {
    font-size: 20px;
    gap: 80px;
  }
`;

const MenuButton = styled.button`
  font-weight: 600;
`;

const HambugerIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  @media (max-width: 1728px) {
    width: 48px;
  }
`;
const HambugerIconImg = styled.img`
  width: 100%;
`;
export default function Header() {
  const [visible, setVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const menuComponents = {
    notice: <NavFirst />,
    participation: <NavSecond />,
    info: <NavThird />,
    admin: <NavFourd />,
    event: <NavFive />,
    about: <NavSix />,
    all: <NavAll />,
  };

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
    <>
      <HeaderContainer visible={visible}>
        <NavLink to="/">
          <LogoImg src={Logo} alt="Logo" />
        </NavLink>
        <NavContainer>
          <MenuButton onClick={() => handleToggle("notice")}>알림 • 소식</MenuButton>

          <MenuButton onClick={() => handleToggle("participation")}>참여 • 민원</MenuButton>

          <MenuButton onClick={() => handleToggle("info")}>정보공개</MenuButton>

          <MenuButton onClick={() => handleToggle("admin")}>행정정보</MenuButton>

          <MenuButton onClick={() => handleToggle("event")}>행사 • 관람</MenuButton>

          <MenuButton onClick={() => handleToggle("about")}>기관소개</MenuButton>
        </NavContainer>
        <HambugerIconContainer>
          <HambugerIconImg src={HambugerIcon} alt="search" onClick={() => handleToggle("all")} />
        </HambugerIconContainer>
      </HeaderContainer>
      {menuComponents[openMenu]}
    </>
  );
}
