"use client";

import React from "react";
import {
  StyledBottomComment,
  StyledComment,
  StyledCommentText,
  StyledDate,
  StyledProfileName,
  StyledProfilePicture,
  StyledUpperComment,
} from "@/components/Photo/styled";
import { UserComment } from "@/lib/types";

export default function PhotoCommentComponent({
  comment,
}: {
  comment: UserComment;
}) {
  return (
    <>
      <StyledComment>
        <StyledProfilePicture src={"/content/profile.jpg"} />
        <StyledCommentText>
          <StyledUpperComment>
            <StyledProfileName>{comment.Author}</StyledProfileName>
            <StyledDate>{comment.Date}h</StyledDate>
          </StyledUpperComment>
          <StyledBottomComment>{comment.Text}</StyledBottomComment>
        </StyledCommentText>
      </StyledComment>
    </>
  );
}
