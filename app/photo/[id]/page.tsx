"use client";

import React from "react";
import PhotoComponent from "@/components/Photo/Photo";
import { StyledContainer, StyledWrapper } from "@/components/Photo/styled";
import { BsFullscreenExit } from "react-icons/bs";

export default function Photo({ params: { id } }: { params: { id: string } }) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <PhotoComponent />
        <BsFullscreenExit
          color={"white"}
          style={{
            position: "absolute",
            top: "2vh",
            right: "4vw",
            width: "32px",
            height: "32px",
          }}
        />
      </StyledWrapper>
    </StyledContainer>
  );
}
