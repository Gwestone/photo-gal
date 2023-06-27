"use client";

import React from "react";
import { StyledTag } from "@/components/Photo/styled";

export default function PhotoTagComponent({ tag }: { tag: string }) {
  return <StyledTag>{tag}</StyledTag>;
}
