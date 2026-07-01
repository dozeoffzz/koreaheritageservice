import styled from "@emotion/styled";
import React from "react";

const ComplaintContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  /* width: 494px; */
  height: 382px;
  gap: 33px;
  border: 1px solid #82572d;
  border-radius: 30px;
`;

const ComplaintText = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const ComplaintNum = styled.p`
  font-size: 48px;
  font-weight: 500;
  color: #82572d;
`;

const ComplaintInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ComplaintTime = styled.p`
  font-size: 24px;
`;

export default function Complaint() {
  return (
    <ComplaintContainer>
      <ComplaintText>국가유산 민원센터</ComplaintText>
      <ComplaintNum>1600-0064</ComplaintNum>
      <ComplaintInfo>
        <ComplaintTime>평일 09:00 ~ 18:00</ComplaintTime>
        <ComplaintTime>(점심시간 12:00 ~ 13:00)</ComplaintTime>
      </ComplaintInfo>
    </ComplaintContainer>
  );
}
