"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ImgObserver() {
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      {inView && (
        <>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
            </div>
          )}
          <Image
            src={"https://ik.imagekit.io/factorazy/v1/file-photo.webp"}
            alt="unsplash"
            width={514}
            height={394}
            loading="lazy"
            priority={false}
            onLoad={() => setLoading(false)} // Khi ảnh tải xong, set loading thành false
            onError={() => setLoading(false)} // Nếu có lỗi, cũng tắt trạng thái loading
            // Không hoạt động nên không cần thêm vào
            // placeholder="blur"
            // blurDataURL="https://ik.imagekit.io/factorazy/v1/file-photo.webp?tr=w-full,bl-30"
          />
        </>
      )}
    </div>
  );
}
