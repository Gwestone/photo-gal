"use client";

import React from "react";
import { StyledTags } from "@/components/Photo/styled";
import PhotoTagComponent from "@/components/Photo/Tags/PhotoTagComponent";

export default function PhotoTagsComponent({ tags }: { tags: string[] }) {
  return (
    <StyledTags>
      {tags.map((tag, index) => {
        return <PhotoTagComponent key={index} tag={tag} />;
      })}
    </StyledTags>
  );
}
