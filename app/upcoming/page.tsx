"use client";

import React from "react";
import { StyledContainer } from "@/components/Popular/styled";
import constants from "@/lib/constants";
import UpcomingTitleComponent from "@/components/Upcoming/UpcomingTitleComponent";
import UpcomingImagesListComponent from "@/components/Upcoming/UpcomingImagesListComponent";

export default function Popular() {
  const photos = constants.photos;

  return (
    <StyledContainer>
      <UpcomingTitleComponent />
      <UpcomingImagesListComponent photos={photos} />
    </StyledContainer>
  );
}
