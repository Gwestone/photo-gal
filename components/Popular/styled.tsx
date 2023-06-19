import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-left: 64px;
  padding-right: 64px;
  width: calc(100% - 128px);
`;

export const StyledTitle = styled.div`
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  text-transform: none;
  margin: 32px 0px 8px;
  color: rgb(34, 34, 34);
`;

export const StyledSubTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  text-transform: none;
  margin: 0px;
  color: rgb(82, 85, 88);
`;

export const StyledCatalogChange = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLeftCatalog = styled.div``;

export const StyledRightCatalog = styled.div``;

export const StyledCatalogOptionsList = styled.div`
  display: flex;
  margin-left: -8px;
  height: 48px;
`;

export const StyledCatalogOption = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 0 8px;
  align-items: center;
  text-align: center;
  color: rgb(109, 115, 120);
`;

export const StyledChosenCatalogOption = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  text-align: center;
  height: 36px;
  padding: 6px 0 0;
  margin: 0 8px;
  color: rgb(8, 112, 209);
  box-shadow: rgb(8, 112, 209) 0px -3px 0px -1px inset;
`;

export const StyledCategoryOptionsList = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  text-align: center;
  height: 48px;
`;

export const StyledCategoryOption = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  text-align: center;
  height: 48px;
  margin-right: 8px;
  color: rgb(82, 85, 88);
`;

export const StyledCategoryButton = styled.div`
  border-radius: 9999px;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid rgb(215, 216, 219);
  padding: 8px 22px;
`;

export const StyledImagesComponent = styled.div`
  height: fit-content;
  font-size: 16px;
  margin-top: 8px;
  background-color: transparent;
  border: 2px solid rgb(215, 216, 219);
  padding: 8px 22px;
`;
