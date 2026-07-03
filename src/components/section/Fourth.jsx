import React from "react";
import { NavLink } from "react-router-dom";
import { FourthApi } from "../../apis/MokApis";
import styled from "@emotion/styled";

const FourthContainer = styled.div`
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

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Card = styled(NavLink)`
  border-radius: 30px;
  background-color: #d9d9d930;
  border: 1px solid #d9d9d9;
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

export default function Fourth() {
  return (
    <FourthContainer>
      <TitleWrap>
        <Title>교육 • 체험 프로그램</Title>
      </TitleWrap>
      <CardContainer>
        {FourthApi.map((item) => (
          <Card key={item.id}>
            <img src={item.img} alt={item.name} />
            <CardText>
              <CardTitle>{item.name}</CardTitle>
              <p>{item.text}</p>
            </CardText>
          </Card>
        ))}
      </CardContainer>
    </FourthContainer>
  );
}
