import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import PotalImg from "../../assets/imgs/potalimg.png";

const ComplaintContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  /* width: 494px; */
  height: 382px;
  gap: 33px;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d930;
  border-radius: 30px;
  background-image: url(${PotalImg});
`;

const TextWrap = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const ComplaintText = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 24px;
`;

const AroundBtn = styled(NavLink)`
  padding: 10px 20px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #82572d;
  color: #fafafa;
  font-size: 24px;
`;
export default function Potal() {
  return (
    <ComplaintContainer>
      <TextWrap>
        <ComplaintText>국가유산포털 바로가기</ComplaintText>
        <Text>
          <p>국보 • 보물 • 사적</p>
          <p>통합 검색 서비스</p>
        </Text>
        <AroundBtn>바로가기</AroundBtn>
      </TextWrap>
    </ComplaintContainer>
  );
}
