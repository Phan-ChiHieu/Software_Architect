import React from "react";
import ImgBackgroundLocalSaveIdb from "./components/img-background";
import ImgObserverWithLocal from "./components/img-observer-with-local";
import ImgObserverWithHttps from "./components/img-observer-with-https";

export default function PageOptimizationWithImages() {
  return (
    <div id="page-content" className="font-[family-name:var(--font-geist-sans)] justify-center items-center flex flex-col pb-[100px]">
      <h1 className="text-red-800 text-3xl">PageOptimizationWithImages</h1>
      <ul className="pt-8">
        <li className="pt-4">
          <a href="https://tinypng.com/" target="_blank">
            1. Piny Images
          </a>
        </li>
        <li className="pt-4">{"2. Đổi định dạng ảnh từ png => webp, avif"}</li>
        <li className="pt-4">
          <ImgBackgroundLocalSaveIdb />
        </li>

        <li className="pt-4">
          <ImgObserverWithLocal />
        </li>

        <li className="pt-4">
          <ImgObserverWithHttps />
        </li>
      </ul>
    </div>
  );
}
