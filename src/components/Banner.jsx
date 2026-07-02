import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BannerBackImg from "../assets/imgs/bannerbackimg.png";
import Banner1 from "../assets/imgs/banner1.png";
import BannerLeftIcon from "../assets/icons/bannerleft.svg";
import BannerRightIcon from "../assets/icons/bannerright.svg";
import { AllBanner } from "../apis/MokApis";

const BannerContainer = styled.div`
  padding: 0 200px;
  width: 100%;
  display: flex;
  background-image: url(${BannerBackImg});
`;
const BannerWrap = styled.div`
  width: 100%;
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
`;
const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const TitleTextWrap = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 100px;
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
  display: flex;
  justify-self: flex-end;
  width: 1017px; /* 이미지 너비 */
  height: 550px;
  overflow: hidden;
`;

const BannerSlide = styled.div`
  display: flex;
  transform: translateX(${({ current }) => `-${current * 100}%`});
  transition: transform 0.6s ease;
`;

const BannerImg = styled.img`
  width: 100%;
  flex: 0 0 100%;
  height: 550px;
  object-fit: cover;
`;

const BtnWrap = styled.div`
  position: absolute;
  bottom: 30px;
  left: 40px;
  display: flex;
  gap: 10px;
`;

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % AllBanner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevBanner = () => {
    setCurrent((prev) => (prev === 0 ? AllBanner.length - 1 : prev - 1));
  };

  const nextBanner = () => {
    setCurrent((prev) => (prev + 1) % AllBanner.length);
  };
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
        </BannerLeft>
        <BannerImgWrap>
          <BannerSlide current={current}>
            {AllBanner.map((item) => (
              <BannerImg key={item.id} src={item.img} alt={`banner-${item.id}`} />
            ))}
          </BannerSlide>
          <BtnWrap>
            <button onClick={prevBanner}>
              <img src={BannerLeftIcon} />
            </button>
            <button onClick={nextBanner}>
              <img src={BannerRightIcon} />
            </button>
          </BtnWrap>
        </BannerImgWrap>
      </BannerWrap>
    </BannerContainer>
  );
}
