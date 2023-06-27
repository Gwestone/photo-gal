"use client";

import React from "react";
import { StyledCommentCount, StyledComments } from "@/components/Photo/styled";
import PhotoCommentComponent from "@/components/Photo/Comments/PhotoCommentComponent";
import { UserComment } from "@/lib/types";
export default function PhotoCommentsComponent({
  comments,
}: {
  comments: UserComment[];
}) {
  return (
    <StyledComments>
      <StyledCommentCount>{comments.length} Comments</StyledCommentCount>

      {comments.map((comment, index) => {
        return <PhotoCommentComponent key={index} comment={comment} />;
      })}
    </StyledComments>
  );
}
