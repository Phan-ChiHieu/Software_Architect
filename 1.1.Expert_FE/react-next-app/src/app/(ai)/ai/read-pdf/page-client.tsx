"use client";

import { useRouter } from "next/navigation";
import React from "react";

const fileUrl = "https://upcdn.io/kW15c97/raw/uploads/2024/07/08/4kVTjJBu6h-demo_20.pdf";
const fileName = "demo_20.pdf";

export default function PageReadPdfClient() {
  const router = useRouter();
  async function ingestPdf(fileUrl: string, fileName: string) {
    let res = await fetch("/api/ai/read-pdf/ingestPdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileUrl,
        fileName,
      }),
    });

    let data = await res.json();
    router.push(`/ai/read-pdf/docs/${data.id}`);
    //  id demo
    // router.push(`/ai/read-pdf/docs/663b34fe7acbf018eb265d95_ebook`);
  }

  return (
    <div>
      <h1>PageReadPdfClient</h1>
      <button className="border bg-gray-200 px-3 py-1 hover:bg-gray-100 transition rounded-lg" onClick={() => ingestPdf(fileUrl, fileName)}>
        IngestPdf
      </button>
    </div>
  );
}
