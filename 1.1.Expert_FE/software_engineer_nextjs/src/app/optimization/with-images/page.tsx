import React from "react";
import Image from "next/image";

import ImgMountains from "public/images/mountains.jpg";
import ImgObserver from "./img-observer";

export default function PageOptimizationWithImages() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] justify-center items-center flex flex-col pb-[100px]">
      <h1 className="text-red-800 text-3xl">PageOptimizationWithImages</h1>
      <ul className="pt-8">
        <li className="pt-4">
          <a href="https://tinypng.com/" target="_blank">
            1. Piny Images
          </a>
        </li>
        <li className="pt-4">{"2. Đổi định dạng ảnh từ png => webp, avif"}</li>

        <li className="pt-8 w-[1440px]">
          <p>Responsive Images Ưu tiên dùng các trường hợp là IMG Banner or Background IMG</p>

          <div className="relative">
            <Image
              src={ImgMountains}
              alt="Mountains-Background"
              sizes="100vw"
              layout="responsive"
              placeholder="blur" //? sử dụng thuộc tính này với img được đặt trong folder public của source code
              // loading="lazy" // ? Nếu đã dùng priority thì không dùng loading="lazy"
              priority={true}
              // Make image display full width
              style={{
                // width: "100%",
                // height: "auto",
                aspectRatio: "16/9",
              }}
            />
          </div>
        </li>

        <li className="pt-8">
          <p>With Image Large Mà không cần ưu tiên load trước</p>

          <div className="w-[800px] h-[400px] relative">
            <Image
              src={ImgMountains}
              alt="Mountains-Background"
              placeholder="blur" //? sử dụng thuộc tính này với img được đặt trong folder public của source code
              loading="lazy" // ? Nếu đã dùng priority={true} thì không dùng loading="lazy"
              priority={false}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </li>

        <li className="pt-4">
          3. remotePatterns
          <p>Với các hình ảnh nhỏ nên set sẵn width và height</p>
          <ImgObserver />
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">src/next.config.ts xem phần images</code>
        </li>
      </ul>
    </div>
  );
}
