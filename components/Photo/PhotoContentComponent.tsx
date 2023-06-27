"use client";

import React from "react";
import {
  StyledActionList,
  StyledBoldText,
  StyledBottomContainer,
  StyledCategory,
  StyledCommentText,
  StyledLikesCount,
  StyledPhotoContent,
  StyledStatus,
  StyledStatusOption,
  StyledStatusText,
  StyledStatusTitle,
  StyledTitle,
  StyledTitlePicture,
  StyledTitleText,
  StyledTitleUsername,
  StyledUploadDate,
  StyledUpperComment,
  StyledWrapper,
} from "@/components/Photo/styled";
import { BiAddToQueue, BiDotsHorizontalRounded } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";
import PhotoCommentsComponent from "@/components/Photo/Comments/PhotoCommentsComponent";
import { Image } from "@/lib/types";
import PhotoTagsComponent from "@/components/Photo/Tags/PhotoTagsComponent";

export default function PhotoContentComponent({ photo }: { photo: Image }) {
  return (
    <StyledBottomContainer>
      <StyledWrapper>
        <StyledPhotoContent>
          <StyledActionList>
            <AiOutlineHeart
              style={{
                width: "32px",
                height: "32px",
                paddingRight: "20px",
                strokeWidth: "0px",
              }}
            />
            <BiAddToQueue
              style={{
                width: "32px",
                height: "32px",
                paddingRight: "20px",
                strokeWidth: "0px",
              }}
            />
            <AiOutlineShareAlt
              style={{
                width: "32px",
                height: "32px",
                paddingRight: "20px",
                strokeWidth: "0px",
              }}
            />
            <BiDotsHorizontalRounded
              style={{
                width: "32px",
                height: "32px",
                paddingRight: "20px",
                strokeWidth: "0px",
              }}
            />
          </StyledActionList>
          <StyledTitle>
            <StyledTitlePicture src={"/content/profile.jpg"} />
            <StyledCommentText>
              <StyledUpperComment>
                <StyledTitleText>{photo.Title}</StyledTitleText>
              </StyledUpperComment>
              <StyledTitleUsername>{photo.Author} • Follow</StyledTitleUsername>
            </StyledCommentText>
          </StyledTitle>
          <StyledUploadDate>
            <StyledBoldText>Uploaded: </StyledBoldText> about {photo.Date} hours
            ago
          </StyledUploadDate>
          <StyledStatus>
            <StyledStatusOption>
              <StyledStatusTitle>
                Highest Pulse{" "}
                <AiOutlineInfoCircle
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingLeft: "4px",
                  }}
                />
              </StyledStatusTitle>
              <StyledStatusText>{photo.Pulse}</StyledStatusText>
            </StyledStatusOption>
          </StyledStatus>
          <StyledLikesCount>
            {photo.Likes} people liked this photo
          </StyledLikesCount>
          <StyledCategory>
            <StyledBoldText>Category:</StyledBoldText> {photo.Category}
          </StyledCategory>
          <PhotoTagsComponent tags={photo.Tags} />
        </StyledPhotoContent>
        <PhotoCommentsComponent comments={photo.UserComments} />
      </StyledWrapper>
    </StyledBottomContainer>
  );
}
