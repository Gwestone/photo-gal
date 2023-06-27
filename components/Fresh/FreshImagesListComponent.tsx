"use client";

import React from "react";
import { StyledImagesComponents } from "@/components/Fresh/styled";
import { Image } from "@/lib/types";
import FreshPhotoCardComponent from "@/components/Fresh/FreshPhotoCardComponent";

export default function FreshImagesListComponent({
  photos,
}: {
  photos: Image[];
}) {
  return (
    <div className={"infinite-scroll"}>
      <StyledImagesComponents>
        {photos.map((photo, index) => {
          return <FreshPhotoCardComponent key={index} photo={photo} />;
        })}
      </StyledImagesComponents>
    </div>
  );
}
