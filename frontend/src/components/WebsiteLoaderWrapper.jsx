"use client";

import { useState } from "react";
import WebsiteLoader from "@/components/WebsiteLoader";

export default function WebsiteLoaderWrapper() {
  const [loaderDone, setLoaderDone] =
    useState(false);

  if (loaderDone) {
    return null;
  }

  return (
    <WebsiteLoader
      onComplete={() => {
        setLoaderDone(true);
      }}
    />
  );
}