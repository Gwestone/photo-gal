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
} from "@/components/Fresh/styled";

export default function FreshTitleComponent() {
  return (
    <>
      <StyledTitle>Popular today</StyledTitle>
      <StyledSubTitle>
        See recently added photos with the highest Pulse!
      </StyledSubTitle>
      <StyledCatalogChange>
        <StyledLeftCatalog>
          <StyledCatalogOptionsList>
            <StyledCatalogOption href={"/popular"}>Popular</StyledCatalogOption>
            <StyledCatalogOption href={"/upcoming"}>
              Upcoming
            </StyledCatalogOption>
            <StyledChosenCatalogOption>Fresh</StyledChosenCatalogOption>
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
