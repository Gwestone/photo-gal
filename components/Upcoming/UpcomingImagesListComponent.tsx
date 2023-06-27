"use client";

import React from "react";
import { StyledImagesComponents } from "@/components/Upcoming/styled";
import { Image } from "@/lib/types";
import UpcomingCardComponent from "@/components/Upcoming/UpcomingCardComponent";

export default function UpcomingImagesListComponent({
  photos,
}: {
  photos: Image[];
}) {
  return (
    <div className={"infinite-scroll"}>
      <StyledImagesComponents>
        {photos.map((photo, index) => {
          return <UpcomingCardComponent key={index} photo={photo} />;
        })}
      </StyledImagesComponents>
    </div>
  );
}
