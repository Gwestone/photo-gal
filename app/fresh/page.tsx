"use client";

import React from "react";
import { StyledContainer } from "@/components/Popular/styled";
import constants from "@/lib/constants";
import FreshTitleComponent from "@/components/Fresh/FreshTitleComponent";
import FreshImagesListComponent from "@/components/Fresh/FreshImagesListComponent";

export default function Popular() {
  const photos = constants.photos;

  return (
    <StyledContainer>
      <FreshTitleComponent />
      <FreshImagesListComponent photos={photos} />
    </StyledContainer>
  );
}
