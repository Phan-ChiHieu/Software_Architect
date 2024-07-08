"use client";

import React, { useState } from "react";

// react-uploader
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_BYTESCALE_API_KEY ? process.env.NEXT_PUBLIC_BYTESCALE_API_KEY : "no api key found",
});

export default function PageBytescaleClient() {
  const [loading, setLoading] = useState(false);

  const options = {
    maxFileCount: 1,
    mimeTypes: ["application/pdf"],
    editor: { images: { crop: false } },
    styles: {
      colors: {
        primary: "#000", // Primary buttons & links
        error: "#d23f4d", // Error messages
      },
    },
    onValidate: async (file: File): Promise<undefined | string> => {
      //   return docsList.length > 3 ? `You've reached your limit for PDFs.` : undefined;
      return undefined;
    },
  };

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setLoading(true);
          console.log("url::", file[0].fileUrl);
          console.log("originalFileName::", file[0].originalFile.originalFileName);
          // Call api
          //   ingestPdf(file[0].fileUrl, file[0].originalFile.originalFileName || file[0].filePath);
        }
      }}
      width="470px"
      height="250px"
    />
  );

  return (
    <div>
      <h1>PageBytescaleClient</h1>
      <div>
        {loading ? (
          <button
            type="button"
            className="inline-flex items-center mt-4 px-4 py-2 font-semibold leading-6 text-lg shadow rounded-md text-black transition ease-in-out duration-150 cursor-not-allowed"
          >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Ingesting your PDF...
          </button>
        ) : (
          <UploadDropZone />
        )}
      </div>
    </div>
  );
}
