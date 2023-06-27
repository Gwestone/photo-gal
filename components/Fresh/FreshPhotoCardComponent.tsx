"use client";

import React from "react";
import { StyledImage, StyledImageComponent } from "@/components/Fresh/styled";
import { Image } from "@/lib/types";
import Link from "next/link";

export default function FreshPhotoCardComponent({ photo }: { photo: Image }) {
  return (
    <StyledImageComponent>
      <Link href={`/photo/${photo.Url}`}>
        <StyledImage
          src={`/content/${photo.ImageName}`}
          alt={photo.Title}
          height={320}
        />
      </Link>
    </StyledImageComponent>
  );
}
