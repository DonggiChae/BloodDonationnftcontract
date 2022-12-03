import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 28%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavIconWrapper = styled.div``;

const NameWrapper = styled.div`
  font-size: 1.2em;
  font-weight: 600;
`;

function Nav() {
  return (
    <Container>
      <NavIconWrapper>
        <StyledLink to="/mynft">
          <NameWrapper>나의NFT</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/sendingnft">
          <NameWrapper>헌혈증 보내기</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/location">
          <NameWrapper>위치검색</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/setting">
          <NameWrapper>설정</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
    </Container>
  );
}

export default Nav;
