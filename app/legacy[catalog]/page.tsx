"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { type } from "os";
import { StyledNotFoundPage } from "@/components/Errors/styled";

type catalog = "popular" | "fresh" | "choice" | "galleries";
export default function Catalog({ params }: { params: { catalog: catalog } }) {
  const [available_catalog, set_available_catalog] = useState<catalog[]>([
    "popular",
    "fresh",
    "choice",
    "galleries",
  ]);

  const [selected, set_selected] = useState<catalog>();

  useEffect(() => {
    if (available_catalog.includes(params.catalog)) {
      set_selected(params.catalog);
    }
  }, [available_catalog, params.catalog]);

  console.log(selected);

  return (
    <div>
      {selected !== undefined ? (
        <div>{selected}</div>
      ) : (
        <StyledNotFoundPage>
          This page is no longer available
        </StyledNotFoundPage>
      )}
    </div>
  );
}
