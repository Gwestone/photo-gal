"use client";

import React from "react";
import { StyledContainer } from "@/components/Popular/styled";
import PopularTitle from "@/components/Popular/PopularTitle";
import PopularImagesList from "@/components/Popular/PopularImagesList";
import constants from "@/lib/constants";

export default function Popular() {
  const photos = constants.photos;

  return (
    <StyledContainer>
      <PopularTitle />
      <PopularImagesList photos={photos} />
    </StyledContainer>
  );
}
