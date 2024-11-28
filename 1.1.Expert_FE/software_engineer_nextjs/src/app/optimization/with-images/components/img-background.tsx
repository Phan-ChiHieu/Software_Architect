"use client";

import React from "react";
import Image from "next/image";

import ImageSkeletonLoader from "@/components/sekeletons/Image.skeleton";
import useImageFromDB from "@/hooks/useImageFromDB";
import ImgBackgrounds from "public/images/background1728.avif";
// import ImgMountains from "public/images/mountains1728.avif";

const IMAGE_KEY = "imgBackground";
const IMAGE_VERSION_KEY = "imgVersion"; // Key lưu phiên bản ảnh
const CURRENT_VERSION = "v2"; // Phiên bản ảnh hiện tại

export default function ImgBackgroundLocalSaveIdb() {
  const { imageSrc, loading } = useImageFromDB(IMAGE_KEY, ImgBackgrounds.src, IMAGE_VERSION_KEY, CURRENT_VERSION);

  return (
    <div className="relative w-[1728px] h-[862px]">
      {loading && <ImageSkeletonLoader width="1728px" height="862px" />}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Mountains-Background"
          priority={true}
          fetchPriority="high"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}

/*
! Lưu ý quan trọng:

* 1. Luôn set width và height cho ảnh hoặc thẻ cha chứa ảnh. Kích thước ảnh luôn bằng hoặc nhỏ hơn kích thước bạn muốn đặt để tránh lỗi Properly Size Images
* 2. Luôn convert ảnh sang webp, avif để giảm dung lượng ảnh
* 3. Luôn ưu tiên load trước với ảnh là background hoặc banner
* 4 Nếu đổi hình thì luôn đổi version để tránh cache ảnh cũ
*/
