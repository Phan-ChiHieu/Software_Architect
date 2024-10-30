import React from "react";
import dynamic from "next/dynamic";
const PageClient = dynamic(() => import("./page-client"), { ssr: false });

export default function page() {
  return <PageClient />;
}
