import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: rgb(247, 248, 250);
  display: flex;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  max-width: 1440px;
  padding-left: 64px;
  padding-right: 64px;
  justify-content: center;
  padding-top: 24px;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  padding: 24px 80px;
  justify-content: center;
  background-color: rgb(34, 34, 34);
`;

export const StyledPhotoContent = styled.div`
  background-color: #fff;
  padding: 24px;
  margin-right: 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 850px;
`;

export const StyledComments = styled.div`
  background-color: #fff;
  padding: 24px;
`;

export const StyledComment = styled.div`
  max-width: 420px;
  flex-grow: 1;
  display: flex;
  margin-bottom: 24px;
`;

export const StyledCommentCount = styled.div`
  padding-bottom: 16px;
  font-weight: bold;
`;

export const StyledProfilePicture = styled.img`
  border-radius: 9999px;
  height: 32px;
  width: 32px;
`;

export const StyledCommentText = styled.div`
  padding-left: 8px;
`;

export const StyledUpperComment = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBottomComment = styled.div``;

export const StyledProfileName = styled.div`
  font-weight: bold;
`;

export const StyledTitleText = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const StyledDate = styled.div`
  font-size: 12px;
`;

export const StyledActionList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: left;
`;

export const StyledTitleUsername = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 16px;
  line-height: 20px;
`;
export const StyledTitle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: left;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const StyledUploadDate = styled.div`
  display: flex;
  margin-bottom: 24px;
  font-size: 14px;
`;

export const StyledBoldText = styled.div`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledStatus = styled.div`
  display: flex;
  column-gap: 32px;
  padding-bottom: 16px;
`;

export const StyledStatusOption = styled.div``;

export const StyledStatusTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  display: flex;
`;

export const StyledStatusText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const StyledLikesCount = styled.div`
  padding-bottom: 24px;
`;

export const StyledCategory = styled.div`
  display: flex;
  padding-bottom: 24px;
`;

export const StyledTags = styled.div`
  display: flex;
  column-gap: 4px;
  row-gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
`;

export const StyledTag = styled.div`
  padding: 8px;
  border: 1px solid rgb(109, 115, 120);
  border-radius: 8px;
`;

export const StyledTitlePicture = styled.img`
  border-radius: 9999px;
  height: 64px;
  width: 64px;
`;
