"use client";

import React from "react";
import {
  StyledNavbarIcon,
  StyledLinksLeft,
  StyledLinksRight,
  StyledNavbar,
  StyledNavbarWrapper,
  StyledLinkLeft,
  StyledLinkRight,
  StyledSignUp,
} from "@/components/Navbar/styled";
import Image from "next/image";
import { StyledImage, StyledImageWrapper } from "@/components/Photo/styled";
import {
  StyledComment,
  StyledCommentCount,
  StyledComments,
  StyledUpperComment,
  StyledPhotoContent,
  StyledWrapper,
  StyledProfileName,
  StyledDate,
  StyledBottomComment,
  StyledCommentText,
  StyledActionList,
  StyledContainer,
  StyledTitle,
  StyledUploadDate,
  StyledBoldText,
  StyledStatus,
  StyledStatusOption,
  StyledStatusTitle,
  StyledStatusText,
  StyledLikesCount,
  StyledCategory,
  StyledTags,
  StyledTag,
  StyledTitlePicture,
  StyledProfilePicture,
  StyledTitleText,
  StyledTitleUsername,
} from "@/app/photo/[id]/styled";
import { CiHeart } from "react-icons/ci";
import { BiAddToQueue, BiDotsHorizontalRounded } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";

export default function PhotoComponent() {
  return (
    <>
      <StyledImageWrapper>
        <StyledImage src={"/content/photo10.jpg"} />
      </StyledImageWrapper>
      <StyledContainer>
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
                  <StyledTitleText>Title</StyledTitleText>
                </StyledUpperComment>
                <StyledTitleUsername>By someone • Follow</StyledTitleUsername>
              </StyledCommentText>
            </StyledTitle>
            <StyledUploadDate>
              <StyledBoldText>Uploaded: </StyledBoldText> about 18 hours ago
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
                <StyledStatusText>93.4</StyledStatusText>
              </StyledStatusOption>
              <StyledStatusOption>
                <StyledStatusTitle>Highest Pulse</StyledStatusTitle>
                <StyledStatusText>93.4</StyledStatusText>
              </StyledStatusOption>
            </StyledStatus>
            <StyledLikesCount>126 people liked this photo</StyledLikesCount>
            <StyledCategory>
              <StyledBoldText>Category:</StyledBoldText> Nature
            </StyledCategory>
            <StyledTags>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
              <StyledTag>Horizontal</StyledTag>
            </StyledTags>
          </StyledPhotoContent>
          <StyledComments>
            <StyledCommentCount>16 Comments</StyledCommentCount>
            <StyledComment>
              <StyledProfilePicture src={"/content/profile.jpg"} />
              <StyledCommentText>
                <StyledUpperComment>
                  <StyledProfileName>Anna Dudnik</StyledProfileName>
                  <StyledDate>3h</StyledDate>
                </StyledUpperComment>
                <StyledBottomComment>
                  Great picture! Three buddies💚 so cute and beautiful!👍👍
                </StyledBottomComment>
              </StyledCommentText>
            </StyledComment>
            <StyledComment>
              <StyledProfilePicture src={"/content/profile.jpg"} />
              <StyledCommentText>
                <StyledUpperComment>
                  <StyledProfileName>Anna Dudnik</StyledProfileName>
                  <StyledDate>3h</StyledDate>
                </StyledUpperComment>
                <StyledBottomComment>
                  Great picture! Three buddies💚 so cute and beautiful!👍👍
                </StyledBottomComment>
              </StyledCommentText>
            </StyledComment>
            <StyledComment>
              <StyledProfilePicture src={"/content/profile.jpg"} />
              <StyledCommentText>
                <StyledUpperComment>
                  <StyledProfileName>Anna Dudnik</StyledProfileName>
                  <StyledDate>3h</StyledDate>
                </StyledUpperComment>
                <StyledBottomComment>
                  Great picture! Three buddies💚 so cute and beautiful!👍👍
                </StyledBottomComment>
              </StyledCommentText>
            </StyledComment>
          </StyledComments>
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}
