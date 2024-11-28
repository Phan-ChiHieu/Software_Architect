import React from "react";
import Image from "next/image";

import ImgMountains from "public/images/mountains.avif";
import Shimmer from "@/utils/shimmerToBase64";

const toBase64 = (str: string) => (typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str));

export default function ImgCustomPlaceholder() {
  return (
    <div>
      <h1>ImgCustomPlaceholder</h1>

      <div className="w-[800px] h-[400px] relative">
        <Image
          src={ImgMountains}
          alt="Mountains-Background"
          placeholder={`data:image/svg+xml;base64,${toBase64(Shimmer(800, 400))}`}
          loading="eager"
          priority={true}
          fetchPriority="high"
          fill
          sizes="100vw"
          style={
            {
              // objectFit: "cover",
            }
          }
        />
      </div>
      <Image
        src={"https://ik.imagekit.io/factorazy/v1/file-photo.webp"}
        alt="unsplash"
        width={514}
        height={394}
        loading="lazy"
        priority={false}
        decoding="async"
        fetchPriority="low"
        placeholder={`data:image/svg+xml;base64,${toBase64(Shimmer(514, 394))}`}
        // note không dùng được placeholder="blur" với ảnh từ url
      />
    </div>
  );
}
