import "./globals.css";
import { Arimo } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import StyledComponentsRegistry from "@/lib/registry";

const font = Arimo({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Your App</title>
      </head>
      <body style={font.style}>
        <StyledComponentsRegistry>
          <div>
            <Navbar />
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
