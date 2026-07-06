import React from "react";
import NavFirst from "./NavFirst";
import NavSecond from "./NavSecond";
import NavThird from "./NavThird";
import NavFourd from "./NavFourd";
import NavFive from "./NavFive";
import NavSix from "./NavSix";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
`;

const FirstNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  background-color: #d9d9d930;
  padding: 30px;
`;
const SecondNav = styled(FirstNav)``;
const ThirdNav = styled(FirstNav)``;
const FourdNav = styled(FirstNav)``;
const FivedNav = styled(FirstNav)``;
const SixedNav = styled(FirstNav)``;

const MenuTitle = styled.p`
  font-size: 20px;
  padding: 30px;
`;

const MenuText = styled(NavLink)`
  padding: 10px 30px;
  &:hover {
    background-color: #fafafa;
  }
`;

export default function NavAll() {
  return (
    <NavAllContainer>
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
      <SecondNav>
        <MenuText>이용안내</MenuText>
        <MenuText>법정민원 신청</MenuText>
        <MenuText>국민신문고</MenuText>
        <MenuText>신고센터</MenuText>
        <MenuText>국가유산협업포털</MenuText>
        <MenuText>국민의소리</MenuText>
        <MenuText>적극행정</MenuText>
        <MenuText>안전보건</MenuText>
      </SecondNav>
      <ThirdNav>
        <MenuText>정보공개제도안내</MenuText>
        <MenuText>(사전)행정정보공표</MenuText>
        <MenuText>정보목록</MenuText>
        <MenuText>국가유산 데이터개방</MenuText>
        <MenuText>규제혁신</MenuText>
        <MenuText>행정자료 • 재정정보</MenuText>
        <MenuText>정책실명제</MenuText>
        <MenuText>감사 • 청렴 정보</MenuText>
      </ThirdNav>
      <FourdNav>
        <MenuText>법령정보</MenuText>
        <MenuText>국가유산 수리정보 종합현황</MenuText>
        <MenuText>매장유산 발굴조사</MenuText>
        <MenuText>SW사업 정보</MenuText>
        <MenuText>통계정보</MenuText>
        <MenuText>도서정보</MenuText>
        <MenuText>비영리법인현황</MenuText>
        <MenuText>국가유산형 예비 사회적기업</MenuText>
      </FourdNav>
      <FivedNav>
        <MenuText>국가유산 관람정보</MenuText>
        <MenuText>국가유산탐방</MenuText>
      </FivedNav>
      <SixedNav>
        <MenuText>소개</MenuText>
        <MenuText>일반현황</MenuText>
        <MenuText>주요업무계획</MenuText>
        <MenuText>국가유산 연구개발 기본계획</MenuText>
        <MenuText>청장 소개</MenuText>
        <MenuText>조직 및 직원</MenuText>
        <MenuText>위원회소개</MenuText>
        <MenuText>찾아오시는길</MenuText>
      </SixedNav>
    </NavAllContainer>
  );
}
