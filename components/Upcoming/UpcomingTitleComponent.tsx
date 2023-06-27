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
} from "@/components/Upcoming/styled";

export default function UpcomingTitleComponent() {
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
            <StyledChosenCatalogOption>Upcoming</StyledChosenCatalogOption>
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
