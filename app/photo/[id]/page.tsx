"use client";

import React from "react";
import PhotoComponent from "@/components/Photo/Photo";
import { StyledContainer } from "@/components/Photo/styled";
import PhotoContentComponent from "@/components/Photo/PhotoContentComponent";
import constants from "@/lib/constants";

export default function Photo({ params: { id } }: { params: { id: string } }) {
  const photos = constants.photos;

  const photo = photos.filter((photo) => photo.Url === id);

  return (
    <StyledContainer>
      <PhotoComponent photo={photo[0]} />
      <PhotoContentComponent photo={photo[0]} />
    </StyledContainer>
  );
}
