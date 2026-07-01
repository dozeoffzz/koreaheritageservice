import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const SimpleNavContainer = styled.div`
  margin-bottom: 100px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  border: 1px solid #82572d;
  font-size: 20px;
  width: 100%;
  height: 180px;
`;

const SimpleNavIconWrap = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default function SimpleNav() {
  return (
    <SimpleNavContainer>
      <SimpleNavIconWrap>
        <img />
        <p>국가유산 검색</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>국가유산 지도</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>디지털 아카이브</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>행사안내</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>교육프로그램</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>민원신청</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>정보공개</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img />
        <p>홍보영상</p>
      </SimpleNavIconWrap>
    </SimpleNavContainer>
  );
}
