import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const BannerContainer = styled.div`
  display: flex;
`;
const BannerWrap = styled.div`
  margin-top: 100px;
  display: flex;
`;
const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const TitleTextWrap = styled.div`
  padding-left: 200px;
  display: flex;
  justify-content: space-between;
  /* gap: 100px; */
`;

const TitleText = styled.h1`
  position: relative;
  writing-mode: vertical-rl;
  font-size: 60px;
  font-family: "Gungsuh";

  &::after {
    position: absolute;
    top: 20px;
    right: 100px;
    color: #82572d;
    width: 2px;
    height: 356px;
  }
`;
const SubText = styled.div`
  writing-mode: vertical-rl;
  font-size: 32px;
  font-family: "Gungsuh";
`;

const Pagenation = styled.div`
  padding-left: 200px;
  display: flex;
  color: #82572d;
  align-items: center;
  gap: 30px;
  font-size: 24px;
`;
const PageNationBar = styled.div`
  position: relative;
  background-color: #d9d9d9;
  border-radius: 30px;
  width: 187px;
  height: 5px;
`;
const CurrentPageBar = styled.div`
  position: absolute;
  background-color: #82572d;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  border-radius: 30px;
  width: 40px;
  height: 7px;
`;

const BannerImgWrap = styled.div`
  position: relative;
  width: 600px;
  /* height: 687px; */
`;

const BtnWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 40px;
  display: flex;
  gap: 10px;
`;

const AroundBtn = styled(NavLink)`
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #82572d;
  color: #fafafa;
  font-size: 24px;
`;

const DigitalBtn = styled(AroundBtn)`
  background-color: #0c0c0c70;
  border: 1px solid #fafafa;
`;

export default function Banner() {
  return (
    <BannerContainer>
      <BannerWrap>
        <BannerLeft>
          <TitleTextWrap>
            <TitleText>국 가 유 산 청</TitleText>
            <SubText>
              <p>과거를 지키고</p>
              <p>미래로 전하는</p>
              <p>대한민국의 국가유산</p>
            </SubText>
          </TitleTextWrap>
          <Pagenation>
            <p>01</p>
            <PageNationBar>
              <CurrentPageBar></CurrentPageBar>
            </PageNationBar>
            <p>02</p>
            <p>03</p>
          </Pagenation>
        </BannerLeft>
        <BannerImgWrap>
          <img />
          <BtnWrap>
            <AroundBtn>국가유산 둘러보기</AroundBtn>
            <DigitalBtn>디지털 아카이브</DigitalBtn>
          </BtnWrap>
        </BannerImgWrap>
      </BannerWrap>
    </BannerContainer>
  );
}
