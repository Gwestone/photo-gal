import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
  padding-left: 64px;
  padding-right: 64px;
  width: calc(100% - 128px);
`;

export const StyledNavbar = styled.div`
  padding-top: 22px;
  padding-bottom: 22px;
  height: 28px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  font-variant: tabular-nums;
`;

export const StyledNavbarIcon = styled.div`
  //background-color: red;
  height: 22px;
`;

export const StyledLinksLeft = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  font-size: 16px;
  flex-grow: 1;
`;

export const StyledLinkLeft = styled.div`
  display: inline-block;
  margin-left: 32px;
`;

export const StyledLinksRight = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  font-size: 16px;
  //font-weight: bold;
`;

export const StyledLinkRight = styled.div`
  //display: inline-block;
  margin-left: 32px;
  //text-align: center;
  height: 32px;
  display: grid;
  place-items: center;
`;

export const StyledSignUp = styled.div`
  display: inline-block;
  margin-left: 32px;
  border-radius: 9999px;
  border: black 2px solid;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
`;
