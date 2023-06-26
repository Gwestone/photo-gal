import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 700px;
  height: calc((100vh - 72px) - 198px);
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  padding: 24px 80px;
  justify-content: center;
  background-color: rgb(34, 34, 34);
`;

export const StyledImage = styled.img`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  background-color: rgb(34, 34, 34);
  height: calc((100vh - 113px) - 82px);
  transition: height 0.15s linear 0s;
  object-fit: contain;
  max-height: 625px;
  min-height: 425px;
`;
