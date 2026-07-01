import React from "react";
import LogoIcon from "../assets/icons/logofooter.svg";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  padding: 40px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0c0c0c;
  color: #fafafa;

  @media (max-width: 1728px) {
    padding: 40px 100px;
  }
`;

const LogoImg = styled.img`
  width: 200px;
`;

const FooterMid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterMidNum = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterRightNav = styled.div`
  display: flex;
  gap: 20px;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <LogoImg src={LogoIcon} alt="Logo" />
      </div>
      <FooterRight>
        <FooterRightNav>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>정보공개</p>
          <p>사이트맵</p>
        </FooterRightNav>
        <p>&copy; 2026 Korea Heritage Service. All rights reserved</p>
      </FooterRight>
      <FooterMid>
        <p>
          (우)35208 대전광역시 서구 청사로 189
          <br />
          정부대전청사 1동 8-11층, 2동 14층
        </p>
        <FooterMidNum>
          <p>국가유산청 고객지원센터</p>
          <p>1600-0064</p>
        </FooterMidNum>
      </FooterMid>
    </FooterContainer>
  );
}
