"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import filephotoImg from "public/images/file-photo.avif";
import Shimmer from "@/utils/shimmerToBase64";
import useImageFromDB from "@/hooks/useImageFromDB";

const toBase64 = (str: string) => (typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str));

const IMAGE_KEY = "imgGridOne";
const IMAGE_VERSION_KEY = "imgVersionGridOne"; // Key lưu phiên bản ảnh
const CURRENT_VERSION = "imgVersionGridOne_v1"; // Phiên bản ảnh hiện tại

export default function ImgObserverWithLocal() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { imageSrc } = useImageFromDB(IMAGE_KEY, filephotoImg.src, IMAGE_VERSION_KEY, CURRENT_VERSION);

  return (
    <div className="w-full h-[3000px]">
      <div className="h-[2000px] w-full">
        <h1>ImgObserver</h1>
      </div>
      <div ref={ref}>
        {inView && imageSrc && (
          <Image
            src={imageSrc}
            alt="unsplash"
            width={514}
            height={394}
            loading="lazy"
            priority={false}
            fetchPriority="low"
            decoding="async"
            placeholder={`data:image/svg+xml;base64,${toBase64(Shimmer(514, 394))}`}
            // or
            // placeholder="blur"
          />
        )}
      </div>
    </div>
  );
}
