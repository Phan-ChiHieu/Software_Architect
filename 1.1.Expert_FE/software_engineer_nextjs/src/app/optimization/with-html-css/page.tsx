import dynamic from "next/dynamic";
// import PageHtmlCache from "./components/page-html-cache";
import Image from "next/image";
import filephotoImg from "public/images/file-photo.avif";

const PageHtmlCache = dynamic(() => import("./components/page-html-cache"));

export default function PageClient() {
  return (
    <div>
      <PageHtmlCache>
        <>
          <Image
            src={filephotoImg}
            alt="unsplash"
            width={514}
            height={394}
            loading="lazy"
            priority={false}
            fetchPriority="low"
            decoding="async"
            // placeholder={`data:image/svg+xml;base64,${toBase64(Shimmer(514, 394))}`}
            // or
            placeholder="blur"
            style={{
              // Để lạo bỏ warning trong trình duyệt
              width: "514px",
              height: "394px",
            }}
          />
        </>
      </PageHtmlCache>
    </div>
  );
}
