"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ImgObserver() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      {inView && (
        <Image
          src={"https://ik.imagekit.io/factorazy/v1/file-photo.webp"}
          alt="unsplash"
          width={514}
          height={394}
          loading="lazy"
          priority={false}
          // Không hoạt động nên không cần thêm vào
          // placeholder="blur"
          // blurDataURL="https://ik.imagekit.io/factorazy/v1/file-photo.webp?tr=w-full,bl-30"
        />
      )}
    </div>
  );
}
