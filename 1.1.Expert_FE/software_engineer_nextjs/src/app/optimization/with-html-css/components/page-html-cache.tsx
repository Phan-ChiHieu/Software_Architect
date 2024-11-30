'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImgBackgrounds from 'public/images/background1728.avif';

const cacheVersion = 'v1.0'; // Thay đổi version khi cần

export default function PageHtmlCache({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cacheKey = `/home-${cacheVersion}`; // Cache key bao gồm version

    const renderFromCacheOrDefault = async () => {
      const contentElement = document.querySelector('#home');

      if (!contentElement) {
        console.error("Element with id 'home' not found.");
        return;
      }

      if ('caches' in window) {
        const cache = await caches.open('page-cache');

        // Xóa cache cũ khi version thay đổi
        const keys = await cache.keys();
        for (const key of keys) {
          if (!key.url.includes(cacheVersion)) {
            await cache.delete(key); // Xóa cache cũ
            console.log(`Removed old cache: ${key.url}`);
          }
        }

        const cachedResponse = await cache.match(cacheKey);
        if (cachedResponse) {
          const cachedHTML = await cachedResponse.text();
          contentElement.innerHTML = cachedHTML; // Render nội dung từ cache
          console.log('Rendered content from cache.');
        } else {
          // Nếu chưa có cache, lấy nội dung HTML hiện tại và lưu vào cache
          const htmlContent = contentElement.outerHTML;
          const contentLength = new TextEncoder().encode(htmlContent).length;

          const response = new Response(htmlContent, {
            headers: {
              'Content-Type': 'text/html',
              'Content-Length': contentLength.toString(),
            },
          });

          await cache.put(cacheKey, response);
          console.log('Content saved to cache.');
        }
      } else {
        console.error('Cache Storage is not supported!');
      }
    };

    renderFromCacheOrDefault();
  }, []);

  return (
    <div id="home">
      <ul className="flex flex-row items-center gap-x-4">
        {[
          {
            href: '/home',
            label: 'Home',
            hoverClass: 'hover:text-blue-500 hover:scale-105',
          },
          {
            href: '/about',
            label: 'About',
            hoverClass: 'hover:text-green-500 hover:rotate-3',
          },
          {
            href: '/customer',
            label: 'Customer',
            hoverClass: 'hover:text-red-500 hover:translate-x-1',
          },
          {
            href: '/market',
            label: 'Market',
            hoverClass: 'hover:text-purple-500 hover:skew-x-3',
          },
        ].map(({ href, label, hoverClass }, index) => (
          <li key={index}>
            <Link
              href={href}
              className={`${hoverClass} transition duration-300 ease-in-out`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <h1>EdricPhan</h1>
      <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
        <rect
          width="200"
          height="100"
          x="10"
          y="10"
          rx="20"
          ry="20"
          fill="blue"
        />
      </svg>

      <div className="w-[514px] h-[394px]">{children}</div>

      <div className="mt-12 relative w-[1728px] h-[862px]">
        <Image
          src={ImgBackgrounds}
          alt="Mountains-Background"
          priority={true}
          fetchPriority="high"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}
