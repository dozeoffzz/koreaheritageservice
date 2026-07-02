import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import EasyIcon1 from "../../assets/icons/easyicon1.svg";
import EasyIcon2 from "../../assets/icons/easyicon2.svg";
import EasyIcon3 from "../../assets/icons/easyicon3.svg";
import EasyIcon4 from "../../assets/icons/easyicon4.svg";
import EasyIcon5 from "../../assets/icons/easyicon5.svg";
import EasyIcon6 from "../../assets/icons/easyicon6.svg";

const SimpleNavContainer = styled.div`
  margin-bottom: 100px;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d930;
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
  font-weight: 600;
`;

export default function SimpleNav() {
  return (
    <SimpleNavContainer>
      <SimpleNavIconWrap>
        <img src={EasyIcon1} />
        <p>국가유산현황</p>
        <p>15,776 건</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img src={EasyIcon2} />
        <p>국가지정유산</p>
        <p>4,474 건</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img src={EasyIcon3} />
        <p>국가등록문화유산</p>
        <p>980 건</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img src={EasyIcon4} />
        <p>시도지정유산</p>
        <p>7,247 건</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img src={EasyIcon5} />
        <p>시도등록문화유산</p>
        <p>122 건</p>
      </SimpleNavIconWrap>
      <SimpleNavIconWrap>
        <img src={EasyIcon6} />
        <p>문화 • 자연유산자료</p>
        <p>2,953 건</p>
      </SimpleNavIconWrap>
    </SimpleNavContainer>
  );
}
