import React from "react";
import { NavLink } from "react-router-dom";
import { SixthApi } from "../../apis/MokApis";
import styled from "@emotion/styled";
import BannerLeft from "../../assets/icons/bannerleft.svg";
import BannerRight from "../../assets/icons/bannerright.svg";

const SixthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 36px;
  font-family: "Gungsuh";
`;

const MoreView = styled(NavLink)`
  font-size: 20x;
  color: #82572d;
  font-weight: 600;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Card = styled(NavLink)`
  border-radius: 30px;
  background-color: #d9d9d930;
  border: 1px solid #d9d9d9;
  width: 350px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const BannerLeftIcon = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  opacity: 0.8;
`;
const BannerRightIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  opacity: 0.8;
`;

const CardText = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  gap: 10px;
`;
const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export default function Sixth() {
  return (
    <SixthContainer>
      <TitleWrap>
        <Title>국가유산 TV</Title>
        <MoreView>더보기 +</MoreView>
      </TitleWrap>
      <CardContainer>
        {SixthApi.map((item) => (
          <Card key={item.id}>
            <img src={item.img} alt={item.name} />
            <CardText>
              <CardTitle>{item.name}</CardTitle>
              <p>{item.text}</p>
            </CardText>
          </Card>
        ))}
        <BannerLeftIcon>
          <img src={BannerLeft} />
        </BannerLeftIcon>
        <BannerRightIcon>
          <img src={BannerRight} />
        </BannerRightIcon>
      </CardContainer>
    </SixthContainer>
  );
}
