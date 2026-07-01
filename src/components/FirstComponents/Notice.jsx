import styled from "@emotion/styled";
import React from "react";

const NoticeContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  /* width: 494px; */
  height: 382px;
  gap: 33px;
  border: 1px solid #82572d;
  border-radius: 30px;

  @media (max-width: 1728px) {
    /* padding: 10px 30px;
    gap: 20px; */
  }
`;
const NoticeTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NoticeText = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
const MoreViewText = styled.button`
  font-size: 20px;
  color: #82572d;
  font-weight: 600;
`;
const MainNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const MainNoticeDateWrap = styled.div`
  padding: 6px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #82572d;
`;
const MainNoticeDate = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
const MainNoticeYear = styled.p`
  font-size: 20px;
`;
const MainNoticeText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #82572d;
`;
const MainNoticeSubText = styled.p`
  font-size: 20px;
  color: #d9d9d9;
`;

const NextNoticewrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NextNotice = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Notice() {
  return (
    <NoticeContainer>
      <NoticeTextWrap>
        <NoticeText>공지사항</NoticeText>
        <MoreViewText>더보기 +</MoreViewText>
      </NoticeTextWrap>
      <MainNotice>
        <MainNoticeDateWrap>
          <MainNoticeDate>17</MainNoticeDate>
          <MainNoticeYear>2024.06</MainNoticeYear>
        </MainNoticeDateWrap>
        <div>
          <MainNoticeText>[공지] 2026 국가유산 활용사업 안내</MainNoticeText>
          <MainNoticeSubText>국가유산청 공고 제 2024-12호</MainNoticeSubText>
        </div>
      </MainNotice>
      <NextNoticewrap>
        <NextNotice>
          <p>2024.06.14</p>
          <p>[보도자료] 국가 유산 미디어아트 개최</p>
        </NextNotice>
        <NextNotice>
          <p>2024.06.12</p>
          <p>[채용] 국가유산청 채용공고</p>
        </NextNotice>
        <NextNotice>
          <p>2024.06.14</p>
          <p>[공지] 국가유산청 채용공고</p>
        </NextNotice>
        <NextNotice>
          <p>2024.06.14</p>
          <p>[보도자료] 세계유산 개최</p>
        </NextNotice>
      </NextNoticewrap>
    </NoticeContainer>
  );
}
