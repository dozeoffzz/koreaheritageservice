import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";
import WorldHeritageImg from "../../assets/imgs/worldheritage.png";
import IntangibleImg from "../../assets/imgs/intangible.png";
import TreasureImg from "../../assets/imgs/treasureimg.png";
import CircleBtn from "../../assets/icons/circlebtn.svg";

const SecondSection = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TextWrap = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`;
const SecondTitle = styled.h3`
  font-size: 36px;
  font-family: "Gungsuh";
`;
const SecondSub = styled.p`
  font-size: 20px;
  color: #696969;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const WorldHeritage = styled(NavLink)`
  padding: 20px 30px;
  border-radius: 30px;
  background-color: #d9d9d930;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 450px;
  height: 300px;
  background-image: url(${WorldHeritageImg});
`;

const Treasure = styled(WorldHeritage)`
  width: 494px;
  height: 323px;
  background-image: url(${TreasureImg});
`;

const Intangible = styled(WorldHeritage)`
  background-image: url(${IntangibleImg});
`;
const CardTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const CardTitle = styled.h3`
  font-size: 32px;
  color: #fafafa;
`;
const CardText = styled.p`
  font-size: 20px;
  color: #fafafa;
`;
export default function Second() {
  return (
    <SecondSection>
      <TextWrap>
        <SecondTitle>대한민국의 유산을 만나다</SecondTitle>
        <SecondSub>천년의 역사와 문화를 경험해보세요</SecondSub>
      </TextWrap>
      <CardContainer>
        <WorldHeritage>
          <CardTextWrap>
            <CardTitle>세계유산</CardTitle>
            <CardText>
              우리나라의 세계유산을
              <br />
              소개합니다
            </CardText>
          </CardTextWrap>
          <img src={CircleBtn} />
        </WorldHeritage>
        <Treasure>
          <CardTextWrap>
            <CardTitle>국보 • 보물</CardTitle>
            <CardText>
              대한민국을 대표하는
              <br />
              국가지정문화유산
            </CardText>
          </CardTextWrap>
          <img src={CircleBtn} />
        </Treasure>
        <Intangible>
          <CardTextWrap>
            <CardTitle>무형유산</CardTitle>
            <CardText>
              전통과 예술, 그리고
              <br />
              사람들의 이야기를 담다
            </CardText>
          </CardTextWrap>
          <img src={CircleBtn} />
        </Intangible>
      </CardContainer>
    </SecondSection>
  );
}
