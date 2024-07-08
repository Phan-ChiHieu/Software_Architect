import React from "react";
import DocsClientId from "./docs-client";

export default function PageDocumentDetail({ params }: { params: { id: string } }) {
  console.log("params", params.id);
  return <DocsClientId docsId={params.id} />;
}
