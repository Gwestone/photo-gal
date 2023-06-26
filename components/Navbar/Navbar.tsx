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

export default function Navbar() {
  return (
    <StyledNavbarWrapper>
      <StyledNavbar>
        <StyledNavbarIcon>
          <Image
            src={"/next.svg"}
            alt={"logo"}
            width={80}
            height={22}
            priority={true}
          />
        </StyledNavbarIcon>
        <StyledLinksLeft>
          <StyledLinkLeft>Categories</StyledLinkLeft>
          <StyledLinkLeft>Licensing</StyledLinkLeft>
          <StyledLinkLeft>Blog</StyledLinkLeft>
        </StyledLinksLeft>
        <StyledLinksRight>
          <StyledLinkRight>Log in</StyledLinkRight>
          <StyledSignUp>Sign up</StyledSignUp>
        </StyledLinksRight>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
}
