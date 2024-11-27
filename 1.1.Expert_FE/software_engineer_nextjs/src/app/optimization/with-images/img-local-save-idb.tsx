"use client";

import React from "react";
import Image from "next/image";

import ImageSkeletonLoader from "@/components/sekeletons/Image.skeleton";
import useImageFromDB from "@/hooks/useImageFromDB";
// import ImgBackgrounds from "public/images/background.jpg";
import ImgMountains from "public/images/mountains.jpg";

const IMAGE_KEY = "imgBackground";
const IMAGE_VERSION_KEY = "imgVersion"; // Key lưu phiên bản ảnh
const CURRENT_VERSION = "v1"; // Phiên bản ảnh hiện tại

export default function Imglocalsaveidb() {
  const { imageSrc, loading } = useImageFromDB(IMAGE_KEY, ImgMountains.src, IMAGE_VERSION_KEY, CURRENT_VERSION);

  return (
    <div className="relative w-[1440px] h-[810px]">
      <>
        {loading && <ImageSkeletonLoader width="1440px" height="810px" />}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Mountains-Background"
            sizes="100vw"
            layout="responsive"
            priority={true}
            width={1440}
            height={977}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
            }}
          />
        )}
      </>
    </div>
  );
}
