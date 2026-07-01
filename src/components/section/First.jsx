import React from "react";
import Notice from "../FirstComponents/Notice";
import styled from "@emotion/styled";
import Complaint from "../FirstComponents/Complaint";
import Potal from "../FirstComponents/Potal";
import SimpleNav from "../FirstComponents/SimpleNav";

const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px 0;
  gap: 20px;
`;

export default function First() {
  return (
    <>
      <FirstContainer>
        <Notice />
        <Complaint />
        <Potal />
      </FirstContainer>
      <SimpleNav />
    </>
  );
}
