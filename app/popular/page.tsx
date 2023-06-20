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
  StyledImage,
  StyledImageComponent,
  StyledImagesComponents,
  StyledLeftCatalog,
  StyledRightCatalog,
  StyledSubTitle,
  StyledTitle,
} from "@/components/Popular/styled";
import Image from "next/image";

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
        <StyledImagesComponents>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo1.jpg"}
              alt={"photo1"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo2.jpg"}
              alt={"photo2"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo3.jpg"}
              alt={"photo3"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo4.jpg"}
              alt={"photo4"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo5.jpg"}
              alt={"photo5"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo6.jpg"}
              alt={"photo6"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo7.jpg"}
              alt={"photo7"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo8.jpg"}
              alt={"photo8"}
              height={320}
            />
          </StyledImageComponent>
          <StyledImageComponent>
            <StyledImage
              src={"/content/photo9.jpg"}
              alt={"photo9"}
              height={320}
            />
          </StyledImageComponent>
        </StyledImagesComponents>
      </div>
    </StyledContainer>
  );
}
