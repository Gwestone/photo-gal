"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { type } from "os";
import { StyledNotFoundPage } from "@/components/Errors/styled";
import {
  StyledCatalogChange,
  StyledCatalogOption,
  StyledCatalogOptionsList,
  StyledCategoryButton,
  StyledCategoryOption,
  StyledCategoryOptionsList,
  StyledChosenCatalogOption,
  StyledContainer,
  StyledImagesComponent,
  StyledLeftCatalog,
  StyledRightCatalog,
  StyledSubTitle,
  StyledTitle,
} from "@/components/Popular/styled";

export default function Popular() {
  return (
    <StyledContainer>
      <StyledTitle>Popular today</StyledTitle>
      <StyledSubTitle>
        See recently added photos with the highest Pulse!
      </StyledSubTitle>
      <StyledCatalogChange>
        <StyledLeftCatalog>
          <StyledCatalogOptionsList>
            <StyledChosenCatalogOption>Popular</StyledChosenCatalogOption>
            <StyledCatalogOption>Upcoming</StyledCatalogOption>
            <StyledCatalogOption>Fresh</StyledCatalogOption>
            <StyledCatalogOption>Editors Choice</StyledCatalogOption>
            <StyledCatalogOption>Galleries</StyledCatalogOption>
          </StyledCatalogOptionsList>
        </StyledLeftCatalog>
        <StyledRightCatalog>
          <StyledCategoryOptionsList>
            <StyledCategoryOption>
              <StyledCategoryButton>Categories</StyledCategoryButton>
            </StyledCategoryOption>
            <StyledCategoryOption>
              <StyledCategoryButton>Sort by: Pulse</StyledCategoryButton>
            </StyledCategoryOption>
          </StyledCategoryOptionsList>
        </StyledRightCatalog>
      </StyledCatalogChange>
      <div className={"infinite-scroll"}>
        <StyledImagesComponent></StyledImagesComponent>
      </div>
    </StyledContainer>
  );
}
