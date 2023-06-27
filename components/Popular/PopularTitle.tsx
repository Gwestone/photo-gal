"use client";

import React from "react";
import {
  StyledCatalogChange,
  StyledCatalogOption,
  StyledCatalogOptionsList,
  StyledCategoryButton,
  StyledCategoryOption,
  StyledCategoryOptionsList,
  StyledChosenCatalogOption,
  StyledLeftCatalog,
  StyledRightCatalog,
  StyledSubTitle,
  StyledTitle,
} from "@/components/Popular/styled";

export default function PopularTitle() {
  return (
    <>
      <StyledTitle>Popular today</StyledTitle>
      <StyledSubTitle>
        See recently added photos with the highest Pulse!
      </StyledSubTitle>
      <StyledCatalogChange>
        <StyledLeftCatalog>
          <StyledCatalogOptionsList>
            <StyledChosenCatalogOption>Popular</StyledChosenCatalogOption>
            <StyledCatalogOption href={"/upcoming"}>
              Upcoming
            </StyledCatalogOption>
            <StyledCatalogOption href={"/fresh"}>Fresh</StyledCatalogOption>
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
    </>
  );
}
