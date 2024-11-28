"use client";

import React, { useEffect } from "react";

export default function PageClient() {
  useEffect(() => {
    const cacheKey = "/page-content";

    const renderFromCacheOrDefault = async () => {
      const contentElement = document.querySelector("#page-content");

      if (!contentElement) {
        console.error("Element with id 'page-content' not found.");
        return;
      }

      if ("caches" in window) {
        const cache = await caches.open("page-cache");

        // Kiểm tra nếu có nội dung trong cache
        const cachedResponse = await cache.match(cacheKey);
        if (cachedResponse) {
          const cachedHTML = await cachedResponse.text();
          contentElement.innerHTML = cachedHTML; // Render nội dung từ cache
          console.log("Rendered content from cache.");
        } else {
          // Nếu chưa có cache, lấy nội dung HTML hiện tại và lưu vào cache
          const htmlContent = contentElement.outerHTML;
          const contentLength = new TextEncoder().encode(htmlContent).length; // Tính số byte của HTML

          const response = new Response(htmlContent, {
            headers: {
              "Content-Type": "text/html",
              "Content-Length": contentLength.toString(),
            },
          });

          await cache.put(cacheKey, response);
          console.log("Content saved to cache.");
        }
      } else {
        console.error("Cache Storage is not supported!");
      }
    };

    renderFromCacheOrDefault();
  }, []);

  return (
    <div id="page-content">
      <h1>Hieu-Hello-123</h1>
      <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
      </svg>
    </div>
  );
}
