"use client";

import React from "react";
import { StyledImage, StyledImageWrapper } from "@/components/Photo/styled";
import { Image } from "@/lib/types";

export default function PhotoComponent({ photo }: { photo: Image }) {
  return (
    <>
      <StyledImageWrapper>
        <StyledImage src={`/content/${photo.ImageName}`} />
      </StyledImageWrapper>
    </>
  );
}
