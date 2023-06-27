"use client";

import React from "react";
import { StyledImagesComponents } from "@/components/Popular/styled";
import { Image } from "@/lib/types";
import PopularPhotoCardComponent from "@/components/Popular/PopularPhotoCardComponent";

export default function PopularImagesList({ photos }: { photos: Image[] }) {
  return (
    <div className={"infinite-scroll"}>
      <StyledImagesComponents>
        {photos.map((photo, index) => {
          return <PopularPhotoCardComponent key={index} photo={photo} />;
        })}
      </StyledImagesComponents>
    </div>
  );
}
