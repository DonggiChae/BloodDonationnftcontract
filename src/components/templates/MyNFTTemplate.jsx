import { useState } from "react";
import styled from "styled-components";

import Cards from "../organisms/Cards";
import Pagination from "../atoms/Pagination";
import Button from "../atoms/Button";

const Container = styled.div`
  width: 100%;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 1500px;
  border-radius: 20px;
`;

const TitleWrapper = styled.div`
  width: 1200px;
  margin: 30px;
`;
const Title = styled.div`
  font-size: 2.5em;
  text-align: left;
  padding-left: 100px;
  font-weight: 600;
`;

const ContentsWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  width: 800px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 2em;
  padding: 40px;
`;

const PaginationWrapper = styled.div`
  padding: 20px;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  height: 90%;
  margin-right: 30px;
  margin-top: 10px;
`;

export default function MyNFTTemplate({ feed }) {
  const [page, setPage] = useState(1);
  const limit = 20;
  const [sendingModalState, setSendingModalState] = useState(false);

  const handleModal = () => setSendingModalState(!sendingModalState);

  return (
    <Container>
      <TitleWrapper>
        <Title>나의 헌혈증</Title>
      </TitleWrapper>
      {feed.length === 0 ? (
        <ContentsWrapper>
          <Contents>조회가능한 헌혈증이 없습니다.</Contents>
          <Contents>헌혈로 생명을 구해보시는건 어떤가요?</Contents>
        </ContentsWrapper>
      ) : (
        <Wrapper>
          <Cards feed={feed} limit={limit} page={page} setPage={setPage} />
          <BottomWrapper>
            <PaginationWrapper>
              <Pagination
                page={page}
                totalPosts={feed.length}
                limit={limit}
                setPage={setPage}
              />
            </PaginationWrapper>
            <ButtonWrapper>
              <Button title={"헌혈증 보내기"} onClick={() => handleModal()} />
            </ButtonWrapper>
          </BottomWrapper>
        </Wrapper>
      )}
    </Container>
  );
}
